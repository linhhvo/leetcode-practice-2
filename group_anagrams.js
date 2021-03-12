/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
    let anagramsMap = new Map();
    let result = [];

    for (let str of strs) {
        let sorted = str.split('').sort().join('');

        if (anagramsMap.has(sorted)) {
            anagramsMap.get(sorted).push(str);
        } else {
            anagramsMap.set(sorted, [str]);
        }
    }

    for (let value of anagramsMap.values()) {
        result.push(value);
    }

    return result;
};

// split string and sort the characters
// use the sorted array as key in map
// add the original string to an array and set as map value
// return all map values

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));