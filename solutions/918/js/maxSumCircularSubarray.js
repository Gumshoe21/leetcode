/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
	let [globalMax, globalMin] = [nums[0], nums[0]];
	let [currentMax, currentMin] = [0, 0];
	let total = 0;

	for (num of nums) {
		currentMax = Math.max(num, currentMax + num);
		currentMin = Math.min(num, currentMin + num);
		total += num;
		globalMax = Math.max(globalMax, currentMax);
		globalMin = Math.min(globalMin, currentMin);
	}

	return globalMax > 0 ? Math.max(globalMax, total - globalMin) : globalMax;
};

/**
 * 
 * We want to find the following:
 * 	- The sum of the array within nums that has the smallest sum (globMin)
 *  - The sum array within nums that has the largest sum (globMax)
 *	- The total sum of nums 
 *	
 * With these three values, we can easily find out which out whether the greatest array (including circular arrays) is either part of the original array whole (i.e. not circular), or part of a circular array.
 * 
 * By subtracting the globMin from the total 
 */
/*
[20, -2, 5, -2, 20]
41 

currMin - 20  -2  3   -2  17
currMax - 20  18  23  20  40
globMin - 20 -2 -2    -2  -2 
globMax - 20 20 23 23  40
*/