function editTask(tname, tcategory, tdate, thours, tday, tweeks){
    taskName = document.getElementById("taskName");
    category = document.getElementById("category");
    date = document.getElementById("taskDate");
    hours = document.getElementById("hoursRange");
    days = document.getElementById("daysRange");
    weeks = document.getElementById("weeksRange");

    taskName.value = tname;
    category.value = tcategory;
    date.value = tdate;
    hours.value = thours;
    days.value = tday;
    weeks.value = tweeks;
    
}

 function clearInputs(){
    taskName = document.getElementById("taskName");
    category = document.getElementById("category");
    date = document.getElementById("taskDate");
    hours = document.getElementById("hoursRange");
    days = document.getElementById("daysRange");
    weeks = document.getElementById("weeksRange");

    taskName.value = "";
    category.value = "";
    date.value = "";
    hours.value = 0;
    days.value = 0;
    weeks.value = 0;
 }