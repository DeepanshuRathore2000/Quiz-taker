const quizDB = [
    {
        question: "Q1: A signal is a physical quantity which does not vary with ____________",
        a: "Time",
        b: "Space",
        c: "Independent Variables",
        d: "Dependent Variables",
        ans: "ans4"
    },
    {
        question: "2. For an energy signal __________",
        a: "E=0",
        b: " P= â",
        c: "E= â",
        d: "P=0",
        ans: "ans4"
    },
    {
        question: "3. The odd component of the signal X (t) = ejt is _______________",
        a: "Sin t",
        b: "cos t",
        c: "sinh t",
        d: "cosh t",
        ans: "ans1"
    }
    ,
    {
        question: `4. Given the signal
        X (t) = cos t, if t<0
        Sin t, if tâ¥0
        The correct statement among the following is?`,
        a: "Periodic with fundamental period 2Ï",
        b: " Periodic but with no fundamental period",
        c: "Non-periodic and discontinuous",
        d: " Non-periodic but continuous",
        ans: "ans3"
    }
];

const infoBox = document.querySelector(".info_box");
const continueBtn = document.querySelector(".buttons .continue");
const quizBox = document.querySelector(".inner-container");
const timeCount = quizBox.querySelector(".timer .timer_sec");

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector("#submit");
const resultBox = document.querySelector(".result-box");
const restartQuiz = document.querySelector(".result-box-buttons .restart");


const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector ("#showScore");
let questionCount = 0;
let score = 0;
let counter;
let timeValue = 15;


// If continue button clicked
continueBtn.onclick = ()=>{
    quizBox.classList.add("activequiz"); // show the quizbox
    infoBox.classList.add("hide");
    startTimer(15);
    
} 

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.  question;
    
    option1.innerText= questionList.a;
    option2.innerText= questionList.b;
    option3.innerText= questionList.c;
    option4.innerText= questionList.d; 
}
loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener("click", () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    
    questionCount++;

    deselectAll(); 

    if(questionCount < quizDB.length){
        loadQuestion();
        clearInterval(counter);
        startTimer(timeValue);
        
    }
    else{
       resultBox.classList.add("activeresult");
       quizBox.classList.remove("activequiz");
       quizResult();
    }
});
restartQuiz.addEventListener("click",function(){
    location.reload();
})

function quizResult(){
    // totalques.innerHTML = quizDB.length;
    resultBox.querySelector(".total-question").innerHTML = quizDB.length;
    resultBox.querySelector(".total-correct").innerHTML = score;
    resultBox.querySelector(".total-wrong").innerHTML = quizDB.length - score;
    const percentage = (score/quizDB.length)*100;
    resultBox.querySelector(".total-percentage").innerHTML = percentage.toFixed() + "%";
    resultBox.querySelector(".total-score").innerHTML = score + "/" + quizDB.length;
}
function startTimer(time){
    counter= setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time<0){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
        }
    }
}


