/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    
    let map = new Map();

    for(let i=0; i<s.length; i++){
        map.set(s[i], (map.get(s[i])||0) +1)
    }

    let result = [];

    function subtract(digitWord, count){
        for(let char of digitWord){
            map.set(char, map.get(char) - count);
        }
    }

    function printDigit(letter, number, intNumber){
        if(map.get(letter) > 0){
            let count = map.get(letter);
            subtract(number, count);
        
            for(let i = 0; i < count; i++){
                result.push(intNumber);
            }
        }
    }

    printDigit('z', 'zero', '0')
    printDigit('w', 'two', '2')
    printDigit('u', 'four', '4')
    printDigit('x', 'six', '6')
    printDigit('g', 'eight', '8')

    printDigit('o', 'one', '1')
    printDigit('r', 'three', '3')
    printDigit('f', 'five', '5')
    printDigit('s', 'seven', '7')
    printDigit('i', 'nine', '9')

    return result.sort().join('');

};