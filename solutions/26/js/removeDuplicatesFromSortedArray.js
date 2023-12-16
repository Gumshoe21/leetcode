/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
	let [left, right] = [0, 0];

	while (right < nums.length) {
		let [leftNum, rightVal] = [nums[left], nums[right]];
		let isEqual = leftNum == rightVal;

		if (!isEqual) {
			left++;
			nums[left] = rightVal;
		}
		right++;
	}
	return left + 1;
};
