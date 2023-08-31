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

let firstOperand = ''
let secondOperand = ''
let operator = ''

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

// this part creates the div and the link
const div = document.createElement('div')
div.setAttribute('id', 'link-container')
const a = document.createElement('a')
a.setAttribute('id', 'link')
a.textContent = 'Click me'
a.setAttribute('href', 'https://www.youtube.com/watch?v=dQw4w9WgXcQ')
a.setAttribute('target', '_blank')           // there must be better way to set multiple attributes
a.setAttribute('rel', 'noopener noreferrer')
div.appendChild(a);


const display1 = document.querySelector('.display1');
const display2 = document.querySelector('.display2');

const numbers = document.querySelectorAll('.numbers');
numbers.forEach(button => button.addEventListener('click', (e) => {
    if (operator === "") {
        firstOperand += e.target.innerText
        firstOperand = +firstOperand
        display2.textContent = firstOperand;
    } else {
        secondOperand += e.target.innerText
        secondOperand = +secondOperand
        display2.textContent = secondOperand;
    }
}));

const sign = document.querySelectorAll('.sign');
sign.forEach(button => button.addEventListener('click', (e) => {
    if (!(firstOperand == '')) {
        summingUp(e)
        operator = e.target.innerText
        display2.textContent = ''
        display1.textContent = firstOperand + " " + operator  
    }
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
    } else if (firstOperand === Infinity) {
        firstOperand = secondOperand = operator = display1.textContent = display2.textContent = ''
        display2.appendChild(div)
    } else {
        display2.textContent = firstOperand
    }
    operator = '';
})

const clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', (e) => {
    firstOperand = secondOperand = operator = display1.textContent = display2.textContent = '';
})

function summingUp(e) {
    if (!(secondOperand === "")) {
        firstOperand = operate();
        secondOperand = '';
    } 
}

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', (e) => {
    if ((!(firstOperand == "")) && (!(operator == "")) && (!(secondOperand == ""))) {
        let arrayOfDigits = secondOperand.toString().split('')
        arrayOfDigits.pop()
        secondOperand = arrayOfDigits.join('')
        display2.textContent = secondOperand
    } else if ((!(firstOperand == "")) && (!(operator == "")) && (secondOperand == "")) {
        operator = ''
        display1.textContent = ''
        display2.textContent = firstOperand
    } else if ((!(firstOperand == "")) && (operator == "") && (secondOperand == "")) {
        let arrayOfDigits = firstOperand.toString().split('')
        arrayOfDigits.pop()
        firstOperand = arrayOfDigits.join('')
        display1.textContent = ''
        display2.textContent = firstOperand
    }
})

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', (e) => {
    if (operator === '') {
        let arrayOfDigits = firstOperand.toString().split('')
        let checkForDecimal = arrayOfDigits.find( item => item == '.')
        if (checkForDecimal != '.') {
            firstOperand += e.target.innerText
            display2.textContent = firstOperand
        }
    } else {
        let arrayOfDigits = secondOperand.toString().split('')
        let checkForDecimal = arrayOfDigits.find( item => item == '.')
        if (checkForDecimal != '.') {
            secondOperand += e.target.innerText
            display2.textContent = secondOperand
        }
    }
})