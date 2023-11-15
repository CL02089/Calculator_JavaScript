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
      const operator = calculator.dataset.operation;
      operationDisplay.textContent += result.textContent + button.textContent;

      calculator.dataset.previousButton = 'operator';

      firstNumber = calculator.dataset.firstNumber;
      calculator.dataset.operation = operation;
      secondNumber = result.textContent;

      if (
        firstNumber &&
        operator &&
        previousButton !== 'operator' &&
        previousButton !== 'equal'
      ) {
        const calcValue = operate(firstNumber, operator, secondNumber);
        result.textContent = calcValue;
        calculator.dataset.firstNumber = calcValue;
        operationDisplay.textContent = result.textContent + button.textContent;
      } else {
        calculator.dataset.firstNumber = result.textContent;
      }
    }

    if (operation === 'decimal') {
      if (!result.textContent.includes('.')) {
        result.textContent += '.';
      }
      if (previousButton === 'operator' || previousButton === 'equal') {
        result.textContent = '0.';
      }

      calculator.dataset.previousButton = 'decimal';
    }

    if (operation === 'clear-entry') {
      result.textContent = '';
      calculator.dataset.previousButton = 'clear-entry';
    }

    if (operation === 'clear-all') {
      calculator.dataset.firstNumber = '';
      calculator.dataset.operation = '';
      calculator.dataset.secondNumber = '';
      calculator.dataset.modValue = '';
      calculator.dataset.previousButton = '';
      result.textContent = 0;
      operationDisplay.textContent = '';
      calculator.dataset.previousButton = 'clear-all';
    }

    if (operation === 'percentage') {
      result.textContent = parseFloat(result.textContent) / 100;
      calculator.dataset.previousButton = 'percentage';
    }

    if (operation === 'equal') {
      firstNumber = calculator.dataset.firstNumber;
      operator = calculator.dataset.operation;
      secondNumber = result.textContent;

      if (firstNumber) {
        if (previousButton === 'equal') {
          firstNumber = result.textContent;
          secondNumber = calculator.dataset.modValue;
        }
        operationDisplay.textContent += result.textContent + buttonContent;
        result.textContent = operate(firstNumber, operator, secondNumber);
      }
      calculator.dataset.modValue = secondNumber;
      calculator.dataset.previousButton = 'equal';
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
  if (b == 0) return `You can't divide by 0!`;
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
