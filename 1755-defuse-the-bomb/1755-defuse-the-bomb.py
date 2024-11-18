class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        
        
        n = len(code)
        result = [0] * n
        start = 1
        window_sum = 0
        end = k
        if k == 0:
            return result
        
        if k < 0:
            start = n - abs(k)
            end = n -1

        for i in range(start, end+1):
            window_sum += code[i]
        for i in range(n):
            result[i] = window_sum
            window_sum -= code[(start) % n]
            window_sum += code[(end+1) % n]
            
            start += 1
            end += 1

        print(window_sum)

        return result


