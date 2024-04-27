function examStart() {
    // Get Checkbox
    var checkBox = document.getElementById("exam-start");
    // Get the output text
    var text = document.getElementById("exam-content");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }