(() => {
  function map<T, U>(array: T[], f: (item: T) => U): U[] {
    // ...
  }

  map(
    ['a', 'b', 'c'], // An array of T
    _ => _ === 'a' // A function that returns a U
  )
});

(() => {
  let promise = new Promise(resolve =>
    resolve(45)
  )

  promise.then(result => // Inferred as {}
    result * 4 // Error TS2362: The left-hand side of an arithmetic operation must
  )
});

(() => {
  let promise = new Promise<number>(resolve =>
    resolve(45)
  )

  promise.then(result => // number
    result * 4
  )
})
