'use strict';

const buttons = document.querySelectorAll('button');
const numberButtons = document.querySelector('.number');
const operationButtons = document.querySelector('.operation');
const calculator = document.querySelector('.calc');
const result = document.querySelector('#result');
const operationDisplay = document.querySelector('#op-display');

let firstNumber;
let secondNumber;
let operator;

buttons.forEach((el) => {
  el.addEventListener('click', function (e) {
    const button = e.target;
    const operation = e.target.dataset.operation;
    const buttonContent = button.textContent;
    const previousButton = calculator.dataset.previousButton;

    if (!operation) {
      if (
        result.textContent === '0' ||
        previousButton === 'operator' ||
        previousButton === 'equal'
      ) {
        result.textContent = buttonContent;
      } else {
        result.textContent += buttonContent;
      }

      calculator.dataset.previousButton = 'number';
    }

    if (
      operation === 'add' ||
      operation === 'subtract' ||
      operation === 'multiply' ||
      operation === 'divide'
    ) {
      operator = calculator.dataset.operation;
      calculator.dataset.previousButton = 'operator';
      calculator.dataset.firstNumber = result.textContent;

      firstNumber = calculator.dataset.firstNumber;

      calculator.dataset.operation = operation;
    }

    if (operation === 'decimal') {
      if (!result.textContent.includes('.')) {
        result.textContent += '.';
      }
      if (previousButton === 'operator') {
        result.textContent = '0.';
      }
    }

    if (operation === 'clear-entry') {
      result.textContent = '';
    }

    if (operation === 'clear-all') {
      console.log('clear-all');
    }

    if (operation === 'percentage') {
      result.textContent = parseFloat(result.textContent) / 100;
    }

    if (operation === 'equal') {
      firstNumber = calculator.dataset.firstNumber;
      operator = calculator.dataset.operation;
      secondNumber = result.textContent;

      result.textContent = operate(firstNumber, operator, secondNumber);
    }
  });
});

const add = function (a, b) {
  return parseFloat(a) + parseFloat(b);
};

const subtract = function (a, b) {
  return parseFloat(a) - parseFloat(b);
};

const multiply = function (a, b) {
  return parseFloat(a) * parseFloat(b);
};

const divide = function (a, b) {
  if (b === 0) return `You can't divide by 0!`;
  else return parseFloat(a) / parseFloat(b);
};

const operate = function (a, op, b) {
  if (op === 'add') {
    return add(a, b);
  }
  if (op === 'subtract') {
    return subtract(a, b);
  }
  if (op === 'multiply') {
    return multiply(a, b);
  }
  if (op === 'divide') {
    return divide(a, b);
  }
};
