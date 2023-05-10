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
    count++;
    //select random question and populate in the correct HTML location
    let questionNumber = Math.floor(Math.random() * remainingQuestions.length);
    currentQuestion = remainingQuestions[questionNumber];
    question.innerText = currentQuestion.question;


    choices.forEach(choice(number){
        let dataNumber = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];  
    })
}

game();