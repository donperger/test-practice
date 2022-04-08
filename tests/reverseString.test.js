import { reverseString } from '../code/reverseString';

test('String is reversed (1)', () => {
  expect(reverseString('abcd')).toBe('dcba');
});

test('String is reversed (2)', () => {
  expect(reverseString('AbcD')).toBe('DcbA');
});

test('String is reversed (3)', () => {
  expect(reverseString('1234')).toBe('4321');
});

test('Argument is not a string', () => {
  expect(reverseString(123)).toBe('This is not a string!');
});
