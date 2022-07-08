function reverseString(string) {

    let array = [];
    let count = string.length - 1

    for (let i=count; i>=0; i--) {
        array.push(string[i]);
    }

    let final = array.join('')
    return final
}

module.exports = reverseString;
