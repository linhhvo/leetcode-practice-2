/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    /**
     * convert candyType to a set
     * the amount of candies Alice can eat is candyType.length / 2
     * if the amount of candies is smaller than the set size -> return amount of candies Alice can eat
     * if the set size is smaller -> return the set size
     */

    let candyTypeSet = new Set(candyType);

    console.log(`length ${candyType.length / 2}`);
    console.log(`size ${candyTypeSet.size}`);

    if ((candyType.length / 2) < candyTypeSet.size) {
        return candyType.length / 2;
    } else {
        return candyTypeSet.size;
    }
};

console.log(distributeCandies([1, 2]));