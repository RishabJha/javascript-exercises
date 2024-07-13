const sumAll = function (start, end) {

    if (start < 0 || end < 0 || typeof start !== 'number' || typeof end != 'number') {
        return 'ERROR'
    }

    let ans = 0
    if (start > end) {
        const temp = start
        start = end
        end = temp
    }
    for (let i = start; i <= end; i++) {
        ans += i
    }
    return ans
};

// Do not edit below this line
module.exports = sumAll;
