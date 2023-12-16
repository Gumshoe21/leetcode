class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
       num_index_dict = {}
       for i in range(len(nums)):
           complement = target - nums[i]
           if complement in num_index_dict:
               return [num_index_dict[complement], i]
           num_index_dict[nums[i]] = i