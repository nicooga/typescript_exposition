(() => {
  class Burger {
    constructor(public toppings: string[]) { }
  }

  class BurgerBuilder {
    protected toppings: string[] = [];

    addLettuce(): BurgerBuilder {
      this.toppings.push("lettuce");
      return this;
    }

    addTomato(): BurgerBuilder {
      this.toppings.push("toamto");
      return this;
    }

    addCheese(): BurgerBuilder {
      this.toppings.push("cheese");
      return this;
    }

    finish(): Burger {
      return new Burger(this.toppings);
    }
  }


  const burger =
    new BurgerBuilder()
      .addLettuce()
      .addTomato()
      .addCheese()
      .finish();

  class FancyBurgerBuilder extends BurgerBuilder {
    addCaramelizedOnion(): FancyBurgerBuilder {
      this.toppings.push()
      return this;
    }
  }

  const fancyBurger =
    new FancyBurgerBuilder()
      .addLettuce()
      .addTomato()
      .addCheese()
      .addCaramelizedOnion()
      .finish();
});

(() => {
  class Burger {
    constructor(public toppings: string[]) { }
  }

  class BurgerBuilder {
    protected toppings: string[] = [];

    addLettuce(): BurgerBuilder {
      this.toppings.push("lettuce");
      return this;
    }

    addTomato(): BurgerBuilder {
      this.toppings.push("toamto");
      return this;
    }

    addCheese(): BurgerBuilder {
      this.toppings.push("cheese");
      return this;
    }

    finish(): Burger {
      return new Burger(this.toppings);
    }
  }

  class FancyBurgerBuilder extends BurgerBuilder {
    addCaramelizedOnion(): FancyBurgerBuilder {
      this.toppings.push()
      return this;
    }

    addLettuce(): FancyBurgerBuilder {
      super.addLettuce();
      return this;
    }
  }

  const fancyBurger =
    new FancyBurgerBuilder()
      .addLettuce()
      .addCaramelizedOnion()
      .finish();
});

(() => {
  class Burger {
    constructor(public toppings: string[]) { }
  }

  class BurgerBuilder {
    protected toppings: string[] = [];

    addLettuce(): this {
      this.toppings.push("lettuce");
      return this;
    }

    addTomato(): this {
      this.toppings.push("toamto");
      return this;
    }

    addCheese(): this {
      this.toppings.push("cheese");
      return this;
    }

    finish(): Burger {
      return new Burger(this.toppings);
    }
  }

  class FancyBurgerBuilder extends BurgerBuilder {
    addCaramelizedOnion(): this {
      this.toppings.push()
      return this;
    }
  }

  const fancyBurger =
    new FancyBurgerBuilder()
      .addLettuce()
      .addTomato()
      .addCheese()
      .addCaramelizedOnion()
      .finish();
})
