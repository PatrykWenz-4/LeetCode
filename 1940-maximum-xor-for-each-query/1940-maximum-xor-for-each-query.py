class Solution:
    def getMaximumXor(self, nums: List[int], maximumBit: int) -> List[int]:
        
        max_val = (1 << maximumBit) - 1
        res = []
        cumulativeXOR = 0

        for num in nums:
            cumulativeXOR ^= num

        for i in range(len(nums)):
            res.append(cumulativeXOR ^ max_val)
            cumulativeXOR ^= nums[-1 - i]
        
        return res

