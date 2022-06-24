() => {
  let a: [number] = [1]
  let b: [string, string, number] = ['malcolm', 'gladwell', 1963]
  b = ['queen', 'elizabeth', 'ii', 1926]

  let trainFares: [number, number?][] = [
    [3.75],
    [8.25, 7.70],
    [10.50]
  ]

  let moreTrainFares: ([number] | [number, number])[] = [
  ]

  let friends: [string, ...string[]] = ['Sara', 'Tali', 'Chloe', 'Claire']
  friends = ["asdf"]
  friends = []

  let list: [number, boolean, ...string[]] = [1, false, 'a', 'b', 'c']
  let as: readonly number[] = [1, 2, 3]
  let bs: readonly number[] = as.concat(4)
  let three = bs[2]

  as[4] = 5
  as.push(6)

  type A = readonly string[]
  type B = ReadonlyArray<string>
  type C = Readonly<string[]>
  type D = readonly [number, string]
  type E = Readonly<[number, string]>

  // Optional names
  type Coordinates = [lat: number, lng: number];
};
