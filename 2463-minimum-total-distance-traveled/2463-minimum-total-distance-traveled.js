/**
 * @param {number[]} robot
 * @param {number[][]} factory
 * @return {number}
 */
var minimumTotalDistance = function(robot, factory) {

    robot.sort((a, b) => a - b);
    factory.sort((a, b) => a[0] - b[0]);
    
    const flatFactories = [];
    for (const [pos, limit] of factory) {
        for (let k = 0; k < limit; k++) {
            flatFactories.push(pos);
        }
    }
    
    const n = robot.length;
    const m = flatFactories.length;
    

    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(Infinity));
    

    for (let j = 0; j <= m; j++) {
        dp[n][j] = 0;
    }
    
    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            const skipFactory = dp[i][j + 1];
            
            const useFactory = Math.abs(robot[i] - flatFactories[j]) + dp[i + 1][j + 1];
            
            dp[i][j] = Math.min(skipFactory, useFactory);
        }
    }
    
    return dp[0][0];
};