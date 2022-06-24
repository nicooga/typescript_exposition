(() => {
  enum Language {
    English,
    Spanish,
    Russian
  }

  console.log(Language);
})();

(() => {
  enum Language {
    English = 100,
    Spanish,
    Russian
  }

  console.log(Language);
})();

(() => {
  enum Language {
    English = "En",
    Spanish = "Sp",
    Russian = "Ru"
  }

  console.log(Language);
})();

(() => {
  // You can also use string values for enums, or even mix string and number values:
  enum Color {
    Red = '#c10000',
    Blue = '#007ac1',
    Pink = 0xc10050, // A hexadecimal literal
    White = 255 // A decimal literal
  }

  let red = Color.Red // Color
  let pink = Color.Pink // Color

  // TypeScript lets you access enums both by value and by key for convenience, but this
  // can get unsafe quickly:
  let a = Color.Red
  // @ts-ignore
  let b = Color.Green
  let c = Color[0]
  let d = Color[6]

  console.log({ Color });
  console.log({ a, b, c, d });
})();

(() => {
  const enum Language {
    English,
    Spanish,
    Russian
  }

  // Accessing a valid enum key
  let a = Language.English // Language

  // Accessing an invalid enum key
  let b = Language.Tagalog // Error TS2339: Property 'Tagalog' does not exist
  // on type 'typeof Language'.

  // Accessing a valid enum value
  let c = Language[0] // Error TS2476: A const enum member can only be
  // accessed using a string literal.

  // Accessing an invalid enum value
  let d = Language[6] // Error TS2476: A const enum member can only be
  // accessed using a string literal.
})();

(() => {
  const enum Flippable {
    Burger,
    Chair,
    Cup,
    Skateboard,
    Table
  }

  function flip(f: Flippable) {
    return 'flipped it'
  }

  flip(Flippable.Chair) // 'flipped it'
  flip(Flippable.Cup) // 'flipped it'
  flip(12) // 'flipped it' (!!!)
})();

// Always and if possible, use const string enums 
(() => {
  const enum Flippable {
    Burger = 'Burger',
    Chair = 'Chair',
    Cup = 'Cup',
    Skateboard = 'Skateboard',
    Table = 'Table'
  }

  function flip(f: Flippable) {
    return 'flipped it'
  }

  flip(Flippable.Chair) // 'flipped it'
  flip(Flippable.Cup) // 'flipped it'
  flip(12) // Error TS2345: Argument of type '12' is not

  // assignable to parameter of type 'Flippable'.
  flip('Hat') // Error TS2345: Argument of type '"Hat"' is not
  // assignable to parameter of type 'Flippable'.
})();
