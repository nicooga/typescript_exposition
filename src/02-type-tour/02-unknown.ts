() => {
  function foo(x: number) {
    return x;
  }

  const a: unknown = 1;

  foo(a);

  if (typeof a === "number") {
    foo(a);
  }
};
