class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        
        heap = []
        for score in stones:
            heapq.heappush(heap, -score)

        while len(heap) > 1:
            heaviest1 = -heapq.heappop(heap)  
            heaviest2 = -heapq.heappop(heap)

            if heaviest1 != heaviest2:
                heaviest3 = heaviest1-heaviest2
                heapq.heappush(heap, -heaviest3)

        return -heap[0] if heap else 0
