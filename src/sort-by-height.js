const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
	const substractedElementsIndexes = [];
	const filteredArray = arr.filter(elem => elem !== -1).sort((a, b) => a-b );
	
	const findIndexes = (arr, elem) => { 
		for (let i = 0; i < arr.length; i++) { 
			if (arr[i] === elem) {
				substractedElementsIndexes.push(i);
			 }
		}
	}
	findIndexes(arr, -1)

	for (let i = 0; i < substractedElementsIndexes.length; i++) {
		filteredArray.splice(substractedElementsIndexes[i], 0, -1);
	 }

	return filteredArray;
}

module.exports = {
  sortByHeight
};
