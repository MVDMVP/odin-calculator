const numberArea = document.querySelector('.numbers')
const operatorArea = document.querySelector('.operators')
const resultArea = document.querySelector('.display')

function update(){
  // show a if there is no operator, otherwise show b
  if (calc.operator === '' || calc.b === '' || calc.a == 'ERROR'){
    resultArea.textContent = calc.a;
  }
  else{
    resultArea.textContent = calc.b;
  }
}

//object to hold the calculator state
let calc = {
  a: 0,
  b: '',
  operator: '',
}


function operate(){
  if (calc.a =='ERROR'){
    return;
  }
  let result = 0;
  switch(calc.operator){
    case '+':
      result = add(calc.a, calc.b);
      break;
    case '-':
      result = subtract(calc.a, calc.b);
      break;
    case '*':
      result = multiply(calc.a, calc.b);
      break;
    case '/':
      if (calc.b === 0){
        result = 'ERROR';
      }
      else
        result = divide(calc.a, calc.b);
      break;
    default:
      result = calc.a;
      break;
  }
  console.log(`${calc.a}, ${calc.operator}, ${calc.b} = ${result}`);
  calc.a = result;
  calc.b = '';
  calc.operator = '';
  console.log(`${calc.a}, ${calc.operator}, ${calc.b} = ${result}`);

  update();

}

//all the math functions
function add(a, b) {return a + b;}
function subtract(a, b) {return a - b;}
function multiply(a, b) {return a * b;}
function divide(a, b) {return a / b;}

//function to reset the calculator to base state
function clear(){
  calc.a = 0;
  calc.b = '';
  calc.operator = '';
  update();
}



function operatorPress(e){
  let operator = e.target.textContent;
  console.log(operator);
  switch(operator){
    case 'clr':
      clear();
      break;
    case '=':
      operate();
      break;
    default:
      //if there is no operator, set it to the operator
      if (calc.operator === ''){
        calc.operator = operator;
      }
      //if there is an operator, operate and then set the operator
      else{
        operate();
        calc.operator = operator;
      }
      break;
  }
  update();
}


function numberPress(e){
  //if there is no operator; add to a
  if (calc.operator === ''){
    calc.a = calc.a*10 + parseInt(e.target.textContent);
  }
  //if there is an operator; add to b
  else{
    calc.b = calc.b*10 + parseInt(e.target.textContent);
  }
  update();
}


function drawNumbers(){
  let row = document.createElement('div');
  for (let i = 1; i <= 10; i++){
    //want to draw 1-9 then 0
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
update();
