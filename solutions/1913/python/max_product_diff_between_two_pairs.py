class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        min = float('inf')
        prev_min = min
        max = 0
        prev_max = 0
        for n in nums:
            if n > max:
                prev_max = max
                max = n
            elif n > prev_max:
                prev_max = n
            
            if n < min:
                prev_min = min
                min = n
            elif n < prev_min:
                prev_min = n
        return max*prev_max - min*prev_min 
