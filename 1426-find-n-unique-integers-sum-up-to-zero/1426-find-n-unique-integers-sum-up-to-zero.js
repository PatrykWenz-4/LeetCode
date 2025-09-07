/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    let ans = [];
    if (n % 2 !== 0) {
        ans.push(0);
    }

    for(let i=1; i<=n/2; i++){
        ans.push(-i,i);
    }
    return ans
};