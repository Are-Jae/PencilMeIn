// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function() {
  $(".saveBtn").on("click", function(){
    console.log("I'm working!");
    var blockTime = $(this).siblings(".description").val()
    console.log("time warp", blockTime)
    

  })

  
  
  //NOTE can also use .click
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
// first get current hour by using dayjs().hour() set that to variable
// loop over your hour blocks, set a comparison variable block hour = block id
// if current hour === block hour then add class to that block that makes it green
// if current hour > block hour then add class that makes it grey
// if current hour < block hour then add class that makes it red

function Hour() {

  //var currentHour = dayjs().hour()
  
var timeblocks = document.getElementsByClassName('time-block')
for(let i =0; i < timeblocks.length ; i++){
  timeblocks[i].getAttribute('id')
  console.log(timeblocks[i].getAttribute('id'))
}

}


  function userInputStorage() {
    var input = localStorage.setItem('9', '10', '11');
    if (input) {
      input = JSON.parse('input');

    } else {
      console.log("No user input");
    } return input; 
  }
userInputStorage();
Hour();