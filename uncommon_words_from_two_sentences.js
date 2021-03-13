/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
    /**
    * loop through each sentence, add the word as a map key and increment its count value
    * return map keys that has value == 1
    */

    let countMap = new Map();
    let combinedArray = A.split(' ').concat(B.split(' '));

    for (let word of combinedArray) {
        if (word) countMap.set(word, countMap.get(word) + 1 || 1);
    }

    let result = [];

    for (let [key, value] of countMap) {
        if (value == 1) result.push(key);
    }
    return result;
};

// console.log(uncommonFromSentences("this apple is sweet", ""));