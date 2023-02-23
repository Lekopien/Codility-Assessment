function compareNumbers(a, b) {
    const sign = "-".repeat(a < b) + "+".repeat(a > b);
    return `${a} is ${sign} ${b || "equal to"}`;
  }
  console.log(compareNumbers(5, 4));  // "5 is + 4"
console.log(compareNumbers(-4, -7));  // "-4 is + -7"
console.log(compareNumbers(2, 2));  // "2 is equal to"
console.log(compareNumbers(0, 1));  // "0 is - 1"
console.log(compareNumbers(10, 5));  // "10 is + 5"
console.log(compareNumbers(-3, 0));  // "-3 is - equal to"
console.log(compareNumbers("", 0));  // " is - equal to"
console.log(compareNumbers(null, undefined));  // "null is - undefined"
