// display date at top of calendar
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// time blocks display for standard buisness hours 9-5
var hours = ["9 am", "10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];
var taskList = [];
var thisTextArea;

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
    newTask.attr("time", hours[i]);
    newTask.attr("id", i);
    $(newRow).append(newTask);

    // create a button for each row
    var newButton = $("<button>");
    newButton.attr("class", "saveBtn");
    newButton.attr("id", hours[i]);
    $(newRow).append(newButton);

    // put image inside button
    var newImage = $("<i>");
    newImage.attr("class", "fa fa-folder");
    newImage.attr("aria-hidden", true);
    (newButton).append(newImage);
        
}

// time blocks values are compared to current time 
$("textarea").each(function(){
    var thisTimeBlock = $(this).attr('time');
    console.log("this value is", thisTimeBlock);
    var currentTime = moment().format("h a");
    console.log("the current time is", currentTime);

    var timeBlockTime = moment(thisTimeBlock, "h a");

    console.log("is before?", timeBlockTime.isBefore(moment(currentTime, "h a")));
    console.log("is current?", timeBlockTime.isSame(moment(currentTime, "h a")));

    var isSame = timeBlockTime.isSame(moment(currentTime, "h a"));
    var isAfter = timeBlockTime.isAfter(moment(currentTime, "h a"));

    // functions to change colors of time blocks based on past, present, or future
    if (isSame === true && isAfter === false){
        console.log("this is the current event");
        // add class of pressent
        $(this).attr("class", "col-8 description present");
    } else if (isSame == false && isAfter === true){
        console.log("this is a future event");
        // add class of future
        $(this).attr("class", "col-8 description future");
    } else {
        console.log("this is a past event");
        // add class of past
        $(this).attr("class", "col-8 description past");
    }

});

// when a save button is clicked, it is saved in local storage
$("button").click( function(){
    taskList=[];
    $("textarea").each(function(){
        var thisTextArea = $(this).val();
        if (thisTextArea != undefined){
            console.log("entered task is", thisTextArea);
        }
        taskList.push(thisTextArea); 
    })
    console.log("this is the task list", taskList);
    storeTask();
    renderLastSubmit();
})


// store text content
function storeTask(){
    localStorage.setItem("enteredTasks", JSON.stringify(taskList));
}


// // when page is refreshed, the save events still exist
function init(){
    var enteredTask = JSON.parse(localStorage.getItem("enteredTasks"));
    if (enteredTask !== null){
        taskList = enteredTask;
    }
    renderLastSubmit();
}

// render last submit
function renderLastSubmit(){
        var nextTextArea0 = $("textarea#0");
        var nextTextArea1 = $("textarea#1");
        var nextTextArea2 = $("textarea#2");
        var nextTextArea3 = $("textarea#3");
        var nextTextArea4 = $("textarea#4");
        var nextTextArea5 = $("textarea#5");
        var nextTextArea6 = $("textarea#6");
        var nextTextArea7 = $("textarea#7");
        var nextTextArea8 = $("textarea#8");

        var nextTaskList0 = taskList[0];
        var nextTaskList1 = taskList[1];
        var nextTaskList2 = taskList[2];
        var nextTaskList3 = taskList[3];
        var nextTaskList4 = taskList[4];
        var nextTaskList5 = taskList[5];
        var nextTaskList6 = taskList[6];
        var nextTaskList7 = taskList[7];
        var nextTaskList8 = taskList[8];

        nextTextArea0.append(nextTaskList0);
        nextTextArea1.append(nextTaskList1);
        nextTextArea2.append(nextTaskList2);
        nextTextArea3.append(nextTaskList3);
        nextTextArea4.append(nextTaskList4);
        nextTextArea5.append(nextTaskList5);
        nextTextArea6.append(nextTaskList6);
        nextTextArea7.append(nextTaskList7);
        nextTextArea8.append(nextTaskList8);
}
// //run everytime the page is refreshed
init();

