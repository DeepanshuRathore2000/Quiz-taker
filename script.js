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
        b: " P= ∞",
        c: "E= ∞",
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
        Sin t, if t≥0
        The correct statement among the following is?`,
        a: "Periodic with fundamental period 2π",
        b: " Periodic but with no fundamental period",
        c: "Non-periodic and discontinuous",
        d: " Non-periodic but continuous",
        ans: "ans3"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector("#submit");

const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector ("#showScore");
let questionCount = 0;
let score = 0;

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
    }
    else{
        showScore.innerHTML =`
        <h3> You scored ${score}/${quizDB.length} ✌ </h3>
        <button class="btn" onclick="location.reload()"> Play Again </botton>`;
        
        showScore.classList.remove('scoreArea');
    }
});
