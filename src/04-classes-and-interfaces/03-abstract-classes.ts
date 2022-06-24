(() => {
  abstract class Animal {
    abstract move(): void;
  }

  class Platypus extends Animal {
    move(): void {
      console.log("I swim or walk");
    }
  }

  class SeaSponge extends Animal {
    move(): void {
      console.log("I don't move that much...");
    }
  }

  class SomeBird extends Animal {
    move(): void {
      console.log("I fly!");
    }
  }
});
