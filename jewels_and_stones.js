/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    /**
     * convert jewels into a set
     * loop through all stones, if stone matches with a set item, increment the count value
     * return count value
     */

    let jewelsSet = new Set(jewels.split(''));
    let stoneCount = 0;

    for (let stone of stones) {
        if (jewelsSet.has(stone)) {
            stoneCount++;
        }
    }

    return stoneCount;
};