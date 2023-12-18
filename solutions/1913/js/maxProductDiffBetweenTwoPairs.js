/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function (nums) {
	let [biggest, prevB] = [0, 0];
	let [smallest, prevS] = [Infinity, 0];
	for (let i = 0; i < nums.length; i++) {
		let curr = nums[i];
		if (curr < smallest) {
			prevS = smallest;
			smallest = curr;
		} else if (curr < prevS) {
			prevS = curr;
		}
		if (curr > biggest) {
			prevB = biggest;
			biggest = curr;
		} else if (curr > prevB) {
			prevB = curr;
		}
	}
	return biggest * prevB - smallest * prevS;
};
