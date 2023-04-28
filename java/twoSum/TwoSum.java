import java.util.HashMap;
import java.util.Map;

/*
Example:

Input: nums = [2, 7, 11, 15], target = 9
Output: [0, 1]
Explanation: Because nums[0] + nums[1] = 2 + 7 = 9

Steps:

1. Create a HashMap that stores an Integer as both its key and value.
2. Create a for-loop that iterates over the length of the nums array.
3. Find the complement for the current index (the target number minus the number at the current index in the nums array)
4. Check if the HashMap contains the complement
  4a. If it does, return the answer in the form of an  integer array containing the indices of the two nums equalling the target num.
5. If we're after the above loop, that means the complement isn't in the HashMap yet, so store it
6. If we're after the loop, that means there's no two sum solution. Throw an IllegalArgumentException.
*/

public class TwoSum {

  public static int[] twoSum(int[] nums, int target) {
    // Create a HashMap to store the numbers and their indices
    Map<Integer, Integer> numIndexMap = new HashMap<>();

    // Iterate through the nums array
    for (int i = 0; i < nums.length; i++) {
      // Calculate the complement, which is the number we need to find in the HashMap
      int complement = target - nums[i];

      // If the complement is already in the HashMap, it means we found a pair that adds up to the
      // target
      if (numIndexMap.containsKey(complement)) {
        // Return the indices of the two numbers
        return new int[] {numIndexMap.get(complement), i};
      }

      // If the complement is not in the HashMap, store the current number and its index
      numIndexMap.put(nums[i], i);
    }

    // If no solution is found, throw an exception (should not happen as per problem statement)
    throw new IllegalArgumentException("No two sum solution");
  }

  public static void main(String[] args) {
    int[] nums = {2, 7, 11, 15};
    int target = 9;
    int[] result = twoSum(nums, target);

    System.out.println("Indices: [" + result[0] + ", " + result[1] + "]");
  }
}
