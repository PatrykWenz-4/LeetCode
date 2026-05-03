/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    
    if (s.length !== goal.length) {
        return false;
    }

    let length = s.length;

    for (let i = 0; i < length; i++) {
        s = s.slice(1) + s[0];
        if (s === goal) {
            return true;
        }
    }
    
    return false;


};