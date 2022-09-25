// grabbing elements from dom
const monthsElem = document.getElementById('months')
const daysElem = document.getElementById('days')
const hoursElem = document.getElementById('hours')
const minutesElem = document.getElementById('minutes')
const secondsElem = document.getElementById('seconds')
const clickMe = document.getElementById('clickMe')
//declaring string variable to use for date object creation
const birthday = '2 Nov 2022';
// declaring end date object
const birthdayDate = new Date(birthday);
//declaring currentDate once to check on reload
var currentDate = new Date();

//calling the countdown function each second
let interval = setInterval(countdown, 1000);

//end Algroithm
if((birthdayDate - currentDate) < 0){
    clickMe.setAttribute('style', "opacity: 1; pointer-events: all");
    clearInterval(interval)
}

//countdown logic
function countdown(){
    const currentDate = new Date();
    var difference = birthdayDate - currentDate
    //time conversion
    const differenceInSeconds = (difference / 1000);
    const months = Math.floor(differenceInSeconds / 2.628e+6)
    const days = Math.floor(differenceInSeconds / 86400) - (months * 30)
    const hours = Math.floor(differenceInSeconds / 3600) - ((days * 24) + (months * 30 * 24));
    const minutes = Math.floor((differenceInSeconds / 60) - (months * 30 * 24 * 60) - (days * 24 * 60) - (hours * 60));
    const seconds = Math.floor(differenceInSeconds) - (months * 30 * 24 * 60 * 60) - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);
    //assigning values to html
    monthsElem.innerText = months;
    daysElem.innerText = days;
    hoursElem.innerText = hours;
    minutesElem.innerText = minutes;
    secondsElem.innerText = seconds
} 


