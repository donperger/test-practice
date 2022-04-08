import { calculator } from '../code/calculator';

test('Calculator is an object', () => {
  expect(typeof calculator).toBe('object');
});

test('Add two positive numbers', () => {
  expect(calculator.add(1, 3)).toBe(4);
});

test('Add two negative numbers', () => {
  expect(calculator.add(-1, -3)).toBe(-4);
});

test('Add a positive and a negative number', () => {
  expect(calculator.add(-1, 3)).toBe(2);
});

test('Substract two positive numbers', () => {
  expect(calculator.substract(5, 2)).toBe(3);
});

test('Substract two negative numbers', () => {
  expect(calculator.substract(-5, -2)).toBe(-3);
});

test('Substract a positive and a negative number', () => {
  expect(calculator.substract(-5, 2)).toBe(-7);
});

test('Divide two positive numbers', () => {
  expect(calculator.divide(25, 5)).toBe(5);
});

test('Divide two negative numbers', () => {
  expect(calculator.divide(-25, -5)).toBe(5);
});

test('Divide positive and a negative number', () => {
  expect(calculator.divide(25, -5)).toBe(-5);
});

test(`Can't divide with 0`, () => {
  expect(calculator.divide(25, 0)).toBe(`0 can't be a divider!`);
});

test('Multiply two positive numbers', () => {
  expect(calculator.multiply(5, 5)).toBe(25);
});

test('Multiply two negative numbers', () => {
  expect(calculator.multiply(-5, -5)).toBe(25);
});

test('Multiply tpositive and a negative number', () => {
  expect(calculator.multiply(-5, 5)).toBe(-25);
});

test('Multiply 0 and a negative number', () => {
  expect(calculator.multiply(0, -5)).toBe(0);
});
