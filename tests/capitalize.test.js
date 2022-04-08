import { capitalize } from '../code/capitalize';

test('First letter is capitalized', () => {
  expect(capitalize('jani')).toBe('Jani');
});

test('Rest of the letters are lower case', () => {
  expect(capitalize('loRem iPSum')).toBe('Lorem ipsum');
});
