const log = console.log.bind(console);

const numberToWords = function(number) {
  if (number.constructor.name !== "Number") {
    throw new Error(`Provide a number`);
  }

  if (number > 999) {
    throw new Error(`Not implemented`);
  }

  // This test is more about being able to know the rules of English than how to program
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

  // We'll append this over time
  var answer = "";

  var hundreds = Math.floor(number / 100);
  var tensAndOnes = number % 100;

  // Zero
  if (!number) {
    return onesToWords[number];
  }

  // Check hundreds
  if (hundreds) {
    // Note: do NOT add a trailing space, as this may be the end of the word (if there's no other columns)
    answer += `${onesToWords[hundreds]} hundred`;
    if (Boolean(tensAndOnes)) {
      answer += ` and `;
    } else {
      // No more work to do
      return answer;
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

module.exports = numberToWords;
