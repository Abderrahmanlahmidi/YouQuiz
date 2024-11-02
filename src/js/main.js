const quizzes = [
  {
    question: "What is the largest planet in our solar system?",
    choices: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
    id: 1,
  },
  {
      question: "What element does 'O' represent on the periodic table?",
      choices: ["Oxygen", "Osmium", "Oxide", "Opium"],
      answer: "Oxygen",
      id: 2,
  },
  {
      question: "Who wrote the play 'Romeo and Juliet'?",
      choices: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
      answer: "William Shakespeare",
      id: 3,
  },
  {
      question: "What is the square root of 64?",
      choices: ["6", "8", "16", "32"],
      answer: "8",
      id: 4,
  },
  {
      question: "Which planet is known as the Red Planet?",
      choices: ["Venus", "Mars", "Jupiter", "Mercury"],
      answer: "Mars",
      id: 5,
  },
  {
      question: "In which country is the Great Wall located?",
      choices: ["China", "Japan", "India", "Mongolia"],
      answer: "China",
      id: 6,
  },
  {
      question: "What is the chemical symbol for water?",
      choices: ["H2O", "O2", "CO2", "NaCl"],
      answer: "H2O",
      id: 7,
  }
  
];



let timer = document.getElementById("timer");
let timer_background = document.getElementById("timer_bg");
let seconds = 20;
let current_index = 1;



setInterval(function() {

  let counter_timer = timer.innerHTML = seconds--;

  if(10 <= seconds < 30 ){
    timer_background.style.background = "#c2defd";
  }

  if(seconds < 9){
    timer_background.style.background = "#ffe7e6";
    timer.innerHTML = "0" + counter_timer;
  }

  if(seconds === 0){
      seconds = 30;
      current_index++;
  }
 
}, 1000);



let question_number = document.getElementById("question_number");
let number_of_questions = document.getElementById("number_of_questions");
let button_Previous = document.getElementById("button_Previous");
let button_next = document.getElementById("button_next");
let question = document.getElementById("question");
let choice_button = document.querySelectorAll(".choice_button");
let quiz_title = document.getElementById("quiz_title");

let quizzes_app = document.getElementById("quizzes_app");
let Dashboard = document.getElementById("Dashboard");
let back_button = document.getElementById("back_button");
let button_finish = document.getElementById("button_finish");


question_number.innerHTML = current_index;
number_of_questions.innerHTML = quizzes.length;
quiz_title.innerHTML = "Start Your Quiz";


Dashboard.classList.add("hidden");


button_finish.addEventListener("click", () => {

  quiz_title.innerHTML = "Your Result";
  
  Dashboard.classList.remove("hidden");
  quizzes_app.classList.add("hidden")



})

back_button.addEventListener("click", () => {
  Dashboard.classList.add("hidden");

  quizzes_app.classList.remove("hidden");
  

})


function updateQuestion(){

  quizzes.forEach((item) => {
    if(current_index === item.id){
      question.innerHTML = item.question
    }
   })
  
  quizzes.forEach((item) =>{
    if(current_index === item.id)
    for(let i = 0; i < choice_button.length; i++){
       choice_button[i].innerHTML = item.choices[i];
       choice_button[i].classList.remove("active_color"); 
    }
  })

}

updateQuestion();

button_next.addEventListener("click", () => {

  if (current_index < quizzes.length) {
    current_index++
    question_number.innerHTML = current_index;
    updateQuestion();
  }
  
  if (current_index !== 1) {
    button_Previous.classList.remove("hidden");
  }

  if (current_index === 7) {
    button_next.classList.add("hidden");
    button_finish.classList.remove("hidden");
  } 


})


button_Previous.classList.add("hidden");

button_Previous.addEventListener("click", () => {

  if (current_index > 1) {
    current_index--
    question_number.innerHTML = current_index;
    updateQuestion();


  }

  if (current_index === 1) {
    button_Previous.classList.add("hidden");
  }

  if(current_index >= 6){
    button_next.classList.remove("hidden");
    button_finish.classList.add("hidden");
  }

})


choice_button.forEach((button) => {
  button.addEventListener("click", function(){
    
      choice_button.forEach(item => {
        item.classList.remove("active_color");
      });

      button.classList.add("active_color");
  });
});


choice_button.forEach((button_target) => {
   button_target.addEventListener("click", button_action);
});


let Dashboard_Qs = document.querySelectorAll(".Question_Dash");
let answer = document.querySelectorAll(".answer");
let user_answer = document.querySelectorAll(".your_answer");
let Score = document.getElementById("Score");
let check_answer = document.querySelectorAll(".check_answer"); 


let user_choices = [];

function button_action(event) {
  let btn = event.target;
  
  let counter_score = 0;
   
  user_choices.push(btn.innerText);

  for (let i = 0; i < quizzes.length; i++) {
    if (quizzes[i].answer === user_choices[i]) {
      Dashboard_Qs[i].innerHTML = quizzes[i].question;
      answer[i].innerHTML = quizzes[i].answer;
      user_answer[i].classList.add("hidden");
      counter_score++;
    }else if(quizzes[i].answer !== user_choices[i]){
      Dashboard_Qs[i].innerHTML = quizzes[i].question;
      answer[i].innerHTML = quizzes[i].answer;
      user_answer[i].innerHTML = user_choices[i];
    }
  }

  Score.innerHTML = counter_score;
}

























