"use strict";

init();

let firstNumber;
let secondNumber;
let operator;
let result;

function init() {
  console.log("initialize!!");
  document.querySelector("#calculate").addEventListener("click", clickCalculate);
}

function clickCalculate() {
  console.log("button clicked!");
  readFirstNumber();
  readSecondNumber();
  readOperator();
  calculating();
}

function readFirstNumber() {
  firstNumber = Number(document.querySelector("#firstnumber").value);
  console.log("first number :", firstNumber);
}

function readSecondNumber() {
  secondNumber = Number(document.querySelector("#secondnumber").value);
  console.log("second number : ", secondNumber);
}

function readOperator() {
  operator = document.querySelector("#operator").value;
  console.log(operator);
}

function calculating() {
  console.log("button clicked");

  if (operator == "add") {
    result = firstNumber + secondNumber;
  }

  if (operator == "sub") {
    result = firstNumber - secondNumber;
  }

  if (operator == "mul") {
    result = firstNumber * secondNumber;
  }

  if (operator == "div") {
    result = firstNumber / secondNumber;
  }

  console.log("it is", result);
}
