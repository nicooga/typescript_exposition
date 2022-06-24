(() => {
  class Foo {
    constructor(
      public x: string,
      private y: string,
      protected z: string
      w: string
    ) { }
  }

  const f = new Foo();

  f.x
  f.y
  f.z
  f.w
});

(() => {
  class Foo {
    public x: string;
    private y: string;
    protected z: string;

    constructor(
      x: string,
      y: string,
      z: string
    ) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  }

  const f = new Foo();

  f.x
  f.y
  f.z
});
