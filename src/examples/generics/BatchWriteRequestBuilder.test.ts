import BatchWriteRequestBuilder from "./BatchWriteRequestBuilder";

describe("BatchWriteRequestBuilder", () => {
    it("builds as many requests as needed", () => {
        const builder = new BatchWriteRequestBuilder(5);

        for (const table of ['tableA', 'tableB', 'tableC', 'tableD']) {
            for (let i = 0; i < 3; i++) {
                builder.addPutOperation(table, { id: i });
            }

            for (let i = 0; i < 3; i++) {
                builder.addDeleteOperation(table, `pk${i}`);
            }
        }

        expect(builder.build()).toEqual([
            {
                "operationsByTable": {
                    "tableA": [
                        {
                            "type": "put",
                            "table": "tableA",
                            "item": {
                                "id": 0
                            }
                        },
                        {
                            "type": "put",
                            "table": "tableA",
                            "item": {
                                "id": 1
                            }
                        },
                        {
                            "type": "put",
                            "table": "tableA",
                            "item": {
                                "id": 2
                            }
                        },
                        {
                            "type": "delete",
                            "table": "tableA",
                            "partitionKey": "pk0"
                        },
                        {
                            "type": "delete",
                            "table": "tableA",
                            "partitionKey": "pk1"
                        }
                    ]
                }
            },
            {
                "operationsByTable": {
                    "tableA": [
                        {
                            "type": "delete",
                            "table": "tableA",
                            "partitionKey": "pk2"
                        }
                    ],
                    "tableB": [
                        {
                            "type": "put",
                            "table": "tableB",
                            "item": {
                                "id": 0
                            }
                        },
                        {
                            "type": "put",
                            "table": "tableB",
                            "item": {
                                "id": 1
                            }
                        },
                        {
                            "type": "put",
                            "table": "tableB",
                            "item": {
                                "id": 2
                            }
                        },
                        {
                            "type": "delete",
                            "table": "tableB",
                            "partitionKey": "pk0"
                        }
                    ]
                }
            },
            {
                "operationsByTable": {
                    "tableB": [
                        {
                            "type": "delete",
                            "table": "tableB",
                            "partitionKey": "pk1"
                        },
                        {
                            "type": "delete",
                            "table": "tableB",
                            "partitionKey": "pk2"
                        }
                    ],
                    "tableC": [
                        {
                            "type": "put",
                            "table": "tableC",
                            "item": {
                                "id": 0
                            }
                        },
                        {
                            "type": "put",
                            "table": "tableC",
                            "item": {
                                "id": 1
                            }
                        },
                        {
                            "type": "put",
                            "table": "tableC",
                            "item": {
                                "id": 2
                            }
                        }
                    ]
                }
            },
            {
                "operationsByTable": {
                    "tableC": [
                        {
                            "type": "delete",
                            "table": "tableC",
                            "partitionKey": "pk0"
                        },
                        {
                            "type": "delete",
                            "table": "tableC",
                            "partitionKey": "pk1"
                        },
                        {
                            "type": "delete",
                            "table": "tableC",
                            "partitionKey": "pk2"
                        }
                    ],
                    "tableD": [
                        {
                            "type": "put",
                            "table": "tableD",
                            "item": {
                                "id": 0
                            }
                        },
                        {
                            "type": "put",
                            "table": "tableD",
                            "item": {
                                "id": 1
                            }
                        }
                    ]
                }
            },
            {
                "operationsByTable": {
                    "tableD": [
                        {
                            "type": "put",
                            "table": "tableD",
                            "item": {
                                "id": 2
                            }
                        },
                        {
                            "type": "delete",
                            "table": "tableD",
                            "partitionKey": "pk0"
                        },
                        {
                            "type": "delete",
                            "table": "tableD",
                            "partitionKey": "pk1"
                        },
                        {
                            "type": "delete",
                            "table": "tableD",
                            "partitionKey": "pk2"
                        }
                    ]
                }
            }
        ]);
    });
});