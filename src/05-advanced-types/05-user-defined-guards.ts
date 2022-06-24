(() => {
  function isString(a: unknown): boolean {
    return typeof a === 'string'
  }

  isString('a') // evaluates to true
  isString([7]) // evaluates to false

  function parseInput(input: string | number) {
    let formattedInput: string
    if (isString(input)) {
      formattedInput = input.toUpperCase() // Error TS2339: Property 'toUpperCase'
    }
  }
})();


(() => {
  function isString(a: unknown): a is string {
    return typeof a === 'string'
  }

  isString('a') // evaluates to true
  isString([7]) // evaluates to false

  function parseInput(input: string | number) {
    let formattedInput: string
    if (isString(input)) {
      formattedInput = input.toUpperCase() // Error TS2339: Property 'toUpperCase'
    }
  }
})();
