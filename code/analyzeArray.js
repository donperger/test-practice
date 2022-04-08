function analyzeArray(arr) {
  const average = _calculateAverage(arr);
  const length = _getLength(arr);
  const max = _getMax(arr);
  const min = _getMin(arr);
  return { average, length, max, min };
}

function _calculateAverage(arr) {
  const numberOfNumbers = _getLength(arr);
  const sum = arr.reduce((total, num) => {
    return total + num;
  });

  return sum / numberOfNumbers;
}

function _getLength(arr) {
  return arr.length;
}

function _getMax(arr) {
  return Math.max(...arr);
}

function _getMin(arr) {
  return Math.min(...arr);
}
export { analyzeArray };
