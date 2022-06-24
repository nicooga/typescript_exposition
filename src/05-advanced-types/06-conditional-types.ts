(() => {
  type IsString<T> = T extends string
    ? true
    : false

  type A = IsString<string> // true
  type B = IsString<number> // false
});

(() => {
  class Cache<K, V> {
    private cache: Record<string, K> = {};

    set(key: K, value: V) {
      this.cache[key] = value;
    }

    get(key: K): V {
      return this.cache[key];
    }
  }
})();

(() => {
  class Cache<K, V> {
    private cache: Record<string, V> = {};

    constructor(private stringifier: (key: K) => string) { }

    set(key: K, value: V) {
      const _key = this.stringifier(key);
      this.cache[_key] = value;
    }

    get(key: K): V {
      const _key = this.stringifier(key);
      return this.cache[_key];
    }
  }

  const cache = new Cache<string, number>();
  cache.set("a", 1);
  cache.set("b", 2);
})();

(() => {
  class Cache<K, V> {
    private cache: Record<string, V> = {};

    constructor(private stringifier?: (key: K) => string) { }

    set(key: K, value: V) {
      const _key = this.stringifier ? this.stringifier(key) : key;
      this.cache[_key] = value;
    }

    get(key: K): V {
      const _key = this.stringifier ? this.stringifier(key) : key;
      return this.cache[_key];
    }
  }

  const cache = new Cache<string, number>();
  cache.set("a", 1);
  cache.set("b", 2);
})();

(() => {
  class Cache<K, V> {
    private cache: Record<string, V> = {};
    private stringifier?: (k: K) => string;

    constructor(
      ...args: K extends string ? [] : [(k: K) => string]
    ) {
      this.stringifier = args[0];
    }

    set(key: K, value: V) {
      const _key = this.strinfify(key);
      this.cache[_key] = value;
    }

    get(key: K): V {
      const _key = this.strinfify(key);
      return this.cache[_key];
    }

    private strinfify(k: K): string {
      return (this.stringifier ? this.stringifier(k) : k) as string;
    }
  }

  const cache1 = new Cache<string, number>();
  cache1.set("a", 1);
  cache1.set("b", 2);

  const cache2 = new Cache<number, number>(k => k.toString());
  cache2.set(2, 1);
  cache2.set(2, 2);
})();
