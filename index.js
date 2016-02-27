'use strict';

module.exports = function (arr, option) {
  var asc = function (a, b) {
    return a - b;
  };

  var desc = function (a, b) {
    return b - a;
  };

  if (arr) {
    if (option && option !== 'undefined' && option === 'desc') {
      return arr.sort(desc);
    }
    return arr.sort(asc);
  }
};
