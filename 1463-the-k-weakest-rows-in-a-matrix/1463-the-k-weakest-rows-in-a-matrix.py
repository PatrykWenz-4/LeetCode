class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        
        heap = []
        for index,score in enumerate(mat):
            soldiers = sum(score)
            heapq.heappush(heap, (soldiers,index))
        print(heap)

        weakest_rows = []
        for x in range(k):
            weakest_rows.append(heapq.heappop(heap)[1])

        return weakest_rows