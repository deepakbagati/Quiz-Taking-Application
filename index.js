const questions=[

    {
        question:"Which is the largest animal in the world?",
        answers:[
            {text:"Shark",correct:true},
            {text:"Dog",correct:false},
            {text:"Tiger",correct:false},
            {text:"Ant",correct:false},
        ]
     },
        {

            question:"Which is the largest building in the world?",
            answers:[
                {text:"Burj Khaifa",correct:false},
                {text:"Jagti Building",correct:true},
                {text:"Mahadev Apartment",correct:false},
                {text:"Tcet",correct:false},
            ]


        },
        
        {
            question:"Which is the national flower of india ?",
            answers:[
                {text:"Rose",correct:false},
                {text:"jasmine",correct:false},
                {text:"Lotus",correct:true},
                {text:"Daisy",correct:false},
            ]

        },

        {


            question:"Which is the beautiful city in the world?",
            answers:[
                {text:"delhi",correct:false},
                {text:"mumbai",correct:false},
                {text:"jammu",correct:true},
                {text:"banglore",correct:false},
            ]

        }
    
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-buttons");
const nextButton=document.getElementById("next-btn");


let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button =document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    })

}
function resetState(){
    nextButton.style.display='none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    } 

}
function selectAnswer(e){
    const selectedBtn =e.target;
    const isCorrect =selectedBtn.dataset.correct==="true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){

            button.classList.add("correct")

        }
       button.disabled=true;
    });
    nextButton.style.display="block";

}
function showScore(){
    resetState();
    questionElement.innerHTML=`You Scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block";
}
function handlenextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex<questions.length){
        handlenextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();