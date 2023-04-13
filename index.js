const numberArea = document.querySelector('.numbers')
const operatorArea = document.querySelector('.operators')
const resultArea = document.querySelector('.display')

let calculation = {
  a: 0,
  b: 0,
  operator: ''
}

function update(){
  resultArea.textContent = calculation.a;
}

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function calculate(a,b,operator){
  switch (operator) {
    case '+':
      return add(a,b);
    case '-':
      return subtract(a,b);
    case '*':
      return multiply(a,b);
    case '/':
      return divide(a,b);
    default:
      return 'Invalid operator';
  }
}
function operatorPress(e){
  console.log(e.target.textContent);
}
function numberPress(e){
  console.log(e.target.textContent);
}

function drawNumbers(){
  let row = document.createElement('div');
  for (let i = 1; i <= 10; i++){
    let value = i%10;
    
    
    let number = document.createElement('button');
    number.classList.add('number');
    number.textContent = value;
    number.addEventListener('mousedown', numberPress);
    numberArea.appendChild(number);

  }
}
function drawOperators(){
  let operators = ['clr','+','-','*','/','='];
  for (let i = 0; i < operators.length; i++){
    let operator = document.createElement('button');
    operator.classList.add('operator');
    operator.textContent = operators[i];
    operator.addEventListener('mousedown', operatorPress);
    operatorArea.appendChild(operator);
  }
}
drawNumbers();
drawOperators();

