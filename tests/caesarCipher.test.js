import { caesarCipher } from '../code/caesarCipher';

test('Shift letters', () => {
  expect(caesarCipher('abc')).toBe('bcd');
});

test('Shift letters with z', () => {
  expect(caesarCipher('abz')).toBe('bca');
});

test('Shifting is case sensitive', () => {
  expect(caesarCipher('AbzZ')).toBe('BcaA');
});

test('Punctuation is not changed', () => {
  expect(caesarCipher('Ab.zZ!')).toBe('Bc.aA!');
});
