//Global Variables

//For examTimer & endAlert()
let secondsBetweenActions = 1200;
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
// Getting On Screen Timer
let timer = document.getElementById("timer");

function examStart() {
  //Establishing Timer
  examInterval = setInterval(myTimer, 1000);

  // Hide Exam Content Until Exam Starts
  if (checkBox.checked == true){
    //Hide Exam Intro and Show Exam
    exam.style.display = "block";
    intro.style.display = "none";

    //Pseudo-Randomize which Questions are Shown on the Exam
  for(let i = 0; i < 2; i++){
    let j = Math.floor(Math.random()*shortQuestions.length);
    shortQuestions[j].style.display = "none";
  }

  for(let l = 0; l < 3; l++){
    let k = Math.floor(Math.random()*longQuestions.length);
    longQuestions[k].style.display = "none";
  }

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
  let timeRemaining;

  // Converting Seconds into Minutes and Seconds for User Timer
  let min = Math.floor (secondsRemaining / 60);
  let sec = secondsRemaining % 60;

  // Force Min & Seconds to be Double Digits
  let minFull = String(min.toString()).padStart(2, '0');
  let secFull = String(sec.toString()).padStart(2, '0');

  timeRemaining = minFull + ":" +secFull;

  timer.innerHTML = timeRemaining;
  if(secondsRemaining == 0){
      endAlert();
  }
}

function endAlert(){
  alert("Time Up! Exam will automatically submit");
  submitExam();
}

//Setting up Event Listener
exam.addEventListener('submit', submitExam);

//TODO Set up Automatic Validation for Preliminary Grade
function submitExam(event){
  event.preventDefault();
  console.log("Submission in Progress")

  // End Exam Timer Early
  clearInterval(examInterval);
  console.log("Timer Cleared")

  exam.style.display = "none";
  submitted.style.display = "block";

  console.log("Submitting Exam")
  exam.requestSubmit();
  console.log("Exam Submitted");
}