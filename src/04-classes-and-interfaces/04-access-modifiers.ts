(() => {
  class Foo {
    constructor(public readonly x: string) { }
  }

  const f = new Foo("asdf");
  f.x;
  f.x = "qwer";
});
