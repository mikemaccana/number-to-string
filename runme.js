const assert = require("assert");
const log = console.log.bind(console);

const numberToWords = function(number) {
  if (number.constructor.name !== "Number") {
    throw new Error(`Provide a number`);
  }
  // There's a weird pattern in English here let me think about it
  // Can't Google right now just need to type this shit out
  var onesToWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "nineteen"
  ];

  // This test is more about being able to know the rules of English than how to program

  var onesAndTens = String(number).slice(0, 2);

  log({ onesAndTens });

  if (onesAndTens < 20) {
    return onesToWords[onesAndTens];
  } else {
    throw new Error(`Not implemented yet`);
  }
};

// Trying some small numbers first
assert(numberToWords(1) === "one");
assert(numberToWords(10) === "ten");
assert(numberToWords(11) === "eleven");
