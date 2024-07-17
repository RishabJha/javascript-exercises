const palindromes = function (inputString) {
    inputString = inputString.toLowerCase
    const n = inputString.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (inputString.at(i) !== inputString.at(n - 1 - i)) {
            return false
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
