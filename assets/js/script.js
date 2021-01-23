// display date at top of calendar
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// time blocks display for standard buisness hours 9-5
var hours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

for (var i = 0; i < 9; i++){
    // create a new row
    var newRow = $("<div>");
    newRow.attr("class", "time-block row");
    $(".container").append(newRow);

    // assign a time to each row
    var newTime = $("<div>");
    newTime.attr("class", "col-1 hour");    
    newTime.text(hours[i]);
    $(newRow).append(newTime);

    // create a text area for each row
    var newTask = $("<textarea>");
    newTask.attr("class", "col-9 description");
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

// time blocks are color coded based on past, present, or future

// when a time block is clicked, you can enter text

// when the save button is clicked, it is saved in local storage

// when page is refreshed, the save events still exist