/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {

    let map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    let sum = 0;

    for(let [num,count] of map){
        if(count == 1){
            sum = sum+num;
        }
    }

    return sum

};