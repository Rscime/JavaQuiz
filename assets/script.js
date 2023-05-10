let question = document.getElementById("question");
// create array of choices
let choices = Array.from(document.getElementsByClassName("textChoice"));

let currentQuestion= {};
let accept = true;
let score = 0;
let count = 0;
let remainingQuestions = [];
let correctScore = 1;
let numberOfQuestions = 5;


//create an array of question objects
let questions = [
    {
        question: "Question One",
        choice1:"A",
        choice2:"B",
        choice3:"C",
        choice4:"D",
        answer: "choice1"
},
{
    question: "Question Two",
    choice1:"A",
    choice2:"B",
    choice3:"C",
    choice4:"D",
    answer: "choice4"
},
{
    question: "Question Three",
    choice1:"A",
    choice2:"B",
    choice3:"C",
    choice4:"D",
    answer: "choice2"
},
{
    question: "Question Four",
    choice1:"A",
    choice2:"B",
    choice3:"C",
    choice4:"D",
    answer: "choice3"
},
{
    question: "Question Five",
    choice1:"A",
    choice2:"B",
    choice3:"C",
    choice4:"D",
    answer: "choice1"
}
];

function game(){
    count =0;
    score = 0;
    //use spread operator to duplicate the questions array without fear of altering it throughout the function
    remainingQuestions = [...questions];
    newQuestion();
}

function newQuestion() {
    // Check counter to ensure dont run out of questions
    if(count >= questions.length){
        //end of game
    }
    
    //select next question and populate in the correct HTML location
    currentQuestion = remainingQuestions[count];
    question.innerText = currentQuestion.question;
    count++;

// populate all the choices into the webpage
    choices.forEach(function(choice){
        let dataNumber = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + dataNumber];  
    });

}

//listen to and log answer choice
choices.forEach(function(choice){
        choice.addEventListener("click", function(event){
        let userChoice = event.target
        let selectedAnswer = userChoice.dataset['number'];
        console.log(selectedAnswer);
        newQuestion();
        });
    });

game();