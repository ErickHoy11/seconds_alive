//calculated values
//UPDATE LIFE EXPECTANCIES AS NEEDED
const humanLifeExpectancy = 73.4; 
const maleLifeExpectancy = 70.8;
const femaleLifeExpectancy = 76.0;
const americanMaleLifeExpectancy = 76.61;
const americanFemaleLifeExpectancy = 82.23;
const humanLifeExpectancySeconds = humanLifeExpectancy * 365.25 * 24 * 60 * 60;
const maleLifeExpectancySeconds = maleLifeExpectancy * 365.25 * 24 * 60 * 60;
const femaleLifeExpectancySeconds = femaleLifeExpectancy * 365.25 * 24 * 60 * 60;
const americanMaleLifeExpectancySeconds = americanMaleLifeExpectancy * 365.25 * 24 * 60 * 60;
const americanFemaleLifeExpectancySeconds = americanFemaleLifeExpectancy * 365.25 * 24 * 60 * 60;

//HTML elements
const checkResultsButton = document.getElementById("check_results");
const userBirthDate = document.getElementById("user_birth_date");
const userBirthTime = document.getElementById("user_birth_time");

//HTML elements that display values
const userSecondsAliveDisplay = document.getElementById("user_seconds");

const humanLifeExpectancyDisplay = document.getElementById("human_life_expectancy");
const maleLifeExpectancyDisplay = document.getElementById("male_life_expectancy");
const femaleLifeExpectancyDisplay = document.getElementById("female_life_expectancy");
const americanMaleLifeExpectancyDisplay = document.getElementById("american_male_life_expectancy");
const americanFemaleLifeExpectancyDisplay = document.getElementById("american_female_life_expectancy");

const humanLifeExpectancySecondsDisplay = document.getElementById("human_life_expectancy_seconds");
const maleLifeExpectancySecondsDisplay = document.getElementById("male_life_expectancy_seconds");
const femaleLifeExpectancySecondsDisplay = document.getElementById("female_life_expectancy_seconds");
const americanMaleLifeExpectancySecondsDisplay = document.getElementById("american_male_life_expectancy_seconds");
const americanFemaleLifeExpectancySecondsDisplay = document.getElementById("american_female_life_expectancy_seconds");

const humanSecondsRemainingDisplay = document.getElementById("human_seconds_remaining");
const maleSecondsRemainingDisplay = document.getElementById("male_seconds_remaining");
const femaleSecondsRemainingDisplay = document.getElementById("female_seconds_remaining");
const americanMaleSecondsRemainingDisplay = document.getElementById("american_male_seconds_remaining");
const americanFemaleSecondsRemainingDisplay = document.getElementById("american_female_seconds_remaining");

//setting HTML elements to display calculated vales
humanLifeExpectancyDisplay.innerHTML = humanLifeExpectancy;
maleLifeExpectancyDisplay.innerHTML = maleLifeExpectancy;
femaleLifeExpectancyDisplay.innerHTML = femaleLifeExpectancy;
americanMaleLifeExpectancyDisplay.innerHTML = americanMaleLifeExpectancy;
americanFemaleLifeExpectancyDisplay.innerHTML = americanFemaleLifeExpectancy;

humanLifeExpectancySecondsDisplay.innerHTML = humanLifeExpectancySeconds;
maleLifeExpectancySecondsDisplay.innerHTML = maleLifeExpectancySeconds;
femaleLifeExpectancySecondsDisplay.innerHTML = femaleLifeExpectancySeconds;
americanMaleLifeExpectancySecondsDisplay.innerHTML = americanMaleLifeExpectancySeconds;
americanFemaleLifeExpectancySecondsDisplay.innerHTML = americanFemaleLifeExpectancySeconds;

humanSecondsRemainingDisplay.innerHTML = humanLifeExpectancySeconds;
maleSecondsRemainingDisplay.innerHTML = maleLifeExpectancySeconds;
femaleSecondsRemainingDisplay.innerHTML = femaleLifeExpectancySeconds;
americanMaleSecondsRemainingDisplay.innerHTML = americanMaleLifeExpectancySeconds;
americanFemaleSecondsRemainingDisplay.innerHTML = americanFemaleLifeExpectancySeconds;


//global variables
let IntervalId;
let userSecondsAlive; 

//when check results button is pressed...
checkResultsButton.onclick = function() {
    //if an interval is set, clear it
    clearInterval(IntervalId);

    //get the user's birthdate and birth time
    const userBirthday = new Date(userBirthDate.value + "T" + userBirthTime.value);
    //get the current time
    const currentDate = new Date();

    //calculate how many seconds the user has been alive
    userSecondsAlive = Math.floor((currentDate.getTime() - userBirthday.getTime()) / 1000);

    //error handling
    //if user did not enter a date/time...
    if (isNaN(userSecondsAlive)){
        userSecondsAliveDisplay.innerHTML = "Please enter a birthday and time";
    }
    //if they did...
    else{
        //update all of the display times 
        updateTime();
        //update all of the display times every 1 second
        IntervalId = setInterval(() => updateTime(), 1000);
    }
}

//update all of the display times
function updateTime(){

    userSecondsAliveDisplay.innerHTML = userSecondsAlive;

    let humanSecondsRemaining = humanLifeExpectancySeconds - userSecondsAlive;
    document.getElementById("human_seconds_remaining").innerHTML = humanSecondsRemaining;

    let maleSecondsRemaining = maleLifeExpectancySeconds - userSecondsAlive;
    document.getElementById("male_seconds_remaining").innerHTML = maleSecondsRemaining;

    let femaleSecondsRemaining = femaleLifeExpectancySeconds - userSecondsAlive;
    document.getElementById("female_seconds_remaining").innerHTML = femaleSecondsRemaining;

    let americanMaleSecondsRemaining = americanMaleLifeExpectancySeconds - userSecondsAlive;
    document.getElementById("american_male_seconds_remaining").innerHTML = americanMaleSecondsRemaining;
    
    let americanFemaleSecondsRemaining = americanFemaleLifeExpectancySeconds - userSecondsAlive;
    document.getElementById("american_female_seconds_remaining").innerHTML = americanFemaleSecondsRemaining;

    //increment how many seconds the user has been alive 
    userSecondsAlive++;
}