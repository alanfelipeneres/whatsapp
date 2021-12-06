const compare = (a, b) => {
    // if (a.id > b.id) {
    //     return -1
    // }

    // if (b.id > a.id) {
    //     return 1
    // }

    // return 0

    return (a, b) => a.id - b.id;

}

module.exports = compare