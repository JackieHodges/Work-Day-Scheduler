// display date at top of calendar
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// time blocks display for standard buisness hours 9-5
var hours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
var hoursHolder = [];

for (var i = 0; i < 9; i++){
    // create a new row
    var newRow = $("<div>");
    newRow.attr("class", "time-block row");
    $(".container").append(newRow);

    // assign a time to each row
    var newTime = $("<div>");
    newTime.attr("class", "col-2 hour");    
    newTime.text(hours[i]);
    $(newRow).append(newTime);

    // create a text area for each row
    var newTask = $("<textarea>");
    newTask.attr("class", "col-8 description");
    newTask.attr("value", hours[i]);
    $(newRow).append(newTask);

    // create a button for each row
    var newButton = $("<button>");
    newButton.attr("class", "saveBtn");
    $(newRow).append(newButton);

    // put image inside button
    var newImage = $("<i>");
    newImage.attr("class", "fa fa-folder");
    newImage.attr("aria-hidden", true);
    (newButton).append(newImage);
        
}

// time blocks values are compared to current time 
$("textarea").each(function(){
    var thisTimeBlock = $(this).attr('value');
    console.log("this value is", thisTimeBlock);
    var currentTime = moment().format("h a");
    console.log("the current time is", currentTime);

    var timeBlockTime = moment(thisTimeBlock, "h a");

    console.log("is before?", timeBlockTime.isBefore(moment(currentTime, "h a")));
    console.log("is current?", timeBlockTime.isSame(moment(currentTime, "h a")));
    console.log("this should be a formatted moment", moment(currentTime, "h a"));

    var isSame = timeBlockTime.isSame(moment(currentTime, "h a"));
    var isAfter = timeBlockTime.isAfter(moment(currentTime, "h a"));

    colorTimeBlock(isSame, isAfter);

});

// functions to change colors of time blocks based on past, present, or future
function colorTimeBlock(isSame, isAfter){
    if (isSame === true && isAfter === false){
        console.log("this is the current event");
        // add class of pressent
        $("textarea").addClass("current");
    } else if (isSame == false && isAfter === true){
        console.log("this is a future event");
        // add class of future
        $("textarea").addClass("future");
    } else {
        console.log("this is a past event");
        // add class of past
        $("textarea").addClass("past");
    }
}
// when the save button is clicked, it is saved in local storage

// when page is refreshed, the save events still exist