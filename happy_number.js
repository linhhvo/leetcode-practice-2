/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let unique = new Set();
    let num = n;

    while (!unique.has(num)) {
        unique.add(num);

        let numStr = num.toString();
        num = 0;

        for (let i = 0; i < numStr.length; i++) {
            num += Math.pow(+numStr[i], 2);
        }

        if (num === 1) return true;
    }

    return false;
};