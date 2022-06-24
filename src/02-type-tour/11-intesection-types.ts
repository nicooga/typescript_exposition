() => {
  type Cat = { name: string, purrs: boolean }
  type Dog = { name: string, barks: boolean, wags: boolean }

  type CatDog = Cat & Dog;

  const catDog: CatDog = {
    name: "Catdog",
    purrs: true,
    barks: true,
    wags: true
  };

  const notACatDog: CatDog = {
    name: "Not a CatDog",
    purrs: true
  };

  const notACatDogEither: CatDog = {
    name: "Not a CatDog",
    barks: true,
    wags: true
  };
};
