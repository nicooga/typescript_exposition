() => {
  let a: object = {
    b: 'x'
  }
}

// Inference
() => {
  let a = {
    b: 'x'
  }

  a.b

  let b = {
    c: {
      d: 'f'
    }
  }
}

() => {
  let a: { b: number } = {
    b: 12
  }
}

// Structural typing
() => {
  let c: {
    firstName: string
    lastName: string
  } = {
    firstName: 'john',
    lastName: 'barrowman'
  }

  class Person {
    constructor(
      public firstName: string, // public is shorthand for
      // this.firstName = firstName
      public lastName: string
    ) { }
  }

  c = new Person('matt', 'smith')
}

() => {
  let a: { b: number }
  a = {}
  a = {
    b: 1,
    c: 2
  }
}

// Index signatures
() => {
  let a: {
    b: number
    c?: string
    [key: number]: boolean
  }

  a = { b: 1 }
  a = { b: 1, c: undefined }
  a = { b: 1, c: 'd' }
  a = { b: 1, 10: true }
  a = { b: 1, 10: true, 20: false }
  a = { 10: true }
  a = { b: 1, 33: 'red' }
}

// Access modifiers
() => {
  let user: {
    readonly firstName: string
  } = {
    firstName: 'abby'
  }
  user.firstName
  user.firstName =
    'abbey with an e'
}
