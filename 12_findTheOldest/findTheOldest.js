function getDeath(birth, death) {
    if (!death) {
        death = (new Date()).getFullYear()
        return death - birth
    }
    return death - birth
}

const findTheOldest = function (array) {
    const sortArray = array.sort((first, second) => {
        const a = getDeath(first.yearOfBirth, first.yearOfDeath)
        const b = getDeath(second.yearOfBirth, second.yearOfDeath)
        if (a > b) {
            return -1
        } else {
            return 1
        }
    })

    return sortArray[0]
};

// Do not edit below this line
module.exports = findTheOldest;
