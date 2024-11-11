// Append number to the display
function appendNumber(number) {
    document.getElementById('display').value += number;
}

// Append operator to the display
function appendOperator(operator) {
    const display = document.getElementById('display').value;
    if (display !== '' && !isNaN(display[display.length - 1])) {
        document.getElementById('display').value += operator;
    }
}

// Calculate the result
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Delete the last character
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}