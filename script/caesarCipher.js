var caesarCipherFinal = {
    caesarCipher(string, Shiftinput) {
        let lowerString = this.checkString(string)
        
        let array = [];

        for (let i=0; i<lowerString.length; i++) {

            let startingInput = lowerString[i].charCodeAt()

            if (startingInput > 122 || startingInput < 97) {
                array.push(startingInput);
                
            } else if (startingInput == 122) {
                let zInput = 96 + Shiftinput
                array.push(zInput)
            } else {
                let shiftInput = lowerString[i].charCodeAt() + Shiftinput;

                if (shiftInput > 122) {
                    let upperShift = shiftInput - 122 + 96
                    array.push(upperShift)
                } else if (shiftInput == 122) {
                    let zShiftInput = 96 + Shiftinput
                    array.push(zShiftInput)
                } else {
                    array.push(shiftInput);
                }
            }
        }

        let finalarray = this.codeToChar(array);
        let arrayToString = finalarray.join('');
        return arrayToString
    },
    checkString(string) {
        const result = typeof(string) != 'string' ? 'This is not a string!' : string.toLowerCase()
        return result
    },codeToChar(string) {

        let charArray = [];

        for (let i=0; i<string.length; i++) {
            charArray.push(String.fromCharCode(string[i]))
        }
        return charArray
    }
}



module.exports = caesarCipherFinal


// function caesarCipher(string, Shiftinput) {

//     let lowerString = checkString(string)
//     let array = [];

//     for (let i=0; i<lowerString.length; i++) {

//         let shiftInput = lowerString[i].charCodeAt() + input;

//         if (shiftInput > 122) {
//             let correctedShift = shiftInput - 122 + 96
//             array.push(correctedShift);
//         } else {
//             array.push(shiftInput);
//         }

//     }

//     let finalarray = codeToChar(array);
//     return arrayToString = finalarray.join('')
// }


// caesarCipher('abcdefghijklmnopqrstuzwxyzAZ', 1)


// function checkString(string) {
//     const result = typeof(string) != 'string' ? 'This is not a string!' : string.toLowerCase()
//     return result
// }


// function codeToChar(array) {

//     let charArray = [];

//     for (let i=0; i<array.length; i++) {
//         charArray.push(String.fromCharCode(array[i]))
//     }

//     return charArray
// }
