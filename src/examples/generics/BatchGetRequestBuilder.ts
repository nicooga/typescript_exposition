import PrimaryKey from "./PrimaryKey";
import RequestPool from "./RequestPool";

const MAX_GET_OPERATIONS = 100;

interface BatchGetRequest {
    operations: PrimaryKey[];
}

export default class BatchGetRequestBuilder {
    private readonly pool: RequestPool<IndividualBatchGetRequestBuilder>;

    constructor(maxGetOperations = MAX_GET_OPERATIONS) {
        this.pool = new RequestPool(
            maxGetOperations,
            IndividualBatchGetRequestBuilder
        );
    }

    addGetOperation(key: PrimaryKey): void{
        const requestBuilder = this.pool.getOrCreateRequest();
        requestBuilder.addGetOperation(key);
    }

    build(): BatchGetRequest[] {
        return this.pool.requests.map(requestBuilder => requestBuilder.build());
    }
}

class IndividualBatchGetRequestBuilder {
    private _operations = 0;
    private readonly request: BatchGetRequest = { operations: [] };

    addGetOperation(key: PrimaryKey) {
        if (this._operations >= MAX_GET_OPERATIONS) {
            throw new Error("Max operations exceeded");
        }
        this.request.operations.push(key);
        this._operations++
    }

    get operations(): number {
        return this._operations;
    }

    build(): BatchGetRequest {
        return this.request;
    }
}
