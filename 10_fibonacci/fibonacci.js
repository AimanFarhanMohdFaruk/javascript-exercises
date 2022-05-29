const fibonacci = function(value) {
  if (value < 0) return "OOPS";
  if (value === 0)  return 0;

  let a = 0;
  let b = 1;
  for (let i = 1; i < value; i++){
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};

//fibonacci(3)
//a = 0 , b = 1
// temp = 1
// b = 1
// a = 1

// temp = 1
// b = 2
// a = 1

// temp = 2
// b = 3
// a = 2

// Do not edit below this line
module.exports = fibonacci;
