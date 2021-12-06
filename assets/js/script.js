$().ready(function () {
  function getTimeNow() {
    var todayTime = moment().format("MMMM Do, h:mm a");
    $("#currentDay").text(todayTime);
  }
  getTimeNow(); // when DOM ready, get moment js, show on page

  // Check Time State (Past, Present, Future) then set color for Time State
  checkHourState();
  function checkHourState() {
    var currentHour = moment().format("H"); //uses 24 hr format 
    $(".description").each(function () {
      var plannerHour = parseInt($(this).attr("id")); // Use planner id as number to compare to moment js time
      if (plannerHour < currentHour) {
        $(this).addClass("past"); 
      } else if (plannerHour == currentHour) {
        $(this).addClass("present");
      } else if (plannerHour > currentHour) {
        $(this).addClass("future");
      }
    });
  }

  // Save planner input to local storage
  function saveEntry() {
    var savedPlan = $(this);
    var planTime = savedPlan.siblings(".description").attr("id"); // Grabs id of row (=time) relevant to actual input
    var planText = savedPlan.siblings(".description").val();
    localStorage.setItem(planTime, planText); // Store entry to be refrenced by time id
  }
  // Save user entry on button click
  $(".savePlanButton").on("click", saveEntry);

  // check and grab whatever is in local storage for that hour
  checkSchedule();

  function checkSchedule() {
    $("#9").val(localStorage.getItem("9"));
    $("#10").val(localStorage.getItem("10"));
    $("#11").val(localStorage.getItem("11"));
    $("#12").val(localStorage.getItem("12"));
    $("#13").val(localStorage.getItem("13"));
    $("#14").val(localStorage.getItem("14"));
    $("#15").val(localStorage.getItem("15"));
    $("#16").val(localStorage.getItem("16"));
    $("#17").val(localStorage.getItem("17"));
  }
});

// local storage checking on page load to show plans
window.onload = checkSchedule();

