/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function(nums) {
    
    const numSet = new Set(nums);

    let maxLength = 0;

    for (let num of numSet) {
        let length = 0;
        let current = num;

        while (numSet.has(current)) {
            length++;
            current = current * current;
        }

        if (length > 1) {
            maxLength = Math.max(maxLength, length);
        }
    }
    
    return maxLength > 1 ? maxLength : -1;
};