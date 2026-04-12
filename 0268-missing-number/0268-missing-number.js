/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    
    const map = new Map();

    for(let i =0; i <= nums.length; i++){
        map.set(nums[i], true);
    }

    for(let i =0; i <= nums.length; i++){
        if(!map.has(i)){
            return i;
        }
    }

};