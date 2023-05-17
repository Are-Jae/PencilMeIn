$(document).ready(function () {
  // grabbing id for currentDay and setting its inner html to whatever dayjs gives us as a date
  $("#currentDay").text(dayjs().format('MMMM DD YYYY'))

  // grabbing all occurences of a class of time-block
  var timeblocks = $('.time-block')
  // setting varibale currentHour to whatever dayjs tells us the current hour is
  var currentHour = dayjs().hour()
  // doing a for loop through all .time-block (classes of time-block)
  timeblocks.each(function () {
    // for each iteration(i in a for loop) we want to grab the hour of that time-block in html from its id
    var hourId = $(this).attr("id")
    // check if the htmls id is less then the current hour, then we know its the past
    if (hourId < currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description past")
      // check if the htmls id is greater then the current hour, then we know its the future
    } else if (hourId > currentHour) {
      $(this).children(".description").attr("class", "col-8 col-md-10 description future")
    } else {
      // check if the htmls id is equal to the current hour, then we know its the present
      $(this).children(".description").attr("class", "col-8 col-md-10 description present")
    }
  })

  // grab class of saveBtn and listen for a click
  // once clicked run a function
  $(".saveBtn").on("click", function (event) {
    // because event listener is on button, we use event.preventDefault()
    event.preventDefault()
    // set "value" variable to whatever is typed into the textare 
    var value = $(this).siblings(".description").val().replace(key)
    // set "key" varibale to whatever time block id the user types into
    var key = $(this).parent().attr("id")

    // save the key(id - time block value) to the corresponding text typed into its textarea
    localStorage.setItem(key, JSON.stringify(value))
  })
  
  // loop through 9-17 and for each value, pull its local storage
  // replace the textare it corresponds to with whatever was saved to that hour 
  for(let i = 9; i <= 17; i++) {
    $(`#${i} textarea`).val(JSON.parse(localStorage.getItem(`${i}`)))
  }
});
