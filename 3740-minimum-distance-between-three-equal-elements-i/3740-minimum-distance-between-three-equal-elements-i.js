/**
 * @param {number[]} nums
 * @return {number}
 */
function minimumDistance(nums) {
    const indexMap = new Map();
    let minDistance = Infinity;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        if (!indexMap.has(num)) {
            indexMap.set(num, []);
        }
    
        const indices = indexMap.get(num);
        indices.push(i);

        if (indices.length >= 3) {
            const firstOfThree = indices[indices.length - 3];
            const lastOfThree = indices[indices.length - 1];
            
            const distance = 2 * (lastOfThree - firstOfThree);
            minDistance = Math.min(minDistance, distance);
        }
    }

    return minDistance === Infinity ? -1 : minDistance;
}