(() => {
  let x = {
    a() {
      return this
    }
  }

  x.a() // this is the object x in the body of a()

  let a = x.a
  a() // now, this is undefined in the body of a()

  function fancyDate() {
    // TS complains here only because I have noImplicitThis mode enabled
    return `${this.getDate()}/${this.getMonth}/${this.getFullYear()}`
  }

  fancyDate.call(new Date) // evaluates to "4/14/2005"
  fancyDate() // Uncaught TypeError: this.getDate is not a function
})();

(() => {
  function fancyDate(this: Date) {
    return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`
  }
  fancyDate.call(new Date) // evaluates to "6/13/2008"
  fancyDate() // Error TS2684: The 'this' context of type 'void' is
  // not assignable to method's 'this' of type 'Date'.
})()
