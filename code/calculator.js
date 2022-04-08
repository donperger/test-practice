const calculator = {
  add: function (num1, num2) {
    return num1 + num2;
  },

  substract: function (num1, num2) {
    return num1 - num2;
  },

  divide: function (num1, num2) {
    if (num2 == 0) {
      return `0 can't be a divider!`;
    } else {
      return num1 / num2;
    }
  },

  multiply: function (num1, num2) {
    if (num1 === 0 || num2 === 0) {
      return 0;
    } else {
      return num1 * num2;
    }
  },
};

export { calculator };
