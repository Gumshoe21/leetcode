function singleNumber(arr: number[]): number {
  let obj = {}
  // Iterate over arr and assign each number a key in our object. The values will be a running total of the frequency of the numbers. The number with the key that has a value of 1 will be our answer.
  for (let i = 0; i < arr.length; i++) {
    // If the object already has this key, increment its frequency.
    if (obj[arr[i]]) {
      obj[arr[i]]++
    } else {
      // ...otherwise, create it and assign it 1 to begin with.
      obj[arr[i]] = 1
    }
  }
  // Find index where correct number occurs only once.
  let indexOfSingleNumber = Object.values(obj).indexOf(1)
  // Return key (as a number) that represents the digits that occurs only once.
  return +Object.keys(obj)[indexOfSingleNumber]
};
