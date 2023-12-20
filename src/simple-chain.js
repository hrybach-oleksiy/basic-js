const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	chain: [],
	getLength() {
		return this.chain.length;
	},
	addLink(value) {
		console.log(value);
		if (value === undefined) {
			this.chain.push(`(  )`);
		} else {
			this.chain.push(`( ${value} )`);
		}
		return this;
	},
	removeLink(position) {
		if (isNaN(position) || this.chain.length - 1 < position || position % 1 > 0) {
			this.chain.length = 0;
			throw Error('You can\'t remove incorrect link!');
		} else { 
			if (this.chain.length > 0) {
				if (position === 1) {
					this.chain.shift(); // Remove the first element
				} else {
					this.chain.splice(-position + 1, 1); // Use negative index to count from the end after the chain is reversed
				}
			}
		}
		// if (Number.isInteger(position) == false || position < 1
		// 	|| position > this.chain.length) { 
		// 		throw new Error('You can\'t remove incorrect link!');
		// 	} 
        // //if (position == 4) return this.chainArray;
		// position -= 1;
		// this.chain.splice(position, 1);
		return this;
	},
	reverseChain() {
		this.chain = this.chain.reverse();
    return this;
	},
	finishChain() {
		const result = this.chain.join('~~');
		this.chain.length = 0;
		return result;
	}
};
// npm run test test/carbon-dating.test
module.exports = {
  chainMaker
};
