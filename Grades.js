// localStorage.clear();
newModule();
var modulesList = JSON.parse(window.localStorage.getItem("modulesList")) || [
    {
      name: "Software Architecture",
      credits: 15,
      average: 80.7,
      achieved: 56.5,
      completed: 70,
      url: "SoftwareArch.html"
    },
    {
      name: "Scrum",
      credits: 15,
      average: 77,
      achieved: 54,
      completed: 70,
      url: "Scrum.html"
    }
  ];
  //when the page loads add the divs from the information in the modules list
  function loadPage() {
    var modules = document.getElementById("modules");
    modules.innerHTML = ""; // Clear the modules container
    var fullHTML = "";
    
    for (var i = 0; i < modulesList.length; i++) {
        var completedWidth = modulesList[i].completed - modulesList[i].achieved;
        if (i % 2 === 0) {
            var html = "<div class=\"row mt-3\">";
            html += "<div class=\"border shadow rounded p-2 me-5\" style=\"width: 25vw;\"  onclick=\"clickModule("+i+")\"><h6 class=\"text-center fw-bold\">" + modulesList[i].name + "</h6><div class=\"d-flex justify-content-evenly mt-3\"><div class=\"d-flex flex-column align-items-center\"><h6>" + modulesList[i].average + "%</h6><p>Average</p></div><div class=\"d-flex flex-column align-items-center text-success\"><h6>" + modulesList[i].achieved +"%</h6><p>Achieved</p></div><div class=\"d-flex flex-column align-items-center text-danger\"><h6>" + modulesList[i].completed +"%</h6><p>Complete</p></div></div><div class=\"progress-stacked mx-3\"><div class=\"progress\" role=\"progressbar\" aria-label=\"Achieved\" aria-valuenow=\"" + modulesList[i].achieved +"\"aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + modulesList[i].achieved + "%;\"><div class=\"progress-bar bg-success\"></div></div><div class=\"progress\" role=\"progressbar\" aria-label=\"Complete\" aria-valuenow=\"" + modulesList[i].completed + "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + completedWidth +"%;\"><div class=\"progress-bar bg-danger\"></div></div></div></div>";
            if (i === modulesList.length - 1) {
                html += "</div>"; // Close the row if this is the last module
            }
        } else {
            var html = "<div class=\" border shadow rounded p-2 me-5\" style=\"width: 25vw;\"  onclick=\"clickModule("+i+")\"><h6 class=\"text-center fw-bold\"><div>" + modulesList[i].name + "</h6><div class=\"d-flex justify-content-evenly mt-3\"><div class=\"d-flex flex-column align-items-center\"><h6>" + modulesList[i].average + "%</h6><p>Average</p></div><div class=\"d-flex flex-column align-items-center text-success\"><h6>" + modulesList[i].achieved +"%</h6><p>Achieved</p></div><div class=\"d-flex flex-column align-items-center text-danger\"><h6>" + modulesList[i].completed +"%</h6><p>Complete</p></div></div><div class=\"progress-stacked mx-3\"><div class=\"progress\" role=\"progressbar\" aria-label=\"Achieved\" aria-valuenow=\"" + modulesList[i].achieved +"\"aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + modulesList[i].achieved + "%;\"><div class=\"progress-bar bg-success\"></div></div><div class=\"progress\" role=\"progressbar\" aria-label=\"Complete\" aria-valuenow=\"" + modulesList[i].completed + "\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: " + completedWidth +"%;\"><div class=\"progress-bar bg-danger\"></div></div></div></div></div>";
        }
        fullHTML += html;
    }
    modules.innerHTML = fullHTML;
}

window.onload = function() {
loadPage();
}

// add event listener when the new module modal is opened
$('#newModuleModal').on('shown.bs.modal', function () {
    let moduleName = document.getElementById("moduleName").value;
    let credit = document.getElementById("credits").value;
    moduleName.value = "";
    credit.value = "";
    let closeButton = document.getElementById('cancelButton');
    closeButton.addEventListener('click', function() {
        $('newModuleModal').modal('hide');
    });
});

function newModule(){
    document.getElementById("saveModuleButton").addEventListener('click', function(event){
        event.preventDefault();
        
        let moduleName = document.getElementById("moduleName").value;
        let credit = document.getElementById("credits").value;
        var moduleObject = {name: moduleName, credits: credit, average: 0, achieved: 0, completed: 0};
        modulesList.push(moduleObject);
        window.localStorage.setItem("modulesList", JSON.stringify(modulesList));
        $('#newModuleModal').modal('hide');
        loadPage();
    });
}

function clickModule(index) {
    if (index === 0 || index === 1){
        window.location.href = modulesList[index].url;
    }
  }