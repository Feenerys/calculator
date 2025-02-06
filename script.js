const add = function(a,b) {
	return +a + +b
};

const subtract = function(a,b) {
	return +a - +b
};

const multiply = function(a,b) {
    return +a * +b
  };

const divide = function(a,b) {
    if (b == 0) {return "80085"};
    return +a/+b
  };   

const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operators");
const equalButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const backspaceButton = document.querySelector("#backspace");

const input = document.querySelector("input");
let selectedValue = "";
let firstValue = "";
let secondValue = "";
let operation = "";
let overwriteIndicator = false;
let equalIndicator = false;

numberButtons.forEach((button) => button.addEventListener("click", () => {
  let number = "";
  if (button.id === "decimal"){
    if (input.value.includes(".")){
      return
    } else if (input.value === ""){
      number = "0.";
    } else {
      number = '.';
    }
  } else{
    number = button.id;
  }

  if (equalIndicator) {
    firstValue = "";
    equalIndicator = false;
  }

  if (overwriteIndicator){
    input.value = number;
    selectedValue = number;
    overwriteIndicator = false;
  } else {
    input.value += number;
    selectedValue += number;
  }
}));

operatorButtons.forEach((button) => button.addEventListener("click", () => {
  if (equalIndicator) {
    equalIndicator = false;
  }
  
  if (firstValue === "") {
    firstValue = selectedValue;
    selectedValue = "";
    overwriteIndicator = true;
  };

  if (operation === "") {
    overwriteIndicator = true;
    operation = button.id;
  } else if (firstValue !== "" && selectedValue !== "") {
    calculate();
    operation = button.id;
  } else {
    operation = button.id
  }
}));

equalButton.addEventListener("click", () => {
  calculate(true);
});

clearButton.addEventListener("click", () => {
  input.value = "";
  selectedValue = "";
  firstValue = "";
  secondValue = "";
  operation = "";
  overwriteIndicator = false;
  equalIndicator = false;
});

backspaceButton.addEventListener("click", () => {
  input.value = input.value.slice(0,-1);
  selectedValue = input.value;
});

function calculate(equalUsed = false) {
  if (operation !== "") {
    secondValue = selectedValue;
    let result = 0;
    
    switch (operation) {
      case "add":
        result = add(firstValue,secondValue);
        break;
      case "subtract":
        result = subtract(firstValue,secondValue);
        break;
      case "multiply":
        result = multiply(firstValue,secondValue);
        break;
      case "divide":
        result = divide(firstValue,secondValue);
        break;
    }
    result = Math.floor(result*(10**7))/(10**7);
    [input.value, firstValue] = [result, result];
    secondValue = "";
    operation = "";
    selectedValue = "";
    overwriteIndicator = true;
    if (equalUsed) {equalIndicator = true};
  }
}


