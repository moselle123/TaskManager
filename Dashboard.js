//Today
tasks = [];

function addTask() {
    var todayInput = document.getElementById("todayInput");
    var todayList = document.getElementById("todayList");
    //var isChecked = false; // set the initial state of checkbox to false

    todayList.innerHTML+= "<li class=\"list-item row\"><div class=\"col-1\"><input type=\"checkbox\" onclick=\"updateCheckBox()\"></div><div class=\"col-9\"><p class=\"m-0\">" + todayInput.value + "</p></div><div class=\"col-1\"><button class=\"btn p-0\"><i class=\"bi bi-arrow-right-square\"></i></button></div></li>";
    todayInput.value = ""; // clear the input field
    window.localStorage.setItem("tasks",todayList.innerHTML);
  }
  //NEED TO ADD CHECKBOX FUNCTIONALITY
  // function updateCheckBox(){

  // }
  
  function loadPage() {
    var todayList = document.getElementById("todayList");
    todayList.innerHTML = window.localStorage.getItem("tasks");
  
    for (var i = 0; i < tasks.length; i++) {
      todayList.innerHTML+= tasks[i];
    }
  }
  window.onload = function() {
    loadPage();
    updateTime();
  }
//Clock
function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    
    // Add leading zeros to minutes if necessary
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    
    // Construct the time string in the format HH:MM
    var timeString = hours + ":" + minutes;

    if (hours < 12){
        document.getElementById("greeting").innerHTML = "Good Morning!";
    }
    else if (hours > 11 && hours < 17 ){
        document.getElementById("greeting").innerHTML = "Good Afternoon!";
    }
    else{
        document.getElementById("greeting").innerHTML = "Good Evening!"
    }
    
    // Update the content of the heading tag
    document.getElementById("currentTime").innerHTML = timeString;
    document.getElementById("currentDate").innerHTML = now.toDateString();
  }
  
  // Call updateTime every second to update the time
  setInterval(updateTime, 1000);