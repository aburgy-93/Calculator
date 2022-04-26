"use strict";

const add = function (a, b) {
  const sum = a + b;
  return sum;
};

const subtract = function (a, b) {
  const sum = a - b;
  return sum;
};

const multiply = function (a, b) {
  const sum = a * b;
  return sum;
};

const divide = function (a, b) {
  const sum = a / b;
  return sum;
};

const operate = function (operator, a, b) {
  a = Number(a);
  b = Number(b);

  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

operate("+", 1, 2);
