assessments = [
    {
        name: "First Semester",
        weighting: 50,
        achieved: 100,
        placeholder: false
    },
    {
        name: "CW1: Sprint 0",
        weighting: 5,
        achieved: 80,
        placeholder: false
    },
    {
        name: "CW2 Checkpoints",
        weighting: 15,
        achieved: 100,
        placeholder: false
    },
    {
        name: "CW3 Project Check",
        weighting: 15,
        achieved: null,
        placeholder: true
    }
]

function loadPage() {

    var average = 0;
    var achieved = 0;
    var complete = 0;

    for (var i = 0; i < assessments.length; i++) {
        if (assessments[i] != null){
            if (!assessments[i].placeholder){
                complete += assessments[i].weighting;
                average += assessments[i].achieved;
                achieved += assessments[i].achieved / assessments[i].weighting;
            }
        }  
    }

    average = average / assessments.length;
    averageElement = document.getElementById(progressionAverage);
    achievedElement = document.getElementById(progressionAchieved);
    completeElement = document.getElementById(progressionComplete);
    averageElement.innerHTML = average + "%";
    achievedElement.innerHTML = achieved + "%";
    completeElement.innerHTML = complete + "%";

    var assessmentsDiv = document.getElementById("assessments");
    assessmentsDiv.innerHTML = ""; // Clear the modules container
    var fullHTML = "";
    
    for (var i = 0; i < assessments.length; i++) {
        var completedWidth = assessments[i].completed - assessments[i].achieved;
        if (i % 2 === 0) {
            var html = "<div class=\"row mt-3\">";
            html += "<div class=\"border rounded p-2 me-5\" style=\"width: 25vw;\" id=\"moduleDiv\"><h6 class=\"text-center fw-bold\">" + assessments[i].name + "</h6><div class=\"d-flex justify-content-evenly mt-3\"><div class=\"d-flex flex-column align-items-center\"><h6>" + assessments[i].average + "%</h6><p>Average</p></div><div class=\"d-flex flex-column align-items-center text-success\"><h6>" + assessments[i].achieved +"%</h6><p>Achieved</p></div><div class=\"d-flex flex-column align-items-center text-danger\"><h6>" + assessments[i].completed +"%</h6><p>Complete</p></div></div><div class=\"progress-stacked mx-3\"><div class=\"progress\" role=\"progressbar\" aria-label=\"Achieved\" aria-valuenow=\"" + assesments[i].achieved +"\"aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + assesments[i].achieved + "%;\"><div class=\"progress-bar bg-success\"></div></div><div class=\"progress\" role=\"progressbar\" aria-label=\"Complete\" aria-valuenow=\"" + assessments[i].completed + "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + completedWidth +"%;\"><div class=\"progress-bar bg-danger\"></div></div></div></div>";
            if (i === assessments.length - 1) {
                html += "</div>"; // Close the row if this is the last module
            }
        } else {
            var html = "<div class=\" border rounded p-2 me-5\" style=\"width: 25vw;\" id=\"moduleDiv\"><h6 class=\"text-center fw-bold\"><div>" + assessments[i].name + "</h6><div class=\"d-flex justify-content-evenly mt-3\"><div class=\"d-flex flex-column align-items-center\"><h6>" + assessments[i].average + "%</h6><p>Average</p></div><div class=\"d-flex flex-column align-items-center text-success\"><h6>" + assessments[i].achieved +"%</h6><p>Achieved</p></div><div class=\"d-flex flex-column align-items-center text-danger\"><h6>" + assesments[i].completed +"%</h6><p>Complete</p></div></div><div class=\"progress-stacked mx-3\"><div class=\"progress\" role=\"progressbar\" aria-label=\"Achieved\" aria-valuenow=\"" + assesments[i].achieved +"\"aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + assesments[i].achieved + "%;\"><div class=\"progress-bar bg-success\"></div></div><div class=\"progress\" role=\"progressbar\" aria-label=\"Complete\" aria-valuenow=\"" + assessments[i].completed + "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + completedWidth +"%;\"><div class=\"progress-bar bg-danger\"></div></div></div></div></div>";
        }
        fullHTML += html;
    }
    modules.innerHTML = fullHTML;
}

window.onload = function() {
loadPage();
}