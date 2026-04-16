/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var solveQueries = function(nums, queries) {
    let n = nums.length;
    let map = new Map();
    
    let minDistances = new Array(n).fill(Infinity);
    
    for (let i = 0; i < 2 * n; i++) {
        let idx = i % n; 
        let val = nums[idx];
        
        if (map.has(val)) {
            let lastSeenIndex = map.get(val);
            let dist = i - lastSeenIndex;
            
            if (dist > 0 && dist < n) {
                minDistances[idx] = Math.min(minDistances[idx], dist);
                minDistances[lastSeenIndex % n] = Math.min(minDistances[lastSeenIndex % n], dist);
            }
        }
        
        map.set(val, i);
    }
    
    let answer = [];
    
    for (let query of queries) {
        if (minDistances[query] === Infinity) {
            answer.push(-1);
        } else {
            answer.push(minDistances[query]);
        }
    }
    
    return answer;
};