const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');
const finishedImage = document.getElementById('finished-image');

const questions = [
    { question: "What's a perfect Valentines Gift for you?", answer: "You", reply: "Me, I'm the only gift for you bc I'm perfect for you", rightGif: "right_answer_1.gif", wrongGif: "wrong_answer_1.gif" },
    { question: "Where do you want to be right now", answer: "With you", reply: "You should always want to be with me Silly", rightGif: "right_answer_2.gif", wrongGif: "wrong_answer_2.gif" },
    { question: "Who is your Bessst Friienndd?", answer: "You", reply: "Me, You Have No Other Friends", rightGif: "right_answer_3.gif", wrongGif: "wrong_answer_3.gif" },
    { question: "If you could choose a superpower, what would it be?", answer: "Making you smile", reply: "Making me smile Dummy", rightGif: "right_answer_4.gif", wrongGif: "wrong_answer_4.gif" },
    { question: "What should be the best part of your morning?", answer: "Seeing your face", reply: "be seeing my face baby, don't you want to wake up next to the love of your life", rightGif: "right_answer_5.gif", wrongGif: "wrong_answer_5.gif" },
];

let currentQuestionIndex = 0;

function buildQuiz() {
    const questionObj = questions[currentQuestionIndex];
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');
    const questionText = document.createElement('p');
    questionText.textContent = `${currentQuestionIndex + 1}. ${questionObj.question}`;
    questionDiv.appendChild(questionText);
    
    // Create input box for answer
    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.placeholder = 'Type your answer here';
    questionDiv.appendChild(answerInput);

    quizContainer.appendChild(questionDiv);
    
    submitButton.style.display = 'block'; // Show submit button initially
    
    function answerQuestion() {
        submitButton.style.display = 'none'; // Hide submit button after answering
        answerInput.style.display = 'none'; // Hide the input box
        questionText.style.display = 'none'; // Hide the question text
        const userAnswer = answerInput.value.trim();
        if (userAnswer.toLowerCase() === questionObj.answer.toLowerCase()) {
            resultContainer.textContent = `You got it right!`;
            showGif(questionObj.rightGif); // Show the right GIF
        } else {
            resultContainer.textContent = `Wrong! The correct answer is "${questionObj.reply}".`;
            showGif(questionObj.wrongGif); // Show the wrong GIF
        }
        currentQuestionIndex++;
        setTimeout(() => {
            resultContainer.textContent = '';
            quizContainer.innerHTML = ''; // Remove the question
            if (currentQuestionIndex < questions.length) {
                buildQuiz(); // Build the next question
            } else {
                // Display final message
                const endMessage = document.createElement('p');
                endMessage.id = 'end-message';
                endMessage.textContent = "In all my life, I never met someone that could be so important to me like you atr bc you are the most important person in my life. I have and will always love you with all my heart and soul.";
                quizContainer.appendChild(endMessage);
                const endImage = document.createElement('img');
                endImage.src = 'end_hearts.gif'; // Add the end hearts gif
                endImage.style.width = '500px'; // Adjust width as needed
                endImage.style.display = 'block'; // Show the end image
                quizContainer.appendChild(endImage);
            }
            
        }, 10000); // Delay for 10 seconds
    }
    
    
    answerInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            answerQuestion(); // Answer the question when Enter is pressed
        }
    });
    
    submitButton.addEventListener('click', function(event) {
        answerQuestion(); // Answer the question when submit button is clicked
    
    });
}

function showGif(gifPath) {
    const gifImage = document.createElement('img');
    gifImage.src = gifPath;
    gifImage.style.width = '100px'; // Adjust width as needed
    gifImage.style.height = 'auto'; // Maintain aspect ratio
    gifImage.style.display = 'block'; // Show the GIF
    quizContainer.appendChild(gifImage);
}



buildQuiz();
