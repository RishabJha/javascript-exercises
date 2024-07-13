const removeFromArray = function (array, ...items) {
    newArray = []
    array.forEach(element => {
        if (!items.includes(element)) {
            newArray.push(element)
        }
    });

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
