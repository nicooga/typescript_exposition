import BatchGetRequestBuilder from "./BatchGetRequestBuilder";

describe('BatchGetRequestBuilder', () => {
    it('builds as many requests as needed', () => {
        const builder = new BatchGetRequestBuilder(5);

        for (const table of ['tableA', 'tableB', 'tableC', 'tableD']) {
            for (let i = 0; i < 3; i++) {
                builder.addGetOperation({ table, partitionKey: `pk${i}` });
            }
        }

        expect(builder.build()).toEqual(
            [
                {
                    "operations": [
                        { "partitionKey": "pk0", "table": "tableA" },
                        { "partitionKey": "pk1", "table": "tableA" },
                        { "partitionKey": "pk2", "table": "tableA" },
                        { "partitionKey": "pk0", "table": "tableB" },
                        { "partitionKey": "pk1", "table": "tableB" }
                    ]
                },
                {
                    "operations": [
                        { "partitionKey": "pk2", "table": "tableB" },
                        { "partitionKey": "pk0", "table": "tableC" },
                        { "partitionKey": "pk1", "table": "tableC" },
                        { "partitionKey": "pk2", "table": "tableC" },
                        { "partitionKey": "pk0", "table": "tableD" }
                    ]
                },
                {
                    "operations": [
                        { "partitionKey": "pk1", "table": "tableD" },
                        { "partitionKey": "pk2", "table": "tableD" }
                    ]
                }
            ]
        );
    });
});