function addition(a, b) {
    return +a + +b;
}

function multiplication(a, b) {
    return +a * +b;
}

function substraction(a , b) {
    return +a - +b;
}

function division(a, b) {
    return +a / +b;
}

let firstOperand = ""
let secondOperand = ""
let operator = ""

function operate(firstNum = firstOperand, secondNum = secondOperand, sign = operator) {
    if (sign == "+") {
        return addition(firstNum, secondNum)
    } else if (sign == "-") {
        return substraction(firstNum, secondNum)
    } else if (sign == "x") {
        return multiplication(firstNum, secondNum)
    } else if (sign == "/") {
        return division(firstNum, secondNum)
    }
}

const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');

const numbers = document.querySelectorAll('.numbers');
numbers.forEach(button => button.addEventListener('click', (e) => {
    if (operator === "") {
        firstOperand += e.target.innerText;
        display2.textContent = firstOperand;
    } else {
        secondOperand += e.target.innerText;
        display2.textContent = secondOperand;
    }
}));

const sign = document.querySelectorAll('.sign');
sign.forEach(button => button.addEventListener('click', (e) => {
    summingUp(e)
    operator = e.target.innerText
    display2.textContent = " "
    display1.textContent = firstOperand + " " + operator  
}));

const equalTo = document.querySelector('.equalTo');
equalTo.addEventListener("click", (e) => {
    if (secondOperand == "") {
        display1.textContent = firstOperand + " = "
    } else {
        display1.textContent = firstOperand + " " + operator + " " + secondOperand + " = "
    }
    summingUp(e);
    if (firstOperand == 69) {
        display2.textContent = "😏"
    } else {
        display2.textContent = firstOperand
    }
    operator = "";
})

const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', (e) => {
    firstOperand = secondOperand = operator = display1.textContent = display2.textContent = "";
})

function summingUp(e) {
    if (!(secondOperand === "")) {
        firstOperand = operate();
        secondOperand = "";
    } 
}