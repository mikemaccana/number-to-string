const log = console.log.bind(console);

const numberToWords = function(number) {
  if (number.constructor.name !== "Number") {
    throw new Error(`Provide a number`);
  }
  // There's a weird pattern in English here let me think about it
  // Can't Google right now just need to type this shit out
  const onesToWords = [
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

  const tensToWords = [
    null,
    null,
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ];

  // This test is more about being able to know the rules of English than how to program

  // We'll append this over time
  var answer = "";

  if (number < 20) {
    return onesToWords[number];
  }

  const tens = Math.floor(number / 10);
  const ones = number % 10;

  if (number < 100) {
    return `${tensToWords[tens]} ${onesToWords[ones]}`;
  }

  throw new Error(`Not implemented`);
};

// Trying some small numbers first
// I really should use mocha, expect etc as it'd return expecyted vs actual

// log(numberToWords(1));
// log(numberToWords(10));
// log(numberToWords(11));
// Adding this because it tests more logic
log(numberToWords(99));
// log(numberToWords(111));
