/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function(colors) {
    
    let maxDistance = 0;

    for(let i =0; i<colors.length; i++){
        
        for(let j =0; j<colors.length; j++){

            if(colors[i] !== colors[j]){
                maxDistance = Math.max(maxDistance, Math.abs(j-i));
                
            }
        }
    }

    return maxDistance
};