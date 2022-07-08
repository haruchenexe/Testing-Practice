function capitalize(string) {
    let storage = string.split(' ')
    let array = [];
    
    for (let i=0; i<storage.length; i++) {
        array.push(storage[i].charAt(0).toUpperCase() + storage[i].slice(1))
    }
    let final = array.join(' ')
    return final
}

module.exports = capitalize;