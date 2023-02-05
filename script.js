"use strict";

init();

let firstNumber;
let secondNumber;
let operator;

function init() {
  console.log("initialize!!");
  document.querySelector("#calculate").addEventListener("click", clickCalculate);
}

function clickCalculate() {
  console.log("button clicked!");
  readFirstNumber();
  readSecondNumber();
  readOperator();
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
  console.log("reading operator!!");
}

function Calculating() {
  console.log("button clicked");
}
