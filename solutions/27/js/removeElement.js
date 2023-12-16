/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	// let p1 = nums.length - 2;
	// let p2 = nums.length - 1;

	// if (!nums) return 0;
	// if (nums.length === 1) {
	//     if (nums[0] === val) return 0;
	//     return 1;
	// }

	// while (p1 > -1) {
	//     if (nums[p2] === val) {

	//     }
	// }
	/*
 let ptr1 = nums.length - 2;
 let ptr2 = nums.length - 1;

 if (!nums) return 0;

 if (nums.length === 1) {
		 if (nums[0] === val) return 0;
		 return 1; // if we get here, number of non-k = 1
 }

 while (ptr1 > -1) {
		 
 }
 */

	let ptr1 = nums.length - 2;
	let ptr2 = nums.length - 1;

	if (!nums) return 0;
	if (nums.length === 1) {
		if (nums[0] === val) return 0;
		return 1;
	}

	while (ptr1 > -1) {
		if (nums[ptr2] === val) {
			ptr2--;

			while (nums[ptr1] === val) {
				ptr2--;
				ptr1--;
			}
		} else if (nums[ptr1] === val) {
			let temp = nums[ptr1];
			nums[ptr1] = nums[ptr2];
			nums[ptr2] = temp;
			ptr2--;
		}

		ptr1--;
	}

	return ptr2 + 1;

	//    for (let i = 0; i < nums.length; i++) {
	//        if (nums[i] === val) {
	//            nums.splice(i, 1);
	//            i--;
	//        }
	//    }

	//     return nums.length;
	// [2,3,3,2]
	// v = 3
	// i = 0
	// nums[i] is not val
	// i = 1
	// i-- is so that we can't land on the correct spot in the array after we spliced it
	// e.g., if [2,3,3,2] and i = 1 (pointing to 3), then after splice we get [2,3,2] so we must decrement i to point to 2 because the loop itself (i.e. the i++) part will increment it back to where it should be
};
