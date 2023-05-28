export default class RequestPool<T extends RequestLike> {
    private readonly pool: T[] = [];

    constructor(
        private readonly maxOperationsPerRequest: number,
        private readonly requestConstructor: new (...args: any[]) => T
    ) {}

    getOrCreateRequest(): T {
        if (
            this.pool.length === 0
            || this.pool[this.pool.length-1].operations === this.maxOperationsPerRequest
        ) {
            this.pool.push(new this.requestConstructor());
        }

        return this.pool[this.pool.length-1];
    }

    get requests(): Readonly<T[]> {
        return this.pool;
    }
}

interface RequestLike {
    operations: number;
}