/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
var countBalls = function(lowLimit, highLimit) {
    
    let map = new Map();
    let maxCount = 0;

    for(lowLimit; lowLimit<= highLimit; lowLimit++){
        let ballSum = 0
        let temp = lowLimit;

        while(temp > 0){
            ballSum += temp%10;
            temp = Math.floor(temp / 10);
        }
        
        map.set(ballSum, (map.get(ballSum) || 0) + 1);

        console.log(map);
        console.log(ballSum);

        if (map.get(ballSum) > maxCount) {
            maxCount = map.get(ballSum);
        }
    }

    return maxCount;
};