const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
	calculateDepth(arr, currentDepth = 1) {
		if (!Array.isArray(arr)) {
		  return currentDepth;
		}
	
		if (arr.length === 0) {
		  return currentDepth + 1;
		}
	
		const depths = arr.map(item => this.calculateDepth(item, currentDepth + 1));
		const maxDepth = Math.max(...depths);
		return maxDepth;
	  }
}

module.exports = {
  DepthCalculator
};
