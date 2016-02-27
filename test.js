var expect = require('chai').expect;
var advSort = require('./index.js');

describe('tests for array sorting', function () {
  it('check for descending output', function () {
    var arr = advSort([1, 2, 3, 4], 'desc');
    expect(arr).to.eql([4, 3, 2, 1]);
  });

  it('check for ascending output', function () {
    var arr = advSort([4, 3, 2, 1], 'asc');
    expect(arr).to.eql([1, 2, 3, 4]);
  });

  it('check for ascending output without options', function () {
    var arr = advSort([1, 2, 3, 4]);
    expect(arr).to.eql([1, 2, 3, 4]);
  });
});
