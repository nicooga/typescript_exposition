export default interface PrimaryKey {
    table: string;
    partitionKey: string;
    sortKey?: string;
}