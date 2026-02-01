/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumCost = function(nums) {
    
    let first = nums.shift();

    nums.sort((a,b) => a-b)

    const second = nums[0];
    const third = nums[1];

    const ans =  first + second + third
    return ans


};