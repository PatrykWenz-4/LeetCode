/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let maxArea = 0;
    const cols = matrix[0].length;
    let heights = new Array(cols).fill(0);


    for(let row of matrix){
        for(let j =0; j<cols; j++){

            if(row[j] === '1'){
                heights[j] += 1;
            }else{
                heights[j] = 0;
            }
        }

        let stack = []; 
        stack.push(-1); 

        for (let i = 0; i < cols; i++) {
            while (stack.length > 1 && heights[stack[stack.length - 1]] >= heights[i]) {
                let h = heights[stack.pop()];
                let w = i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, h * w);
            }
            stack.push(i);
        }
        
        while (stack.length > 1) {
            let h = heights[stack.pop()];
            let w = cols - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, h * w);
        }
    }
    
    return maxArea;
};