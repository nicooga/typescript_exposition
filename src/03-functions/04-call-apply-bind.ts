(() => {
  function add(a: number, b: number): number {
    return a + b
  }
  add(10, 20) // evaluates to 30
  add.apply(null, [10, 20]) // evaluates to 30
  add.call(null, 10, 20) // evaluates to 30

  // Currying!
  add.bind(null, 10, 20)() // evaluates to 30

  function foo(this: number) {
    return this + 1;
  }

  foo.bind(2)() // evaluates to 3
})();
