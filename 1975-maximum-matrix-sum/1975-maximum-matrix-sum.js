/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
        
        var sumNegative = 0;
        var min_abs_val = Infinity;
        var total_sum = 0;

        for(row of matrix){
            for(val of row){
                total_sum += Math.abs(val)
                if(val <0){
                    sumNegative += +1;
                }
                min_abs_val = Math.min(min_abs_val, Math.abs(val))
            }
        }

        if(sumNegative % 2 == 0){
            return total_sum 
        }else
            return total_sum - 2*min_abs_val

};
