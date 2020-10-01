// Get the present Month, day and year
var day = moment().format('dddd');
var dayOf = moment().format('Do');
var month = moment().format('MMMM');
var year = moment().format('YYYY');
// Set the present hour
var presentHour = moment().hour();
console.log('Hour ID is ', presentHour);

// Set up what is a  workday
var workDay = {
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

// Set the Date at the top
$('#currentDay').text(day + ', ' + month + ' ' + dayOf);

var objectKeys = Object.keys(workDay);
console.log('workday object is ', objectKeys);

for (property in workDay) {
    // console.log(`key = ${property} value = ${workDay[property]}`)
    timeNumber = workDay[property];
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