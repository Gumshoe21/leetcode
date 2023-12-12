/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let maxSum = nums[0];
	let currSum = 0;

	for (let i = 0; i < nums.length; i++) {
		currSum = currSum > 0 ? currSum : 0;
		currSum += nums[i];
		maxSum = currSum > maxSum ? currSum : maxSum;
	}
	return maxSum;
};
