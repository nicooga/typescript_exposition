() => {
  function foo(x: any) {
    return x;
  }

  foo(2);
  foo("elefant");
  foo({ random: "thing" });

  const a: any = 1;
  const b = 2;
  const c = a + b;

  function bar(x: number) {
    return x;
  }

  const d: any = "a string";

  bar(d);
}
