/*
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.
*/
function pivotIndex(nums: number[]): number {
  let arrayLength = nums.length;
  

  
  for (let i = 0; i < arrayLength; i++) {
    let leftSum = 0;
    let rightSum = 0;

    if (i === 0) {
      leftSum = 0;
    } else if (i === arrayLength - 1) {
      rightSum = 0;
    }
    
    // [1,7,3,6,5,6].length === 6
  
      rightSum = nums.slice(i,arrayLength+1).reduce((acc,curr) => acc + curr, 0)
      leftSum = nums.slice(0, i+1).reduce((acc,curr) => acc+curr,0)
    if (rightSum === leftSum) {
        return i
      } 
      if (i === arrayLength - 1) {
        return -1
      }
    }
};
