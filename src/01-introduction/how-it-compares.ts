() => {
  // Types are non-nullable
  function foo(a: number) {
    return a + 1;
  }

  foo(null);
  foo(undefined);
  foo(10);

  // Types are structural
  class Shape {
    a: number;
    b: number;
  }

  function bar(a: Shape) {
    return a;
  }

  bar({ a: 2, b: 3 });

  // Types are inferred
  const z = 2;
  foo(z);

  // Types are optional (unless you configure your compiler to not allow this)
  function unsafeFunction(a, b) {
    return a + b;
  }

  // It supports type refinement
  function refine(a: number | string) {
    if (typeof a === "number") foo(a);
    else baz(a);
  }

  // It supports type literals
  function fooz(x: "exactly this string") {
    return x;
  }

  fooz(2);
  fooz("exactly this string");
}

() => {
  // It supports definite assignment
  // Flags strictNullChecks and strictPropertyInitialization are required fort this.
  // Strict mode already sets these flags
  function baaz(x: number) {
    return x;
  }

  let a: number;

  baaz(a);
}
