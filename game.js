const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let avaliableQuestion = [];

let questions = [
    {
        question : "Who is the best cricketer in the world ?",
        choice1 : "Sachin Tendulkar",
        choice2 : "Virat Kolli",
        choice3 : "Adam Gilchirst",
        choice4 : "Jacques Kallis",
        answer : 1
    },
    {
        question : "What are the colors in the Indian national flag ?",
        choice1 : "White",
        choice2 : "Yellow",
        choice3 : "Orange",
        choice4 : "Green",
        answer : 1
    },
]

// constants 

const Correct_Bonus = 10;
const Max_Questions = 3;

startGame = () =>{
    questionCounter = 0;
    score = 0;
    avaliableQuestions = [...questions];
    console.log(avaliableQuestions);
    getNewQuestion();
};

getNewQuestion = () =>{
    if(avaliableQuestions.length ===0 || questionCounter>= Max_Questions){
        localStorage.setItem("mostRecentScore",score);
        // go to the end page
        return window.location.assign("/end.html");
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random()*avaliableQuestions.length);
    currentQuestion = avaliableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice =>{
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
    avaliableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

choices.forEach( choice =>{
    choice.addEventListener("click", event =>{
        if(!acceptingAnswers){
            return
        }
        acceptingAnswers = false;
        const selectedChoice = event.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = "incorrect";
        if(selectedAnswer == currentQuestion.answer){
            classToApply = "correct";
        }
        selectedChoice.parentElement.classList.add("classToApply");
        setTimeout(()=>{
            selectedChoice.parentElement.classList.remove("classToApply");
            getNewQuestion();
        },1000)
        
    });
});

startGame();