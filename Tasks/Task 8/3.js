
const result = document.getElementById('result');

function appendNumber(number) {
  result.value += number;
}

function appendOperator(operator) {
  if (result.value !== '' && !isOperator(result.value.slice(-1))) {
    result.value += operator;
  }
}

function isOperator(char) {
  return ['+', '-', '*', '/'].includes(char);
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch {
    result.value = 'Error';
  }
}

function clearResult() {
  result.value = '';
}
