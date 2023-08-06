//Runner information. 
let raceNumber = Math.floor(Math.random() * 1000);
let runnerAge = Math.floor(Math.random() * 101);
let earlyRegistration = true;

//Assigns a number based on registration time and runner's age.
if (runnerAge > 18 && earlyRegistration === true) {
    raceNumber += 1000
}

//Determines when the runner will start based on registration and age. 
if (earlyRegistration === true && runnerAge >= 18) {
    startTime = `your run begins at 9:30am!`;
} else if (earlyRegistration === false && runnerAge >= 18) {
    startTime = 'Your run begins at 11:00am!';
} else if (runnerAge < 18) {
    startTime = 'Your run begins at 12:30pm!';
}

//Message to runner with all of their info. 
console.log(`Age: ${runnerAge}`);
console.log(`Number: ${raceNumber}`);
console.log(`early registration: ${earlyRegistration}`);
console.log(`Start time: ${startTime}`)