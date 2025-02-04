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
const input = document.querySelector("input");
let current = 0;

numberButtons.forEach((button) => button.addEventListener("click", () => {
  const number = button.id
  input.value = number
  current = number
}));



