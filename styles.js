// Get the present Month, day and year
var day = moment().format('dddd');
var dayOf = moment().format('Do');
var month = moment().format('MMMM');
var year = moment().format('YYYY');
// Set the present hour
var presentHour = moment().hour();
console.log('Hour ID is ', presentHour);

// Set up what is a  workday
var workHours = {
    "8 AM": "8",
    "9 AM": "9",
    "10 AM": "10",
    "11 AM": "11",
    "12 PM": "12",
    "1 PM": "13",
    "2 PM": "14",
    "3 PM": "15",
    "4 PM": "16",
    "5 PM": "17",
  };



//   Set Up WorkDay Content
const workdayTasks = {
    "8 AM": "",
    "9 AM": "",
    "10 AM": "",
    "11 AM": "",
    "12 PM": "",
    "1 PM": "",
    "2 PM": "",
    "3 PM": "",
    "4 PM": "",
    "5 PM": "",
}



// var retrievedWorktasks = localStorage.getItem('workdayTasks');

// console.log('retrieved work tasks are ', retrievedWorktasks);


$(document).ready(function(){
// Set the Date at the top
$('#currentDay').text(day + ', ' + month + ' ' + dayOf);

if(!localStorage.getItem('workdayTasks')) {
    setCalendarTasks(workdayTasks);
} else {
    setCalendarTasks(JSON.parse(localStorage.getItem('workdayTasks')));
};

// get the values of workday
var objectKeys = Object.keys(workHours);
console.log('workday object is ', objectKeys);
// loop through and add classes to the html
for (property in workHours) {
    // console.log(`key = ${property} value = ${workDay[property]}`)
    timeNumber = workHours[property];
    console.log(timeNumber);
    textBlock = "#text-block" + timeNumber;
    console.log(textBlock);
    if(timeNumber < presentHour) {
        $(textBlock).addClass("past");
      } else if (timeNumber > presentHour) {
        $(textBlock).addClass("future");
      } else {
        $(textBlock).addClass("present");
      }
}

// set up button to save text entered
$('button').click(function() {
    // get the hour text
    hourEntered = $(this).siblings('.hour').text();
    console.log("Hour entered is ", hourEntered);
    // get the text the user entered
    textEntered = $(this).siblings('textarea').val();
    console.log("text entered is ", textEntered);
    $(this).css("background-color", "gray");

    // save the hour and the text the user entered
    saveSchedule(hourEntered, textEntered);
});

//   Put object into localstorage
function initializeLocalStorage (){
    localStorage.setItem('workdayTasks', JSON.stringify(workdayTasks));
}

// send object to localStorage
function saveToLocalStorage(obj) {
    localStorage.setItem('workdayTasks', JSON.stringify(obj));
    console.log('local storage now contains ', workdayTasks);
}

// function to save the schedule
function saveSchedule (hour, text){
    if(!localStorage.getItem('workdayTasks')) {
        initializeLocalStorage();
    }

    var workText = JSON.parse(localStorage.getItem('workdayTasks'));
    workText[hour] = text;
    console.log('workText is ', workText);

    saveToLocalStorage(workText);

}

// Set the tasks on the Calendar 
function setCalendarTasks(obj) {
    console.log('this is running');
}

// End Document ready
})