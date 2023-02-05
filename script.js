"use strict";

init();

let firstNumber;
let secondNumber;
let operator;
let result;
let roundOn;
let round;

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
  checkRound();
  showResult();
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

function checkRound() {
  roundOn = document.querySelector("#doround").checked;
  if (roundOn == true) {
    doRounding();
  }
}

function doRounding() {
  //read number of decimals

  round = Number(document.querySelector("#decimals").value);
  console.log(round);

  //round result to number of decimals

  result = Number(result.toFixed(round));

  console.log(result);
}

function showResult() {
  document.querySelector("#firstnumber").value = result;
  appendResult();
}

function appendResult() {
  const parent = document.querySelector("#results");
  const child = document.createElement("li");
  child.textContent = result;

  parent.appendChild(child);
}
