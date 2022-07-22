const add = function(a, b) {
 return a + b;
};

const subtract = function(a, b) {
 return a - b;
};

const sum = function(numbers) {
 return numbers.reduce((a,b) => a + b, 0);
}
const multiply = function(a, b) {
  return a * b;

};

const power = function(base, power) {
  return Math.pow(base, power);
	
};

const factorial = function(n) {
  if (n === 0) 
    return 1;
    return n * factorial(n-1);
  }
	

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
