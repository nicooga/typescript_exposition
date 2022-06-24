(() => {
  class Foo {
    constructor(public x: string) { }

    fooz() { }
  }

  class Bar extends Foo {
    constructor() {
      super("something");
    }

    booze() {
      super.fooz();
    }
  }
});

(() => {
  class SomeError extends Error {
    constructor(
      public somethingRelevantToTheError: unknown
    ) {
      super(`This is a useful message that has something to do with ${somethingRelevantToTheError}`);
    }
  }
});
