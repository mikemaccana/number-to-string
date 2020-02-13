const numberToWords = require("../number-to-words.js"),
  assert = require("assert");

suite(`Converts words to numbers`, function() {
  test(`zero`, function() {
    assert.equal(numberToWords(0), "zero");
  });

  test(`single digit numbers`, function() {
    assert.equal(numberToWords(10), "ten");
  });

  test(`handles teens`, function() {
    assert.equal(numberToWords(11), "eleven");
  });

  test(`tens numbers`, function() {
    assert.equal(numberToWords(30), "thirty");
  });

  test(`bigger than teens`, function() {
    assert.equal(numberToWords(31), "thirty one");
  });

  test(`hundreds (with no tens or ones)`, function() {
    assert.equal(numberToWords(300), "three hundred");
  });

  test(`thousands`, function() {
    assert.equal(numberToWords(1305), "one thousand three hundred and five");
  });

  test(`really big number`, function() {
    assert.equal(
      numberToWords(30263484376400),
      "thirty trillion two hundred and sixty three billion four hundred and eighty four million three hundred and seventy six thousand four hundred"
    );
  });

  test(`throws on unexpected input`, function() {
    const dontProvideANumber = function() {
      numberToWords({});
    };
    assert.throws(dontProvideANumber, Error, "Provide a number");
  });

  test(`throws on large numbers`, function() {
    const provideABigNumber = function() {
      numberToWords(1000000000000000);
    };
    assert.throws(provideABigNumber, Error, "Not implemented");
  });
});
