/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
    morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];

    /**
     * convert character in each word to ASCII number - 97 to match with index of morse code
     * get morse code from array and concat it to transform the word
     * add the morse code to a set
     * return size of set
     */

    let diffCodes = new Set();

    for (let word of words) {
        let transformed = '';

        for (let char of word) {
            let idx = char.codePointAt() - 97;
            transformed += morseCode[idx];
        }

        diffCodes.add(transformed);
    }

    return diffCodes.size;
};