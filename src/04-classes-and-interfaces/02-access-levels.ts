(() => {
  class Foo {
    public readonly somePublicAttribute: string;
    protected readonly someProtectedAttribute: string;
    private readonly somePrivateAttribute: string;

    constructor(
      a: string,
      b: string,
      c: string
    ) {
      this.somePublicAttribute = a;
      this.someProtectedAttribute = b;
      this.somePrivateAttribute = b;
    }

    foo(other: Foo) {
      other.somePublicAttribute;
      other.someProtectedAttribute;
      other.somePrivateAttribute;
    }

    somePublicMethod() { }
    public somePublicMethodToo() { }
    protected someProtectedMethod() { }
    private somePrivateMethod() { }
  }

  class Bar {
    bar(f: Foo) {
      f.somePublicAttribute
      f.someProtectedAttribute
      f.somePrivateAttribute
    }
  }

  const s1 = new Foo("a", "b", "c");
  const s2 = new Foo("a", "b", "c");

  s1.foo(s2);

  s1.somePublicAttribute
  s1.someProtectedAttribute
  s1.somePrivateAttribute

  s1.somePublicMethod();
  s1.someProtectedMethod();
  s1.somePrivateMethod();
})();
