() => {
  type Cat = { name: string, purrs: boolean }
  type Dog = { name: string, barks: boolean, wags: boolean }
  type CatOrDogOrBoth = Cat | Dog
  type CatAndDog = Cat & Dog

  function vaccinate(catOrDog: Cat | Dog) { }

  vaccinate({
    name: "Mr. Fluffy",
    purrs: true,
    wags: true,
    barks: true,
  });
};

// Using literals to discriminate (refine) unions
() => {
  type Cat = { type: "cat", name: string, purrs: boolean }
  type Dog = { type: "dog", name: string, barks: boolean, wags: boolean }

  function vaccinate(catOrDog: Cat | Dog) {
    if (catOrDog.type === "cat") {
      return catOrDog;
    } else if (catOrDog.type === "dog") {
      return catOrDog;
    }
  }
};
