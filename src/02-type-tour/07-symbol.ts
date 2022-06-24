() => {
  let a = Symbol('a')
  let b: symbol = Symbol('b')
  var c = a === b
  let d = a + 'x'
  const e = Symbol('e')
  const f: unique symbol = Symbol('f')
  let g: unique symbol = Symbol('f')
  let h = e === e
  let i = e === f
}
