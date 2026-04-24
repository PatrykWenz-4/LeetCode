/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let map = new Map();

    for (const move of moves) {
        map.set(move, (map.get(move) || 0) + 1);
    }

    const L = map.get('L') || 0;
    const R = map.get('R') || 0;
    const underscore = map.get('_') || 0;

    return Math.abs(L - R) + underscore;

};