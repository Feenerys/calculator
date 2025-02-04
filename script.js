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
    if (b === 0) {return "no"};
    return +a/+b
  };   

const numberButtons = document.querySelectorAll(".numbers");
const operatorButtons = document.querySelectorAll(".operators");
const equalButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");

const input = document.querySelector("input");
let selectedValue = "";
let firstValue = "";
let secondValue = "";
let operation = "";

numberButtons.forEach((button) => button.addEventListener("click", () => {
  const number = button.id;
  input.value = number;
  selectedValue = number;
}));

operatorButtons.forEach((button) => button.addEventListener("click", () => {
  if (firstValue === "") {
    firstValue = selectedValue;
    selectedValue = "";
  };

  if (operation === "") {
    selectedValue = "";
    operation = button.id;
  } else if (firstValue !== "" && selectedValue !== "") {
    calculate();
    operation = button.id;
  } else {
    operation = button.id
  }
}));

equalButton.addEventListener("click", calculate)

clearButton.addEventListener("click", () => {
  input.value = 0;
  selectedValue = "";
  firstValue = "";
  secondValue = "";
  operation = "";
});

function calculate() {
  secondValue = selectedValue;
  
  if (operation !== "") {
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
    [input.value, firstValue] = [result, result];
    secondValue = "";
    operation = "";
    selectedValue = "";
  }
}

// TODO: pressing digits adds to the string,

