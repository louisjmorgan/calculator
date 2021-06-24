function add(a, b) {
    return a + b;
}

function subtract(a ,b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function clearDisplay() {
    display.textContent = ''
    return
}

function updateDisplay(str) {
    display.textContent += str;
    return
}

function numberHandler(e) {
    if (toDisplay === 0) clearDisplay();
    userInput += e.target.id;
    updateDisplay(userInput); 
    return
}


function opHandler (e) {
    storedValue = userInput;
    userInput = ''
    console.log(e.target.id)

    switch (e.target.id) {
        case 'divide':
            toDisplay = '÷ ';
            storedOperator = 'divide';
        case 'multiply':
            toDisplay = '× ';
            storedOperator = 'multiply';
        case 'subtract':
            toDisplay = '- ';
            storedOperator = 'subtract';
        case 'add':
            toDisplay = '+ ';
            storedOperator = 'add';
        case 'operate':
            if (!storedValue) result = userInput;
            result = operate(parseInt(storedValue), parseInt(userInput), window[storedOperator]);
            updateDisplay(result)
            return
    }
    clearDisplay()
    updateDisplay(toDisplay)
    return
}



const display = document.querySelector('#display')
let toDisplay = 0;
updateDisplay(toDisplay)
let userInput = ''

const numButtons = document.querySelectorAll('.numButton');
numButtons.forEach(numButton => numButton.addEventListener('click', numberHandler))

const opButtons = document.querySelectorAll('.opButton');
opButtons.forEach(opButton => opButton.addEventListener('click', opHandler))