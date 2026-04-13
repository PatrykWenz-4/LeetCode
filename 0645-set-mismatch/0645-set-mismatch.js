/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {

    let map = new Map();
    let missing = 0;
    let duplicate = 0;

    
    for(let i = 0; i< nums.length; i++ ){
        if(map.has(nums[i])){
            duplicate = nums[i];
        }
        map.set(nums[i],i)
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!map.has(i)) {
            missing = i;
            break;
        }
    }
return [duplicate, missing];

};