() => {
  // (a) A function that returns a number or null
  function a(x: number) {
    if (x < 10) {
      return x
    }
    return null
  }
  // (b) A function that returns undefined
  function b() {
    return undefined
  }
  // (c) A function that returns void
  function c() {
    let a = 2 + 2
    let b = a * a
  }
  // (d) A function that returns never
  function d() {
    throw TypeError('I always error')
  }
  // (e) Another function that returns never
  function e() {
    while (true) {
      doSomething()
    }
  }

  function foo(x: number) { }

  // Use stricNullChecks or strict!
  foo(null);
}
