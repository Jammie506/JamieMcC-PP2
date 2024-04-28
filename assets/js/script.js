//Global Variables

//For examTimer & endAlert()
let secondsBetweenActions = 1200;
let secondsRemaining = secondsBetweenActions;
let examInterval;
let prelimGrade = 0;

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

//Setting up Event Listener for Submission
exam.addEventListener('submit', submitExam);

function submitExam(event){
  event.preventDefault();
  console.log("Submission in Progress")

  // End Exam Timer Early
  clearInterval(examInterval);
  console.log("Timer Cleared")

  exam.style.display = "none";

  examValidation();
  console.log(prelimGrade);
  submitted.style.display = "block";

  console.log("Submitting Exam")
  exam.requestSubmit();
  console.log("Exam Submitted");
}

//Exam Validation for a Preliminary Grade
function examValidation(){
  //Short Question 1
  if(window.getComputedStyle(shortQuestions[0]).display === "block"){
    //Checks that the question was visible to the user, moves on if not visible
    console.log("Works, Visible");
    if(document.getElementById("q-one-a-four").checked){
      //Adds points if correct answer submitted
      prelimGrade++
    }
  }else if (window.getComputedStyle(shortQuestions[0]).display === "none"){
    //Carries on if the Question was Hidden
    console.log("Works, Hidden");
  }

  //Short Question 2
  if(window.getComputedStyle(shortQuestions[1]).display === "block"){
    console.log("Works, Visible");
    if(document.getElementById("q-two-a-one").checked){
      prelimGrade++
    }
  }else if (window.getComputedStyle(shortQuestions[1]).display === "none"){
    console.log("Works, Hidden");
  }

  //Short Question 3
  if(window.getComputedStyle(shortQuestions[2]).display === "block"){
    console.log("Works, Visible");
    if(document.getElementById("q-three-a-two").checked){
      prelimGrade++
    }
  }else if (window.getComputedStyle(shortQuestions[2]).display === "none"){
    console.log("Works, Hidden");
  }

  //Short Question 4
  if(window.getComputedStyle(shortQuestions[3]).display === "block"){
    console.log("Works, Visible");
    if(document.getElementById("q-four-a-four").checked){
      prelimGrade++
    }
  }else if (window.getComputedStyle(shortQuestions[3]).display === "none"){
    console.log("Works, Hidden");
  }

  //Short Question 5
  if(window.getComputedStyle(shortQuestions[4]).display === "block"){
    console.log("Works, Visible");
    if(document.getElementById("q-five-a-three").checked){
      prelimGrade++
    }
  }else if (window.getComputedStyle(shortQuestions[4]).display === "none"){
    console.log("Works, Hidden");
  }

  //Short Question 6
  if(window.getComputedStyle(shortQuestions[5]).display === "block"){
    console.log("Works, Visible");
    if(document.getElementById("q-six-a-one").checked){
      prelimGrade++
    }
  }else if (window.getComputedStyle(shortQuestions[5]).display === "none"){
    console.log("Works, Hidden");
  }

  //Short Question 7
  if(window.getComputedStyle(shortQuestions[6]).display === "block"){
    console.log("Works, Visible");
    if(document.getElementById("q-seven-a-two").checked){
      prelimGrade++
    }
  }else if (window.getComputedStyle(shortQuestions[6]).display === "none"){
    console.log("Works, Hidden");
  }

  //Short Question 8
  if(window.getComputedStyle(shortQuestions[7]).display === "block"){
    console.log("Works, Visible");
    if(document.getElementById("q-eight-a-one").checked){
      prelimGrade++
    }
  }else if (window.getComputedStyle(shortQuestions[7]).display === "none"){
    console.log("Works, Hidden");
  }

  //Short Question 9
  if(window.getComputedStyle(shortQuestions[8]).display === "block"){
    console.log("Works, Visible");
    if(document.getElementById("q-nine-a-four").checked){
      prelimGrade++
    }
  }else if (window.getComputedStyle(shortQuestions[8]).display === "none"){
    console.log("Works, Hidden");
  }

  //Short Question 10
  if(window.getComputedStyle(shortQuestions[9]).display === "block"){
    console.log("Works, Visible");
    if(document.getElementById("q-ten-a-one").checked){
      prelimGrade++
    }
  }else if (window.getComputedStyle(shortQuestions[9]).display === "none"){
    console.log("Works, Hidden");
  }

  //Long Question 1
  if(window.getComputedStyle(longQuestions[0]).display === "block"){
    console.log("Works, Visible");
    //Adding a point for each correct selection
    if(document.getElementById("q-eleven-a-one").checked){
      prelimGrade++
    }
    if(document.getElementById("q-eleven-a-two").checked){
      prelimGrade++
    }
    if(document.getElementById("q-eleven-a-three").checked){
      prelimGrade++
    }
    if(document.getElementById("q-eleven-a-five").checked){
      prelimGrade++
    }
    if(document.getElementById("q-eleven-a-six").checked){
      prelimGrade++
    }
  }else if (window.getComputedStyle(longQuestions[0]).display === "none"){
    console.log("Works, Hidden");
  }

  //Long Question 2
  if(window.getComputedStyle(longQuestions[1]).display === "block"){
    console.log("Works, Visible");
    if(document.getElementById("q-twelve-a-one").checked){
      prelimGrade++
    }
    if(document.getElementById("q-twelve-a-two").checked){
      prelimGrade++
    }
    if(document.getElementById("q-twelve-a-four").checked){
      prelimGrade++
    }
    if(document.getElementById("q-twelve-a-five").checked){
      prelimGrade++
    }
    if(document.getElementById("q-twelve-a-six").checked){
      prelimGrade++
    }
  }else if (window.getComputedStyle(longQuestions[1]).display === "none"){
    console.log("Works, Hidden");
  }

  //Long Question 3
  if(window.getComputedStyle(longQuestions[2]).display === "block"){
    console.log("Works, Visible");
    if(document.getElementById("q-thirteen-a-one").checked){
      prelimGrade++
    }
    if(document.getElementById("q-thirteen-a-two").checked){
      prelimGrade++
    }
    if(document.getElementById("q-thirteen-a-three").checked){
      prelimGrade++
    }
    if(document.getElementById("q-thirteen-a-five").checked){
      prelimGrade++
    }
    if(document.getElementById("q-thirteen-a-six").checked){
      prelimGrade++
    }
  }else if (window.getComputedStyle(longQuestions[2]).display === "none"){
    console.log("Works, Hidden");
  }

  //Long Question 4
  if(window.getComputedStyle(longQuestions[3]).display === "block"){
    console.log("Works, Visible");
    if(document.getElementById("q-fourteen-a-two").checked){
      prelimGrade++
    }
    if(document.getElementById("q-fourteen-a-three").checked){
      prelimGrade++
    }
    if(document.getElementById("q-fourteen-a-four").checked){
      prelimGrade++
    }
    if(document.getElementById("q-fourteen-a-five").checked){
      prelimGrade++
    }
    if(document.getElementById("q-fourteen-a-six").checked){
      prelimGrade++
    }
  }else if (window.getComputedStyle(longQuestions[3]).display === "none"){
    console.log("Works, Hidden");
  }

  //Long Question 5
  if(window.getComputedStyle(longQuestions[4]).display === "block"){
    console.log("Works, Visible");
    if(document.getElementById("q-fifteen-a-one").checked){
      prelimGrade++
    }
    if(document.getElementById("q-fifteen-a-three").checked){
      prelimGrade++
    }
    if(document.getElementById("q-fifteen-a-four").checked){
      prelimGrade++
    }
    if(document.getElementById("q-fifteen-a-five").checked){
      prelimGrade++
    }
    if(document.getElementById("q-fifteen-a-six").checked){
      prelimGrade++
    }
  }else if (window.getComputedStyle(longQuestions[4]).display === "none"){
    console.log("Works, Hidden");
  }
}