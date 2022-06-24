(() => {
  class Zebra {
    trot() {
      // ...
    }
  }

  class Poodle {
    trot() {
      // ...
    }
  }

  function doTheThing(animal: Zebra) {
    animal.trot()
  }

  let zebra = new Zebra
  let poodle = new Poodle

  doTheThing(zebra) // OK
  doTheThing(poodle) // OK
});
