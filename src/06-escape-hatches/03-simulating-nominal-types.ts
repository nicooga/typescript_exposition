(() => {
  type OrderID = string
  type UserID = string

  type User = {
    id: UserID
  };

  type Order = {
    id: UserID
  };

  function getUser(id: UserID): User {
    // ...
  }

  function getOrder(id: OrderID): Order {
    // ...
  }

  const order = getOrder("as287812388");
  getUser(order.id);
})();

(() => {

  type OrderID = string & { readonly brand: unique symbol };
  type UserID = string & { readonly brand: unique symbol };

  type User = {
    id: UserID
  };

  type Order = {
    id: OrderID
  };

  function getUser(id: UserID): User {
    // ...
  }

  function getOrder(id: OrderID): Order {
    // ...
  }

  const order = getOrder("as287812388" as OrderID);
  getUser(order.id);
})();
