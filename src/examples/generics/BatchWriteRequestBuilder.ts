import RequestPool from "./RequestPool";

const MAX_WRITE_OPERATIONS = 25;

interface BatchWriteRequest {
    operationsByTable: Record<
        string,
        | undefined
        | BatchWriteRequestOperation[]
    >;
}

type BatchWriteRequestOperation =
    | { type: "put", table: string; item: unknown }
    | { type: "delete"; table: string; partitionKey: string; sortKey?: string; };

export default class BatchWriteRequestBuilder {
    private readonly pool: RequestPool<IndividualBatchWriteRequestBuilder>;

    constructor (maxWriteOperations = MAX_WRITE_OPERATIONS) {
        this.pool = new RequestPool(
            maxWriteOperations,
            IndividualBatchWriteRequestBuilder
        );
    }

    addPutOperation(table: string, item: unknown): void {
        const requestBuilder = this.pool.getOrCreateRequest();
        requestBuilder.addPutOperation(table, item);
    }

    addDeleteOperation(table: string, partitionKey: string, sortKey?: string): void {
        const requestBuilder = this.pool.getOrCreateRequest();
        requestBuilder.addDeleteOperation(table, partitionKey, sortKey);
    }

    build(): BatchWriteRequest[] {
        return this.pool.requests.map(requestBuilder => requestBuilder.build());
    }
}

class IndividualBatchWriteRequestBuilder {
    private _operations = 0;
    private readonly request: BatchWriteRequest = { operationsByTable: {} };

    addPutOperation(table:string, item: unknown) {
        this.ensureEnoughCapacity();
        const operation = { type: "put", table, item } as const;
        this.getOperationsByTable(table).push(operation);
        this._operations++
    }

    addDeleteOperation(table: string, partitionKey: string, sortKey?: string) {
        this.ensureEnoughCapacity();
        const operation = { type: "delete", table, partitionKey, sortKey } as const;
        this.getOperationsByTable(table).push(operation);
        this._operations++
    }

    private ensureEnoughCapacity() {
        if (this._operations >= MAX_WRITE_OPERATIONS) {
            throw new Error("Max operations exceeded");
        }
    }

    private getOperationsByTable(table: string): BatchWriteRequestOperation[] {
        this.request.operationsByTable[table] =
            this.request.operationsByTable[table]
            ?? [] as BatchWriteRequestOperation[];

        return this.request.operationsByTable[table]!;
    }

    get operations(): number {
        return this._operations;
    }

    build(): BatchWriteRequest {
        return this.request;
    }
}
