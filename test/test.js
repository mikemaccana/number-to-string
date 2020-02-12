const numberToWords = require("../number-to-words.js"),
  assert = require("assert");

suite(`Converts words to numbers`, function() {
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
    // There may be a betmore idomatic way to do this
    var errored = false;
    try {
      numberToWords({});
    } catch (error) {
      errored = true;
    }
    if (!errored) {
      throw new Error(`Expected error but did not throw`);
    }
  });

  test(`throws on large numbers`, function() {
    // There may be a betmore idomatic way to do this
    var errored = false;
    try {
      numberToWords(1000);
    } catch (error) {
      errored = true;
    }
    if (!errored) {
      throw new Error(`Expected error but did not throw`);
    }
  });
});
