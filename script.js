const months = document.getElementById('months')
const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

let endDate = new Date(2022, 10, 2);

setInterval(function(){

    var currentDate = new Date();

    var difference = endDate - currentDate;

    months.innerText = parseInt(getMonths(difference))

    var afterM = (getMonths(difference) - parseInt(getMonths(difference))) * 30

    days.innerText = parseInt(afterM);

    var afterd = (afterM - parseInt(afterM)) * 24

    hours.innerText = parseInt(afterd);

    var afterMin = (afterd - parseInt(afterd)) * 60

    minutes.innerText = parseInt(afterMin)

    var afterSec = (afterMin - parseInt(afterMin)) * 60;

    seconds.innerText = parseInt(afterSec);

}, 1000)

function getMonths(diff){
    return diff / (1000 * 60 * 60 * 24 * 30);
}
