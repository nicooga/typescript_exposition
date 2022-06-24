(() => {
  function filter(array, f) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      if (f(item)) {
        result.push(item)
      }
    }
    return result
  }
  filter([1, 2, 3, 4], _ => _ < 3) // evaluates to [1, 2]
})();

(() => {
  type Filter = {
    (array: unknown, f: unknown) => unknown[]
  }
})();

(() => {
  type Filter = {
    (array: unknown, f: unknown) => unknown[]
  }
})();

(() => {
  type Filter = {
    (array: number[], f: (item: number) => boolean): number[]
    (array: string[], f: (item: string) => boolean): string[]
  }
})();

(() => {
  type Filter = {
    (array: number[], f: (item: number) => boolean): number[]
    (array: string[], f: (item: string) => boolean): string[]
    (array: object[], f: (item: object) => boolean): object[]
  }
})();

(() => {
  type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
  }
})();

(() => {
  type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
  }

  let filter: Filter = function filter(array, f) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      if (f(item)) {
        result.push(item)
      }
    }
    return result
  }

  // (a) T is bound to number
  filter([1, 2, 3], _ => _ > 2)

  // (b) T is bound to string
  filter(['a', 'b'], _ => _ !== 'b')

  // (c) T is bound to {firstName: string}
  let names = [
    { firstName: 'beth' },
    { firstName: 'caitlyn' },
    { firstName: 'xin' }
  ]
  filter(names, _ => _.firstName.startsWith('b'))
})();
