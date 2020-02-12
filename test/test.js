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

  test(`bigger than teens`, function() {
    assert.equal(numberToWords(31), "thirty one");
  });

  test(`hundreds (with no tens or ones)`, function() {
    assert.equal(numberToWords(300), "three hundred");
  });

  test(`throws on unexpected input`, function() {
    const dontProvideANumber = function() {
      numberToWords({});
    };
    assert.throws(dontProvideANumber, Error, "Provide a number");
  });

  test(`throws on large numbers`, function() {
    const provideABigNumber = function() {
      numberToWords(1000);
    };
    assert.throws(provideABigNumber, Error, "Not implemented");
  });
});
