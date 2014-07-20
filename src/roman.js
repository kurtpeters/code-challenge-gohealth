(function() {
  'use strict'
  /**
   * @constant {Array}
   * @description Scoped roman numeral collection
   */
  var ROMAN_NUMERALS = [
    ['I','II','III','IV','V','VI','VII','VIII','IX'], // 1 - 9
    ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'], // 1* - 9*
    ['C','CC','CCC','CD','D','DC','DCC','DCCC','DM'], // 1** - 9**
    ['M', 'MM', 'MMM'] // 1*** - 3***
  ];
  /**
   * @function toRoman
   * @alias Number.toRoman
   * @returns {String}
   * @description Conversion of numeric values to roman numerals
   */
  Number.prototype.toRoman = function() {
    if(typeof this !== 'number' || this < 1 || this > 3999) { return ""; }
    // store numeric collection to compare against; create result queue
    var collection = String(Math.floor(this)).split('').reverse(),
        result = [];
    // push related numeral to result for each number in collection
    for(var idx in collection) {
      if(collection[idx] === '0') continue;
      result.push(ROMAN_NUMERALS[idx][collection[idx]-1]);
    } collection = null;
    // reverse and join result for expected output
    return result.reverse().join('');
  };
})();