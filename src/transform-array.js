const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  const result = [...arr];
  const discardNext = '--discard-next';
  const discardPrev = '--discard-prev';
  const doubleNext = '--double-next';
  const doublePrev = '--double-prev';

  result.forEach(elem => {
      if(elem === doubleNext) {
          result.splice(result.indexOf(doubleNext), 1, result.indexOf(doubleNext) + 1);
      } else if(elem === doublePrev) {
          result.splice(result.indexOf(doublePrev), 1, result.indexOf(doublePrev));
      } else if(elem === discardPrev) {
          result.splice(result.indexOf(discardPrev) - 1, 2);
      } else if(elem === discardNext) {
          result.splice(result.indexOf(discardNext), 2);
          
      }
  });
return result;
}

module.exports = {
  transform
};
