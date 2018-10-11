export const fizzBuzz = n => {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("fizz buzz");
    } else {
      if (i % 3 === 0) {
        console.log("fizz");
      }
      if (i % 5 === 0) {
        console.log("buzz");
      }
    }
  }
};
