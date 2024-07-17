const fibonacci = function (num) {
    num = Number(num)
    let sum = 1
    if (num < 0) {
        return "OOPS"
    }
    if (num <= 1) {
        return num
    }
    if (Number.isInteger(num)) {
        let prev = 0
        let curr = 1
        for (let i = 1; i < num; i++) {
            sum = curr + prev
            prev = curr
            curr = sum
        }
    }
    return sum
};

// Do not edit below this line
module.exports = fibonacci;
