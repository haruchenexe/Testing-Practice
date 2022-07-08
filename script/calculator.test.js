const calculator = require('./calculator');


test('add two values', () => {
    expect(
        calculator.add(1,2)
    ).toBe(3)
})

test('add two values', () => {
    expect(
        calculator.add(10,9)
    ).toBe(19)
})

test('subtract two values', () => {
    expect(
        calculator.subtract(1,2)
    ).toBe(-1)
})

test('subtract two values', () => {
    expect(
        calculator.subtract(10,9)
    ).toBe(1)
})

test('multiply two values', () => {
    expect(
        calculator.mulltiply(1,2)
    ).toBe(2)
})

test('multiply two values', () => {
    expect(
        calculator.mulltiply(10,9)
    ).toBe(90)
})

test('divide two values', () => {
    expect(
        calculator.divide(1,2)
    ).toBe(0.5)
})

test('multiply two values', () => {
    expect(
        calculator.divide(10,5)
    ).toBe(2)
})
