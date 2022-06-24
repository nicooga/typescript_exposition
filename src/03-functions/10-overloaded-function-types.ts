(() => {
  type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
  }

  let reserve: Reserve = (from, to, destination) => {
    // ...
  }
});

(() => {
  type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
  }

  type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
  }

  let reserve: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
  ) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
      // Book a one-way trip
    } else if (typeof toOrDestination === 'string') {
      // Book a round trip
    }
  }
});

(() => {
  type CreateElement = {
    (tag: 'a'): HTMLAnchorElement
    (tag: 'canvas'): HTMLCanvasElement
    (tag: 'table'): HTMLTableElement
    (tag: string): HTMLElement
  }

  let createElement: CreateElement = (tag: string): HTMLElement => {
    // ...
  }
});

(() => {
  function createElement(tag: 'a'): HTMLAnchorElement
  function createElement(tag: 'canvas'): HTMLCanvasElement
  function createElement(tag: 'table'): HTMLTableElement
  function createElement(tag: string): HTMLElement {
    // ...
  }
});
