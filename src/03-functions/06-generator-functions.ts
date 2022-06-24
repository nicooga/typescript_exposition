(() => {
  function* createFibonacciGenerator() {
    let a = 0
    let b = 1
    while (true) {
      yield a;
      [a, b] = [b, a + b]
    }
  }
  let fibonacciGenerator = createFibonacciGenerator() // IterableIterator<number>
  fibonacciGenerator.next() // evaluates to {value: 0, done: false}
  fibonacciGenerator.next() // evaluates to {value: 1, done: false}
  fibonacciGenerator.next() // evaluates to {value: 1, done: false}
  fibonacciGenerator.next() // evaluates to {value: 2, done: false}
  fibonacciGenerator.next() // evaluates to {value: 3, done: false}
  fibonacciGenerator.next() // evaluates to {value: 5, done: false}
})();

// Explicit annotation
(() => {
  function* createNumbers(): IterableIterator<number> {
    let n = 0
    while (1) {
      yield n++
    }
  }
  let numbers = createNumbers()
  numbers.next() // evaluates to {value: 0, done: false}
  numbers.next() // evaluates to {value: 1, done: false}
  numbers.next() // evaluates to {value: 2, done: false}
})();
