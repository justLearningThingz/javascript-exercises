const add = function(num1, num2) {
  if(num1 === 0 && num2 === 0 ) return 0;
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return(num1-num2);
};

const sum = function(array) {
	sumTotal = 0;

  for(let i=0; i<array.length; i++){
    sumTotal += array[i];
  }
  
  return(sumTotal);
};

const multiply = function(array) {
  multiplyTotal = 1;
  for(let i=0; i<array.length; i++){
    multiplyTotal *= array[i];
  }
  return multiplyTotal;
};

const power = function(num1, num2) {
	return(Math.pow(num1, num2));
};

const factorial = function(num) {
  factorialProduct = 1;
  for(let i=1; i<=num; i++){
    factorialProduct *= i;
}	
return factorialProduct;
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
