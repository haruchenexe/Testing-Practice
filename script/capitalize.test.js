const capitalize = require('./capitalize');


test('capitalize the first character of a string', () => {
  expect(
    capitalize('this is a very long string')
  ).toBe('This Is A Very Long String');
})


test('capitalize the first character of a string', () => {
  expect(
    capitalize('once a upon a time there was a shiny pony tail name boo boo')
  ).toBe('Once A Upon A Time There Was A Shiny Pony Tail Name Boo Boo');
})