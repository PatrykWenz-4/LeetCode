/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const words = s.split(' ');
    
    if (pattern.length !== words.length) {
        return false;
    }

    const map = new Map();

    for (let i = 0; i < pattern.length; i++) {
        const charKey = "char_" + pattern[i];
        const wordKey = "word_" + words[i];

        if (map.get(charKey) !== map.get(wordKey)) {
            return false;
        }

        map.set(charKey, i);
        map.set(wordKey, i);
    }

    return true;
};