const fibonacci = function(num) {
    if(num<0) return "OOPS";
    if(num == 0) return 0;
    value = 1;
    temp = 0;
    prevValue = 0;
    for(let i = 1; i<num; i++){
        temp = value;
        value += prevValue;
        prevValue = temp;
    }
    return value;
};


fibonacci(6);
// Do not edit below this line
module.exports = fibonacci;
