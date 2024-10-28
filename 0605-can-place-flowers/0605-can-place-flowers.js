/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    
    let num = 0;
    for(let i =0; i< flowerbed.length; i++){
        if(flowerbed[i] == 0 && !flowerbed[i-1] && !flowerbed[i+1]){
            flowerbed[i] = 1;
            num += 1;
        }
    }
    return num >= n;
}