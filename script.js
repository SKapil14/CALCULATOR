let inputElement = document.getElementById('input');

function appendToDisplay(value) {
    inputElement.value += value;
}

function clearDisplay() {
    inputElement.value = '';
}

function calculateResult() {
    try {
        inputElement.value = eval(inputElement.value);
    } catch (error) {
        inputElement.value = 'Error';
    }
}
