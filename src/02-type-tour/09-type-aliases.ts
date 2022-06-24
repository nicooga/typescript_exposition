() => {
  type Color = 'red'
  let x = Math.random() < .5

  if (x) {
    type Color = 'blue' // This shadows the Color declared above.
    let b: Color = 'blue'
  } else {
    let c: Color = 'red'
  }
}
