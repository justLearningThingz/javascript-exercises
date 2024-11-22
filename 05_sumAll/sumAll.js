const sumAll = function(num1, num2) {

if(num1 < 0 || num2 < 0) return "ERROR";
if(!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

sum = 0;
let lowerBound = num1<num2 ? num1 : num2;
let upperBound = num1<num2 ? num2 : num1;

for(let i = lowerBound; i <= upperBound; i++){
    sum += i;
} 
return sum;
};

// Do not edit below this line
module.exports = sumAll;
