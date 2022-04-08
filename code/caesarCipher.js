import alphabet from 'alphabet';

function caesarCipher(str) {
  const splitted = str.split('');
  const shifted = shiftString(splitted);
  return shifted.join('');
}

function shiftString(arrayOfCharacters) {
  const shiftedCharacters = arrayOfCharacters.map((char) => {
    if (char === 'z' || char === 'Z') {
      if (checkLowerCase(char)) {
        return 'a';
      } else {
        return 'A';
      }
    } else if (!checkLetter(char)) {
      return char;
    } else {
      if (checkLowerCase(char)) {
        const indexOfChar = alphabet.lower.indexOf(char);
        return alphabet.lower[indexOfChar + 1];
      } else {
        const indexOfChar = alphabet.upper.indexOf(char);
        return alphabet.upper[indexOfChar + 1];
      }
    }
  });
  return shiftedCharacters;
}

function checkLowerCase(char) {
  if (char === char.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

function checkLetter(char) {
  return alphabet.lower.includes(char.toLowerCase());
}

export { caesarCipher };
