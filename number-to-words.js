const log = console.log.bind(console);

const numberToWords = function(number) {
  if (number.constructor.name !== "Number") {
    throw new Error(`Provide a number`);
  }

  if (number > 999) {
    throw new Error(`Not implemented`);
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

  var hundreds = Math.floor(number / 100);
  var tensAndOnes = number % 100;

  // Check hundreds
  if (hundreds) {
    answer += `${onesToWords[hundreds]} hundred `;
    if (Boolean(tensAndOnes)) {
      answer += `and `;
    }
  }

  // Then do tensAndOnes
  if (tensAndOnes < 20) {
    // Don't bother with 'and zero'
    if (tensAndOnes) {
      answer += onesToWords[tensAndOnes];
    }
  } else {
    const tens = Math.floor(tensAndOnes / 10);
    const ones = tensAndOnes % 10;
    answer += `${tensToWords[tens]} ${onesToWords[ones]}`;
  }

  return answer;
};

// Trying some small numbers first
// I really should use mocha, expect etc as it'd return expecyted vs actual

log(numberToWords(1));
log(numberToWords(10));
log(numberToWords(11));
log(numberToWords(22));
log(numberToWords(111));
log(numberToWords(121));
log(numberToWords(300));
