const quizContainer = document.getElementById('quiz-container');
const submitButton = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');
const finishedImage = document.getElementById('finished-image');

const questions = [
    { question: "What is your favorite color?", answer: "Red" },
    { question: "What is your favorite romantic movie?", answer: "Titanic" },
    { question: "Where would you go for a romantic getaway?", answer: "Paris" },
    { question: "What is your ideal Valentine's Day gift?", answer: "Flowers" },
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
    answerInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            answerQuestion(); // Answer the question when Enter is pressed
        }
    });
    questionDiv.appendChild(answerInput);

    quizContainer.appendChild(questionDiv);
    
    function answerQuestion() {
        const userAnswer = answerInput.value.trim();
        if (userAnswer.toLowerCase() === questionObj.answer.toLowerCase()) {
            resultContainer.textContent = `You got it right!`;
        } else {
            resultContainer.textContent = `Wrong! The correct answer is "${questionObj.answer}".`;
        }
        currentQuestionIndex++;
        setTimeout(() => {
            resultContainer.textContent = '';
            quizContainer.innerHTML = ''; // Remove the question
            if (currentQuestionIndex < questions.length) {
                buildQuiz(); // Build the next question
            } else {
                // Display final message
                quizContainer.textContent = "All of these answers will always relate to you because you are the most important person in my life. I have and will always love you.";
                finishedImage.style.display = 'block'; // Show the finished image
                submitButton.style.display = 'none'; // Hide the submit button
            }
        }, 500); // Delay for 5 seconds
    }
}

buildQuiz();
