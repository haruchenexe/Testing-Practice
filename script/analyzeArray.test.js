const analyzeArrayObj = require("./analyzeArray")

test('takes an array of numbers and returns the average, min, max, and length as an object', () => {
    expect(
        analyzeArrayObj.analyzeArray([1,8,3,4,2,6])
    ).toEqual({
        average: 4, 
        length: 6, 
        maximum: 8, 
        minimum: 1})
})

test('takes an array of numbers and returns the average, min, max, and length as an object', () => {
    expect(
        analyzeArrayObj.analyzeArray()
    ).toBe('missing array')
})

test('takes an array of numbers and returns the average, min, max, and length as an object', () => {
    expect(
        analyzeArrayObj.analyzeArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])
    ).toEqual({
        average: 10.5, 
        length: 20, 
        maximum: 20, 
        minimum: 1})
})