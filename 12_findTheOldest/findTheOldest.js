const findTheOldest = function(people) {
let highestAge = 0 ;
let oldestIndex =0;

for(let i = 0; i<people.length; i++){
    let died = people[i].yearOfDeath ?? (new Date).getFullYear(); 

    let age = died - people[i].yearOfBirth;
    if(age > highestAge){
        highestAge = age;
        oldestIndex = i;
    }
}
return people[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
