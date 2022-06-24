// Iterable
//   Any object that contains a property called Symbol.itera
//   tor, whose value is a function that returns an iterator.

// Iterator
//   Any object that defines a method called next, which returns
//   an object with the properties value and done.

(() => {
  let numbers = {
    *[Symbol.iterator]() {
      for (let n = 1; n <= 10; n++) {
        yield n
      }
    }
  }

  for (let a of numbers) {
    // 1, 2, 3, etc.
  }

  // Spread an iterator
  let allNumbers = [...numbers] // number[]

  // Destructure an iterator
  let [one, two, ...rest] = numbers // [number, number, number[]]
})()
