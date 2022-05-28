const add = function() {
	
};

const subtract = function() {
	
};

const sum = function(array) {
  if (array.length <= 0) return 0;
  return array.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  )
};

const multiply = function(array) {
  if (array.length <= 0) return 0;
  return array.reduce(
    (previousValue, currentValue) => previousValue * currentValue
  )
};

const power = function(number,power) {
	return Math.pow(number,power)
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
