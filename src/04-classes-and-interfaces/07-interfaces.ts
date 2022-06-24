(() => {
  type Sushi = {
    calories: number
    salty: boolean
    tasty: boolean
  }

  interface ISushi {
    calories: number
    salty: boolean
    tasty: boolean
  }

  let s1: Sushi = {
    calories: 100,
    salty: true,
    tasty: true
  }

  let s2: ISushi = {
    calories: 100,
    salty: true,
    tasty: true
  }

  s1 = s2;
  s2 = s1;
})();

(() => {
  type Food = {
    calories: number
    tasty: boolean
  }

  type Sushi = Food & {
    salty: boolean
  }

  type Cake = Food & {
    sweet: boolean
  }
})();

(() => {
  interface Food {
    calories: number
    tasty: boolean
  }

  interface Sushi extends Food {
    salty: boolean
  }

  interface Cake extends Food {
    sweet: boolean
  }
})();

(() => {
  interface Foo extends SomeClass {
  }

  interface Foo extends SomeType {
  }

  class SomeClass { }
  type SomeType = { bar: string; };
})
