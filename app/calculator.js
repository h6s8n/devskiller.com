// calculator.js
function calculate(expression) {
  // Clean the input expression
  expression = expression.trim();

  // Split the input into tokens
  const tokens = expression.split(' ').filter(token => token.length > 0);

  if (tokens.length === 0) {
    return NaN;
  }

  function evaluate(tokens) {
    if (tokens.length === 0) {
      return NaN;
    }

    const token = tokens.shift();

    if (isOperator(token)) {
      const a = evaluate(tokens);
      const b = evaluate(tokens);
      if (isNaN(a) || isNaN(b)) {
        return NaN;
      }
      return applyOperator(token, a, b);
    } else {
      const num = parseFloat(token);
      if (isNaN(num)) {
        return NaN; // Invalid number
      }
      return num;
    }
  }

  const finalResult = evaluate(tokens);
  return finalResult;
}

function isOperator(token) {
  return ['+', '-', '*', '/'].includes(token);
}

function applyOperator(operator, a, b) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return a / b;
    default: return NaN;
  }
}

module.exports = { calculate };
