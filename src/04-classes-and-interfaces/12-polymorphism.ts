class MyMap<K extends string, V> {
  constructor(initialKey: K, initialValue: V) {
  }

  get(key: K): V {
    // ...
  }

  set(key: K, value: V): void {
    // ...
  }

  merge<K1, V1>(map: Map<K1, V1>): MyMap<K | K1, V | V1> {
    // ...
  }
}
