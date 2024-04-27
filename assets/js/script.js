//Global Variables

//For examTimer & endAlert()
let secondsBetweenActions = 5;
let secondsRemaining = secondsBetweenActions;
let examInterval;

//Checking Number of Available Questions
let allQuestions = document.getElementsByClassName("exam-questions");
let shortQuestions = document.getElementsByClassName("short-question");
let longQuestions = document.getElementsByClassName("long-question");

console.log(allQuestions.length);
console.log(shortQuestions.length);
console.log(longQuestions.length);

// Get Checkbox
let checkBox = document.getElementById("exam-start");
// Get Exam Content
let exam = document.getElementById("exam-content");
// Get Exam Intro
let intro = document.getElementById("exam-intro");
// Get Submission Page
let submitted = document.getElementById("exam-submitted");

function examStart() {
    //Establishing Timer
    examInterval = setInterval(myTimer, 1000);

    // Hide Exam Content Until Exam Starts
    if (checkBox.checked == true){
        //Hide Exam Intro and Show Exam
        exam.style.display = "block";
        intro.style.display = "none"
        //Start Timer when Exam Starts
        examInterval;
        console.log("Timer Start");
    } else {
        exam.style.display = "none";
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
    submitExam();
  }

  function submitExam(){
    console.log("Submission in Progress")
    // End Exam Timer Early
    clearInterval(examInterval);
    console.log("Timer Cleared")

    exam.style.display = "none";
    submitted.style.display = "block";

    console.log("Exam Submitted");
  }