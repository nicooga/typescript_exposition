(() => {
  function sum(a: number, b: number): number {
    return a + b
  }

  type Sum = (a: number, b: number) => number


  // function greet(name: string)
  type Greet = (name: string) => string

  // function log(message: string, userId?: string)
  type Log = (message: string, userId?: string) => void

  // function sumVariadicSafe(...numbers: number[]): number
  type SumVariadicSafe = (...numbers: number[]) => number
})();

(() => {
  type Log = (message: string, userId?: string) => void

  let log: Log = (
    message,
    userId = 'Not signed in'
  ) => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
  }
});
