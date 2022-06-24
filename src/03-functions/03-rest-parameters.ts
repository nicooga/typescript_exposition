(() => {
  function sum(numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
  }
  sum([1, 2, 3]) // evaluates to 6
})();

(() => {
  function sumVariadic(): number {
    return Array
      .from(arguments) // `arguments` is defined at runtime
      .reduce((total, n) => total + n, 0)
  }

  // TS ignores arguments usage, thinks our function takes no arguments
  sumVariadic(1, 2, 3) // evaluates to 6
})();

(() => {
  function sumVariadicSafe(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
  }

  sumVariadicSafe(1, 2, 3) // evaluates to 6
})()
