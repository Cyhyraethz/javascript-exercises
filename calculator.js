function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(...theArgs) {
  return theArgs.reduce((a, b) => a + b);
}

function multiply(a, b) {
  return a * b;
}

function power(a, b) {
  return Math.pow(a, b);
}

function factorial(a) {
  let total = a;
  a -= 1;
  while (a > 0) {
    total *= a;
    a -= 1;
  }
  return total;
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
