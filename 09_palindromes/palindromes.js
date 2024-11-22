const palindromes = function (string) {
    let cleanedString = string.toLowerCase().replace(/[^a-z0-9]/g,'')
                            
console.log(cleanedString);

return  cleanedString.split("").reverse().join("") === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
