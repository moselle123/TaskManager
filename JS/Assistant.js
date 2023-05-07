function assistantQuestionHome(event){
    event.preventDefault();
    let question = document.getElementById("assistantQ");
    let modalInput = document.getElementById("modalInput");
    modalInput.value = question.value;
    questions(question.value);
}

function assistantQuestionModal(event){
    event.preventDefault();
    let modalInput = document.getElementById("modalInput");
    questions(modalInput.value);
}

function questions(question){
    if (question == "When is my next UI lecture?"){
        document.getElementById("answer").innerHTML = "<p>Your next UI lecture is on Monday 17th of March 2023 at 13:00. Would you like to see the full event information?<p><button class=\"btn btn-primary m-2\">Yes</button><button class=\"btn btn-primary m-2\">No</button><div class=\"position-absolute m-1 justify-content-center\" style=\"bottom: 0; right: 0;\"><button class=\"btn p-0\"><h1><i class=\"bi bi-volume-up\"></i></h1></button><p class=\"m-0\" style=\"font-size: xx-small;\">Read Aloud?</p></div>";
    }
}

function clearQuestions(){
    let question = document.getElementById("assistantQ");
    let modalInput = document.getElementById("modalInput");
    let answerDiv = document.getElementById("answer");
    modalInput.value = "";
    question.value = "";
    answerDiv.innerHTML = "<div class=\"position-absolute m-1 justify-content-center\" style=\"bottom: 0; right: 0;\"><button class=\"btn p-0\"><h1><i class=\"bi bi-volume-up\"></i></h1></button><p class=\"m-0\" style=\"font-size: xx-small;\">Read Aloud?</p></div>";
}

$(document).ready(function() {
    $('#assistantModal').on('hidden.bs.modal', function (e) {
      clearQuestions();
    });
  });

$(document).on('keydown', function ( e ) {
    if ((e.metaKey || e.ctrlKey) && ( String.fromCharCode(e.which).toLowerCase() === 'a') ) {
    event.preventDefault();
    $("#assistantModal").modal('show');
}
});