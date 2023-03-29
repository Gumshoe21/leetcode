function runningSum(nums: number[]): number[] {
  // result array
  let result = []
  // running tally of array's total sum
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    // add each number to the sum
    sum += nums[i]
    // assign the sum up to the point to the coinciding index in the array
    result[i] = sum
  }
  return result
}
