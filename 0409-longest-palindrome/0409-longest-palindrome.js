/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    
    let map = new Map();

    for(let i =0; i<s.length; i++){
        map.set(s[i], (map.get(s[i])||0) + 1);
    }

    let sum = 0;
    let odd = 0;
    for(let count of map.values()){
        if(count %2 === 0 ){
            sum += count;
        }else{
            sum += count -1;
            odd = 1;
        }
    }

    return  sum+odd;

};