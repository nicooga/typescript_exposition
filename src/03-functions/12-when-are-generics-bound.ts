(() => {
  type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
  }

  // let filter: Filter = (array, f) =>
})();

(() => {
  type Filter<T> = {
    (array: T[], f: (item: T) => boolean): T[]
  }

  let filterNumbers: Filter<number> = function filter(array, f) {
    let result = []
    for (let i = 0; i < array.length; i++) {
      let item = array[i]
      if (f(item)) {
        result.push(item)
      }
    }
    return result
  }

  filterNumbers([1, 2, 3], (x) => x % 2 === 0);
  filterNumbers(["1", 2, 3], (x) => x % 2 === 0);
})();
