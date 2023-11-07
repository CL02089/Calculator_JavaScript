'use strict';

const display = document.querySelector('input');
const buttons = document.querySelectorAll('button');
const numberButtons = document.querySelector('.number');
const operationButtons = document.querySelector('.operation');
const calculator = document.querySelector('.calc');

let firstNumber;
let secondNumber;
let operator;

console.log(buttons);
buttons.forEach((el) => el.addEventListener('click', function () {
  firstNumber = 
}));

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  if (b === 0) return `You can't divide by 0!`;
  else return a / b;
};

const operate = function (a, op, b) {
  if (op === '+') {
    add(a, b);
  }
  if (op === '-') {
    subtract(a, b);
  }
  if (op === '*') {
    multiply(a, b);
  }
  if (op === '/') {
    divide(a, b);
  }
};

// buttons.addEventListener('click', (e) => {
//   if (e.target.matches('button')) {
//   }
// });

// Calculator logic
// Pressing number gives input to the calculator
// Until pressing an operator button or C, CE pushing the pressed number to the end of the number
// When push C or CE clear the entered number
// Recognize the pressed operator button, and waited for the next number
// Until press the next operator, or equal sign or C, CE push the pressed number to the end of the number
// When push CE clear the last number
// When push C clear the whole operation
// When press equal submit operation and

// Display
// When pressing number show it on display
// Until pressing an operator button or C, CE pushing the pressed number to the end of the number
// When operation button pressed clear the display
// When press equal sign show the result
