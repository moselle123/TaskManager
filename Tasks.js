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

const hoursRange = document.getElementById('hoursRange');
const hoursText = document.getElementById('hoursText');

hoursRange.addEventListener('input', () => {
    hoursText.value = hoursRange.value;
});

hoursText.addEventListener('input', () => {
    const value = parseInt(hoursText.value);
    if (!isNaN(value) && value >= 0 && value <= 24) {
        hoursRange.value = value;
    }
});

const daysRange = document.getElementById('daysRange');
const daysText = document.getElementById('daysText');

daysRange.addEventListener('input', () => {
    daysText.value = daysRange.value;
});

daysText.addEventListener('input', () => {
    const value = parseInt(daysText.value);
    if (!isNaN(value) && value >= 0 && value <= 24) {
        daysRange.value = value;
    }
});

const weeksRange = document.getElementById('weeksRange');
const weeksText = document.getElementById('weeksText');

weeksRange.addEventListener('input', () => {
    weeksText.value = weeksRange.value;
});

weeksText.addEventListener('input', () => {
    const value = parseInt(weeksText.value);
    if (!isNaN(value) && value >= 0 && value <= 24) {
        weeksRange.value = value;
    }
});