/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    let map = new Map();

    for(let i=0; i<s.length; i++){
        map.set(s[i], (map.get(s[i])||0)+1 )
    }

    for(let i=0; i<t.length; i++){
        let char = t[i];

        if(map.has(char) && map.get(char) > 0) {
            map.set(char, map.get(char)-1 )
        }else {
            return char;
        }

    }
};