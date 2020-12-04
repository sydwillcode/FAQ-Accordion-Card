document.addEventListener("DOMContentLoaded", function () {
   let answers = document.getElementById('section1');

   answers.addEventListener('click', showAnswer)

   function showAnswer() {
      let answer = document.getElementById('section1-body');
      if (answer.style.display = "none") {
         answer.style.display = "block"
      } else {
         answer.style.display = "none"
      }
  
   }

})

/*
When clicked
show hidden text
when clicked agin, 
hide text
 Mauve background #74536F
*/