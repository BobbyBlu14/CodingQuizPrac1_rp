// Start button
const startButton = document.getElementById('start-btn')
const nextutton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById ('quest-can')
const questionElement = document.getElementById ('question')
const answerButtonElement = document.getElementById ('answer-buttons')

//Randomize order
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextutton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuest()
})



///function to start game
function startGame () {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5 )
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setnextQuest()
}


//function to select next question 
function setNextQuest(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}



//function show Question
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => { 
        const button = document.createElement('button') 
        button.innerText = answer.text
        button.classList.add('btn')
        if     (answer.correct) {
            button.dataset.correct = answer.correct
        
        }
        button.addEventListener ('click',selectAnswer )
        answerButtonElement.appendChild(button)
        //Add Sound Effect for right Answer
    })
}


//reset question
function resetState() {
    clearStatusClass(document.body) 
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild 
        (answerButtonElement.firstChild) 
    }
       
}

/// function for answer selection

function selectAnswer(){
    const selectedButton = e.targe
    const correct = selectedButton.dataset.correct
    setStatustClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)

    })
}


function setStatusClass (element, correct) {
    clearStatusClass(element)
    if (correct) { 
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

    /// not on last question
    if (shuffledQuestions.length > currentQuestionIndex + 1){

        nextutton.classList.remove('hide')
    }   else {
            startButton.innerText= "Restart"
            startButton.classList.remove('hide')
        }
        

// Questions & Answers
const questions = [
    {
        question: 'What is the HTML tag under which one can write the JavaScript code?'
        answer: [
            { text: '<javascript>', correct: false}.
            { text: '<scripted>', correct: false}
            { text: '<script>', correct: true}.
            { text: '<js>', correct: false}
        ]
    },
    {
        question: 'Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?'
        answers: [
            { text: ' <script src=”geek.js”>', correct: true}.
            { text: '<script href=”geek.js”>', correct: false}
            { text: '<script ref=”geek.js”>', correct: false}.
            { text: '<script name=”geek.js”>', correct: false}
        ]
    },
    {
        question: 'The external JavaScript file must contain <script> tag. True or False?'
        answers: [
          
            { text: 'True', correct: false}
            { text: 'False', correct: true}.
        
        ]
    }, 
    {
        question: 'What is the syntax for creating a function in JavaScript named as Geekfunc?'
        answers: [
            { text: '<function = Geekfunc()>', correct: false}.
            { text: 'function Geekfunc()', correct: true}
            { text: ' function := Geekfunc()', correct: false}.
            { text: 'function : Geekfunc()', correct: false}
        ]
    },
    {
        question: 'What is the JavaScript syntax for printing values in Console?'
        answers: [
            { text: 'print(5)', correct: false}.
            { text: 'console.log(5);', correct: true}
            { text: ' console.print(5);', correct: false}.
            { text: 'print.console(5);', correct: false}
        ]
    }
]