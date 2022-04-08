function reverseString(str) {
  if (typeof str === 'string') {
    return str.split('').reverse().join('');
  } else {
    return 'This is not a string!';
  }
}

export { reverseString };
