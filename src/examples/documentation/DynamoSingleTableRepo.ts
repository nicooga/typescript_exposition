const DynamoBatchGetRequestBuilder = undefined as any;
const DynamoBatchWriteRequestBuilder = undefined as any;
const DynamoDbClient = undefined as any;
type SingleTableEntity = any;
type Key = any;

export const SORT_KEY_PLACEHOLDER = "#PLACEHOLDER";

/**
 * Stores multiple entities in a single DynamoDB table.
 * It works for any entity that implements `SingleTableEntity`.
 * 
 * Don't use this class directly. Instead, for each entity type, create a new polymorphic repo that depends on this class.
 * Within that repo, implement the needed access patterns by delegating to this repo.
 * In order to support multiple access patterns, you may need to denormalize (duplicate) the data in multiple formats.
 * Prefer denormalization to using secondary indexes, as these cannot be queried in batches.
 * 
 * The underlying table must have a string partition key named `PK` and a string sort key named `SK`.
 * 
 * @example
 * 
 * const repo = new DynamoSingleTableRepo('some_table');
 * 
 * await repo.put({
 *   partitionKey: { entityType: 'User', entityId: 'u1' },
 *   sortKey: { entityType: 'Post', entityId: 'p1' },
 *   title: 'My first post',
 *   content: 'Hello world!'
 * });
 */
export default class DynamoSingleTableRepo {
    private readonly client = new DynamoDbClient();

    constructor(private readonly table: string) { }

    async put(entity: SingleTableEntity): Promise<void> {
        const { partitionKey, sortKey, ...restOfEntity } = entity;

        const PK = this.partitionKeyToString(partitionKey);
        const SK = this.sortKeyToString(sortKey);

        await this.client.put({
            TableName: this.table,
            Item: { PK, SK, ...restOfEntity }
        }).promise();
    }

    async putAll(entities: SingleTableEntity[]): Promise<void> {
        const builder = new DynamoBatchWriteRequestBuilder();

        entities.forEach(entity => {
            const { partitionKey, sortKey, ...restOfEntity } = entity;
            const PK = this.partitionKeyToString(partitionKey);
            const SK = this.sortKeyToString(sortKey);
            builder.addPutRequest(this.table, { PK, SK, ...restOfEntity });
        });

        const requests = builder.build();
        const responses = await Promise.all(requests.map(req => this.client.batchWrite(req).promise()));

        responses.forEach(resp => {
            if (resp.UnprocessedItems && resp.UnprocessedItems[this.table]) {
                throw new Error(`Unprocessed items: ${JSON.stringify(resp.UnprocessedItems[this.table])}`);
            }
        });
    }

    async queryByPartitionKey(pk: Key): Promise<unknown[]> {
        return await this.client.queryAll({
            TableName: this.table,
            KeyConditionExpression: "PK = :pk",
            ExpressionAttributeValues: { ":pk": this.partitionKeyToString(pk) }
        });
    }

    async getByPrimaryKey(pk: Key, sk: Key): Promise<unknown[]> {
        return await this.client.queryAll({
            TableName: this.table,
            KeyConditionExpression: "PK = :pk AND SK = :sk",
            ExpressionAttributeValues: {
                ":pk": this.partitionKeyToString(pk),
                ":sk": this.sortKeyToString(sk)
            }
        });
    }

    /**
     * Get entities for multiple partition keys in batches, assuming the sort key is a placeholder.
     * The queried entities may have different parent entity types.
     */
    async getByPartitionKeysAndPlaceholderSortKeyInBatches(pks: Key[]): Promise<unknown[]> {
        const builder = new DynamoBatchGetRequestBuilder();

        pks.forEach(pk => {
            const PK = this.partitionKeyToString(pk);
            const SK = SORT_KEY_PLACEHOLDER;
            builder.addGetRequest(this.table, { PK, SK });
        });

        const requests = builder.build();

        const responses = await Promise.all(
            requests.map(request => this.client.batchGet(request).promise())
        );

        const items: unknown[] = [];

        responses.forEach(resp => {
            if (resp.UnprocessedKeys && resp.UnprocessedKeys[this.table]) {
                throw new Error("Unprocessed keys found");
            }

            resp.Responses?.[this.table].forEach(item => items.push(item));
        });

        return items;
    }

    private partitionKeyToString(pk: Key): string {
        return `${pk.entityType}#${pk.entityId}`;
    }

    private sortKeyToString(sk: Key | undefined): string {
        return sk ? `${sk.entityType}#${sk.entityId}` : SORT_KEY_PLACEHOLDER;
    }
}