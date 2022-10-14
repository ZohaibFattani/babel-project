"use strict";

var multiply = function multiply(a, b) {
  return a * b;
};
var num1 = Math.floor(Math.random() * 100);
var num2 = Math.floor(Math.random() * 100);
var firstNum = num1;
var secondNum = num2;
var product = multiply(firstNum, secondNum);
console.log("The product of ".concat(firstNum, " and ").concat(secondNum, " is ").concat(product));
var divide = function divide(x, y) {
  return x / y;
};
var average = divide(firstNum, secondNum);
console.log("The average of ".concat(firstNum, " and ").concat(secondNum, " is ").concat(average));