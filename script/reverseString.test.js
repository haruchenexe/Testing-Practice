const reverseString = require('./reverseString');

test('reverse the entire string', () => {
    expect(
        reverseString('This is a string and let us reverse it')
    ).toBe('ti esrever su tel dna gnirts a si sihT');
  })
  

  test('reverse the entire string', () => {
    expect(
        reverseString('They See Me Rollin, they hate it')
    ).toBe('ti etah yeht ,nilloR eM eeS yehT');
  })