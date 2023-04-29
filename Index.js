localStorage.clear();
var tasks = JSON.parse(window.localStorage.getItem("modulesList")) || ["<li class=\"list-item row\"><div class=\"col-1\"><input type=\"checkbox\" onclick=\"updateCheckBox()\"></div><div class=\"col-9\"><p class=\"m-0\">Do Laundry</p></div><div class=\"col-1\"><a href=\"TasksDay.html\" class=\"btn p-0\"><i class=\"bi bi-arrow-right-square\"></i></a></div></li>", "<li class=\"list-item row\"><div class=\"col-1\"><input type=\"checkbox\" onclick=\"updateCheckBox()\"></div><div class=\"col-9\"><p class=\"m-0\">Client Meeting @ 2</p></div><div class=\"col-1\"><a href=\"TasksDay.html\" class=\"btn p-0\"><i class=\"bi bi-arrow-right-square\"></i></a></div></li>"];

function addTask() {
    var todayInput = document.getElementById("todayInput");
    var todayList = document.getElementById("todayList");
    //var isChecked = false; // set the initial state of checkbox to false

    todayList.innerHTML+= "<li class=\"list-item row\"><div class=\"col-1\"><input type=\"checkbox\" onclick=\"updateCheckBox()\"></div><div class=\"col-9\"><p class=\"m-0\">" + todayInput.value + "</p></div><div class=\"col-1\"><a href=\"TasksDay.html\" class=\"btn p-0\"><i class=\"bi bi-arrow-right-square\"></i></a></div></li>";
    todayInput.value = "";
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

    const data = {
      labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      datasets: [
          {
              label: "Stress Level",
              data: [2, 3, 5, 4, 6],
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 2,
              fill: false,
              pointRadius: 4,
              pointBackgroundColor: "rgba(255, 99, 132, 1)"
          }
      ]
  };

  const config = {
      type: "line",
      data: data,
      options: {
          scales: {
              y: {
                  ticks: {
                      beginAtZero: true,
                      stepSize: 1
                  }
              }
          }
      }
  };

  const myChart = new Chart(document.getElementById("myChart"), config);
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

  $(document).ready(function() {
    // initialize variables
    var currentSlide = 1;
    var numSlides = $('.carousel-item').length;
  
    // hide all slides except the first one
    $('.carousel-item').not(':first').hide();
  
    // when the previous button is clicked, show the previous slide
    $('.prev').click(function() {
        $('.carousel-item').eq(currentSlide - 1).fadeOut(500);
        if (currentSlide == 1) {
            currentSlide = numSlides;
        } else {
            currentSlide--;
        }
        $('.carousel-item').eq(currentSlide - 1).fadeIn(500);
    });
  
    // when the next button is clicked, show the next slide
    $('.next').click(function() {
        $('.carousel-item').eq(currentSlide - 1).fadeOut(500);
        if (currentSlide == numSlides) {
            currentSlide = 1;
        } else {
            currentSlide++;
        }
        $('.carousel-item').eq(currentSlide - 1).fadeIn(500);
    });
});