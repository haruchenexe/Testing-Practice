const caesarCipherFinal = require("./caesarCipher")


test('shift each letter by a certain place down the alphabet', () => {
    expect(
        caesarCipherFinal.caesarCipher('abc',1)
    ).toBe('bcd')
})

test('shift each letter by a certain place down the alphabet', () => {
    expect(
        caesarCipherFinal.caesarCipher('This Is Amazing!',1)
    ).toBe('uijt jt bnbajoh!')
})

test('shift each letter by a certain place down the alphabet', () => {
    expect(
        caesarCipherFinal.caesarCipher('This is a very long a string and I hope nothing is wrong WITH IT!',2)
    ).toBe('vjku ku c xgta nqpi c uvtkpi cpf k jqrg pqvjkpi ku ytqpi ykvj kv!')
})