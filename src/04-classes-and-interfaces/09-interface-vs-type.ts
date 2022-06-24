(() => {
  type A = number;
  type B = A | string;
});

(() => {
  interface A {
    good(x: number): string
    bad(x: number): string
  }

  interface B extends A {
    good(x: string | number): string
    bad(x: string): string // Error TS2430: Interface 'B' incorrectly extends
  }                        // interface 'A'. Type 'number' is not assignable to type 'string'.
});

(() => {
  interface A { foo: string; }
  interface A { bar: string; }
  interface A { baz: string; }

  const a: A = {}; // Type '{}' is missing the following properties from type 'A': foo, bar, baz
}
