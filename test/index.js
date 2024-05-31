const assert = require('assert');
const { isNumberOdd } = require('../index');

describe('isNumberOdd', () => {
  it('should return true if the number is odd', () => {
    assert.strictEqual(isNumberOdd(1), true);
  });

  it('should return false if the number is even', () => {
    assert.strictEqual(isNumberOdd(2), false);
  });
});
