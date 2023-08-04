let randomNumber = Math.floor(Math.random() * 2001);
var randomAge = Math.floor(Math.random() * 101)
var earlyStart = '9:30am';
var lateStart = '11:00am';
var youthStart = '12:30pm';

function whichNumber(raceNumber) {
    if (runner.registration === earlyStart && runner.age >= 18) {
        console.log(randomNumber >= 1000);
    } else {
        console.log(randomNumber < 1000);
    }
}

function whenStart(startTime) {
    if (runner.registration = true && runner.age >= 18) {
        startTime = earlyStart;
    } else if (runner.registration = false && runner.age >= 18) {
        startTime = lateStart;
    } else if (runner.age < 18) {
        startTime = youthStart;
    }
}

var runner = {
    age: randomAge, 
// 'registration' trait must be changed from the backend, not by user input. 
    registration: true,
    raceNumber: randomNumber,
    startTime: whenStart,
}

console.log(runner);


