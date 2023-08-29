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
    } else if (sign == "*") {
        return multiplication(firstNum, secondNum)
    } else if (sign == "/") {
        return division(firstNum, secondNum)
    }
}

const display = document.querySelector('.display');

const numbers = document.querySelectorAll('.numbers');
numbers.forEach(button => button.addEventListener('click', (e) => {
    if (operator === "") {
        firstOperand += e.target.innerText;
        display.textContent = firstOperand;
    } else {
        secondOperand += e.target.innerText;
        display.textContent = secondOperand;
    }
}));

const sign = document.querySelectorAll('.sign');
sign.forEach(button => button.addEventListener('click', (e) => {
    summingUp(e)
    operator = e.target.innerText
    display.textContent = firstOperand + operator  
}));

const equalTo = document.querySelector('.equalTo');
equalTo.addEventListener("click", (e) => {
    summingUp(e);
    display.textContent = firstOperand
    firstOperand = "";
    secondOperand = "";
    operator = "";
})

const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', (e) => {
    firstOperand = "";
    secondOperand = "";
    operator = "";
    display.textContent = "0"
})

function summingUp(e) {
    if (!(secondOperand === "")) {
        firstOperand = operate();
        secondOperand = "";  
    } 
}