"use strict";

const display = document.querySelector("input");
const numberButtons = document.querySelector(".number");
const operationButtons = document.querySelector(".operation");
const calculator = document.querySelector(".calc");

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
