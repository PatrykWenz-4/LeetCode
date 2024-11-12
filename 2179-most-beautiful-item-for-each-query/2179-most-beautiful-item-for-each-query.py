class Solution:
    def maximumBeauty(self, items, queries):
        ans = [0] * len(queries)
        items.sort()

        queries_with_indices = []
        for i in range(len(queries)):
            queries_with_indices.append([queries[i], i])
        
        queries_with_indices.sort()
        
        item_index = 0
        max_beauty = 0

        for i in range(len(queries)):
            query = queries_with_indices[i][0]
            original_index = queries_with_indices[i][1]

            while item_index < len(items) and items[item_index][0] <= query:
                max_beauty = max(max_beauty, items[item_index][1])
                item_index += 1

            ans[original_index] = max_beauty

        return ans