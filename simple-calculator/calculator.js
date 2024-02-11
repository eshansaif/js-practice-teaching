const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");

const btnPlus = document.getElementById("btnPlus");
const btnMinus = document.getElementById("btnMinus");
const btnMultiply = document.getElementById("btnMultiply");
const btnDivide = document.getElementById("btnDivide");
const btnModulus = document.getElementById("btnModulus");

function calculate(operator) {
  if (!firstNumber.value || !secondNumber.value) {
    alert("Please Enter Your Numbers");
    return;
  }
  let plusResult = 0;
  let spanOperator = "";
  let addition = "";
  if (operator === "+") {
    plusResult = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
    spanOperator = "+";
    label = "Addition: ";
  }
  if (operator === "-") {
    plusResult = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
    spanOperator = "-";
    label = "Subtraction: ";
  }
  if (operator === "*") {
    plusResult = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
    spanOperator = "*";
    label = "Multiplication: ";
  }
  if (operator === "/") {
    plusResult = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
    spanOperator = "/";
    label = "Division: ";
  }
  if (operator === "%") {
    plusResult = parseFloat(firstNumber.value) % parseFloat(secondNumber.value);
    spanOperator = "%";
    label = "Remainder: ";
  }

  const plusSpan = document.getElementById("plusSpan");
  plusSpan.innerHTML = `${label} ${firstNumber.value} ${spanOperator} ${secondNumber.value} = ${plusResult}`;
}

btnPlus.addEventListener("click", () => {
  calculate("+");
});
btnMinus.addEventListener("click", () => {
  calculate("-");
});
btnMultiply.addEventListener("click", () => {
  calculate("*");
});
btnDivide.addEventListener("click", () => {
  calculate("/");
});
btnModulus.addEventListener("click", () => {
  calculate("%");
});
