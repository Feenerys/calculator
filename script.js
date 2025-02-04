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

const input = document.querySelector("input");
let selectedValue = "";
let firstValue = "";
let secondValue = "";
let operation = "";
let overwriteIndicator = false;
let equalIndicator = false;

numberButtons.forEach((button) => button.addEventListener("click", () => {
  const number = button.id;
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
  calculate();
  equalIndicator = true;
});

clearButton.addEventListener("click", () => {
  input.value = "";
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
    overwriteIndicator = true;
  }
}

// TODO: pressing digits adds to the string,

