"use strict";

function appendToDisplay(value) {
    document.getElementById('pantalla').value += value;
}

function clearDisplay() {
    document.getElementById('pantalla').value = '';
}

function calculateResult() {
    try {
        const expression = document.getElementById('pantalla').value;
        const result = eval(expression);
        document.getElementById('pantalla').value = result;
    } catch (error) {
        document.getElementById('pantalla').value = 'Error';
    }
}


