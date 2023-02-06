//questions stored in the QuizData variable
const quizData = [
        {
        question: 'Which of the following is not a real eCommerce platform?',
        a: 'Shopify',
        b: 'WooCommerce',
        c: 'ShopCommerce',
        d: 'BigCommerce',
        correct: 'c',
    
        },
        {question: 'If Shopify is so good, why are Shopify developers necessary?',
        a: 'To save time on things like store setups and migrations',
        b: 'To extend the limited design options and functionalities of themes with custom code',
        c: 'To provide support with a deep understanding of how the platform works and what its limitations are',
        d: 'All the above',
        correct: 'd',
        
        },
        {question: 'Which of the following is true about Shopify developers?',
        a: 'They are paid extremely well',
        b: 'There is a high demand for them',
        c: 'They need to know web development, the platform itself, and the liquid template language',
        d: 'All the above',
        correct: 'd',
        
        },
];

//quiz variabale to call the quiz element class that contains the quiz outline in the HTML
const quiz = document.getElementById('quiz')

//answerEls variable to call the name='answer' attribute in HTML
const answerEls = document.querySelectorAll('.answer')

//questionEl to call add into the questions attribute from JS into the HTML
const questionEl = document.getElementById('question')

//variables to be declared and inputed to the label id='a_text' attributes
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

//next button variable to be declared by element id
const nextBtn = document.getElementById('next')

//variable to initiate currentQuiz = 0
let currentQuiz = 0

//variable to start the score and quiz at 0
let score = 0

//variable for max question counter
const MAX_QUESTIONS = 3

//variable to add to after every question
let questionCounter = 0

//automatically starts the quiz
startQuiz ()

//function to start the quiz by injecting the data into the HTML 
function startQuiz() {

    deselectAnswers()//declare deselection answer


    const currentQuizData = quizData[currentQuiz]//store quizdata and currentQuiz (is 0) to the variable currentQuizData
    
    questionEl.innerText = currentQuizData.question// laods the answers on the page 

    a_text.innerText = currentQuizData.a//answers
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

    questionCounter++ //adds 1 to after every question
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`//puts the 'question 1 of 3' at the top

}

//function to automatically deselect radio buttons
function deselectAnswers () {

    answerEls.forEach(answerEls => answerEls.checked = false)
    
}


function getSelected () {//function that tells if the answer is correct or not
    let answer//variable to initiate answer
    answerEls.forEach(answerEl => {//for each loop to get the answers in the answerEls variable to see if it is checked
        if(answerEl.checked) {
            answer = answerEl.id//if the answer is checked then it is matched and considered correct
        }
    })
    return answer
}

nextBtn.addEventListener('click', () =>  {//activates next button with event listener
    const answer = getSelected()//answer variable inside scope with the getSelected function 
    if(answer) {//if statement that determines if the user gets the answer right, it adds 1 to the score
        if (answer === quizData[currentQuiz].correct) {//if the answer is equal to the data and on the current page is correct then score updates
            score++
            
        }
        currentQuiz++//updates the current quiz page

        if(currentQuiz < quizData.length) {//if current quiz is less than length of data, then start the quiz again
            startQuiz()
        } else {//once quiz is finished then score and quiz data are calculated by division and added into the back tick statement 
            quiz.innerHTML = `
            <h2>You got ${score}/${quizData.length} questions right!</h2>
            <button onclick='location.reload()'>Retry</button>`//offers the user to try again
        }
    }
}) 
