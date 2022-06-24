(() => {
  function formatInput(input: string) {
    // ...
  }

  function getUserInput(): string | number {
    // ...
  }

  let input = getUserInput()

  // Assert that input is a string
  formatInput(input as string)

  // This is equivalent to
  formatInput(<string>input)
});
