// display date at top of calendar
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// time blocks display for standard buisness hours 9-5
var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

for (var i = 0; i < 9; i++){
    var hoursOfDay = $("<div>");
    $(".container").append(hoursOfDay);
    hoursOfDay.attr("class", "time-block row description");
    hoursOfDay.text(hours[i]);
}

// time blocks are color coded based on past, present, or future

// when a time block is clicked, you can enter text

// when the save button is clicked, it is saved in local storage

// when page is refreshed, the save events still exist