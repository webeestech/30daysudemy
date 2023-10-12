const questions = [
    {
        question: "What is the world's most populated country?",
        answers: [
            { text: "India", correct: false},
            { text: "USA", correct: false},
            { text: "China", correct: true},
            { text: "Russia", correct: false},
        ]
    },
    {
        question: "What is the world's most smallest country?",
        answers: [
            { text: "Licthenstein", correct: false},
            { text:"Vatican City", correct: true},
            { text: "Monaco", correct: false},
            { text: "Luxembourg", correct: false},
        ]
    },
    {
        question: "What is the capital of Australia?",
        answers: [
            { text: "Sydney", correct: false},
            { text: "Adelade", correct: false},
            { text: "Canberra", correct: true},
            { text: "Melbourne", correct: false},
        ]
    },
    {
        question: "Where was the hottest temperature ever recorded?",
        answers: [
            { text: "India", correct: false},
            { text: "Libya", correct: true},
            { text: "Mexico", correct: false},
            { text: "Peru", correct: false},
        ]
    }
]

const question = document.getElementById("question");
const answerBtn = document.getElementById("answer-btns");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion()
}

function showQuestion(){
    resetPrev();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    question.innerHTML = questionNumber + ". " + currentQuestion.question

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })
}

function resetPrev(){
    nextBtn.style.display = "none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("false");
    }
    Array.from(answerBtn.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    });

    nextBtn.style.display = "block";

}

function showScore(){
    resetPrev();
    question.innerHTML = `You answered ${score} question(s) correctly!`
    nextBtn.innerHTML = "Play Again"
    nextBtn.style.display = "block";
}

function showNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion()
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click",() => {
    if(currentQuestionIndex < questions.length){
        showNextButton()
    } else {
        startQuiz();
    }
})

startQuiz();

