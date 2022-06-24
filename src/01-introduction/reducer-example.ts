() => {
  type State = {
    someValue?: number;
    anotherValue?: number;
  }

  type Action =
    | FooAction
    | BarAction;

  type FooAction = {
    type: "Foo",
    payload: {
      propertyA: number;
      propertyB: number;
    }
  };

  type BarAction = {
    type: "Bar",
    payload: {
      propertyC: string;
      propertyD: string;
    }
  };

  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "Foo":
        console.log(action);
        return { strangeProp: "2" };

      case "Bar":
        console.log(action);
        return { someValue: "not a number" };
    }
  }

  const state = {};

  reducer(state, { type: "Foo" });
  reducer(state, { type: "Foo", payload: { strangeProp: 3, propertyA: "2" } });
  reducer(state, { type: "Bar" });
};
