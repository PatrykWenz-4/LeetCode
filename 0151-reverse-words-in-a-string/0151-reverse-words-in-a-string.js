/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ');
    let res = [];



    words.forEach(word => {
        if (word) {
            res.unshift(word);
        }
    });

    return res.join(' ')

};