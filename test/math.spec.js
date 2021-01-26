const assert = require('assert');
const Math = require('../src/math');
const expect = require('chai').expect;

let val = 0;

describe('Math class', function () {
  //hooks
  beforeEach(function () {
    val = 0;
  });

  it('Sum two numbers', function (done) {
    const math = new Math();
    this.timeout(3000);

    val = 5;

    math.sum(val, 5, value => {
      expect(value).to.equal(10);
      done();
    });
  });

  it('Multiply two numbers', function () {
    const math = new Math();

    // assert.strictEqual(math.multiply(val, 5), 0);
    expect(math.multiply(val, 5)).to.equal(0);
  });

  it('Object', function () {
    const obj = {
      name: 'Joao Victor',
    };

    expect(obj).to.have.property('name').equal('Joao Victor');
  });

  it.only('Compare objects', function () {
    const obj = {
      year: 2021,
    };

    const obj2 = {
      year: 2021,
    };

    expect(obj).to.deep.equal(obj2);
  });
});
