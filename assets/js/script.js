//Global Variables

//For examTimer & endAlert()
var secondsBetweenActions = 5;
var secondsRemaining = secondsBetweenActions;
var examInterval;

//Checking Number of Available Questions
let allQuestions = document.getElementsByClassName("exam-questions");
let shortQuestions = document.getElementsByClassName("short-question");
let longQuestions = document.getElementsByClassName("long-question");

console.log(allQuestions.length);
console.log(shortQuestions.length);
console.log(longQuestions.length);

function examStart() {
    // Get Checkbox
    var checkBox = document.getElementById("exam-start");
    // Get Exam Content
    var text = document.getElementById("exam-content");

    //Establishing Timer
    examInterval = setInterval(myTimer, 1000);

    // Hide Exam Content Until Exam Starts
    if (checkBox.checked == true){
      text.style.display = "block";
      //Start Timer when Exam Starts
      examInterval;
      console.log("Timer Start");
    } else {
      text.style.display = "none";
    }

  }

  function myTimer(){
    secondsRemaining --;
    console.log(secondsRemaining);
    if(secondsRemaining == 0){
        endAlert();
    }
  }

  function endAlert(){
    alert("Time Up! Exam will automatically submit");
    clearInterval(examInterval);
    console.log("Timer Cleared");
  }