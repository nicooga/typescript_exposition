() => {
  let a = [1, 2, 3]
  var b = ['a', 'b']
  let c: string[] = ['a']
  let d = [1, 'a']
  const e = [2, 'b']

  let f = ['red']

  f.push('blue')
  f.push(true)

  let g = []

  g.push(1)
  g.push('red')

  let h: number[] = []

  h.push(1)
  h.push('red')

  e.map(element => element * 2);
  e.map(element => typeof element === "number" ? element * 2 : element);

  function buildArray() {
    let a = [] // any[]
    a.push(1) // number[]
    a.push('x') // (string | number)[]
    return a
  }
};
