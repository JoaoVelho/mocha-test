const assert = require('assert');
const Math = require('../src/math');

describe('Math class', function () {
  it('Sum two numbers', function (done) {
    const math = new Math();
    this.timeout(3000);

    math.sum(5, 5, value => {
      assert.strictEqual(value, 10);
      done();
    });
  });

  it('Multiply two numbers', function () {
    const math = new Math();

    assert.strictEqual(math.multiply(5, 5), 25);
  });
});
