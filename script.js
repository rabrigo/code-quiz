// TODO: create link to view high scores
// TODO: correct/incorrect display
// TODO: create a timer
// TODO: record initials and clear highscore button

var messageArea = document.querySelector('#message-area');
var buttonArea = document.querySelector('#button-area');
var openingMessage;
var questionText;
var startButton;
var answerButton1;
var answerButton2;
var answerButton3;
var answerButton4;
var currentQuestion = 0;

// This array contains all of the questions and answers as objects
// for each index.

var questionArray = [ {
        question: "Commonly used data types DO NOT include:",
        answer1: "Strings", 
        answer2: "Boolean",
        answer3: "Alert",
        answer4: "Number",
        rightAnswer: "Alert"
}, {
        question: "The condition in an if / else statement is enclosed within _____.",
        answer1: "Quotes", 
        answer2: "Curly Brackets",
        answer3: "Parentheses",
        answer4: "Square Brackets",
        rightAnswer: "Parentheses"
}, {
        question: "Arrays in JavaScript can be used to store _____.",
        answer1: "Numbers and Strings", 
        answer2: "Other Arrays",
        answer3: "Booleans",
        answer4: "All of the Above",
        rightAnswer: "All of the Above"
}, {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answer1: "Commas", 
        answer2: "Curly Brackets",
        answer3: "Quotes",
        answer4: "Parentheses",
        rightAnswer: "Quotes"
}, {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer1: "JavaScript", 
        answer2: "Terminal / Bash",
        answer3: "For Loops",
        answer4: "console.log",
        rightAnswer: "console.log"        
}];

function openingScreen() {
        messageArea.textContent = "Coding Quiz Challenge"
        openingMessage = document.createElement("p");
        openingMessage.textContent = "Try to answer the following code-related questions within the itme limit. Keep in mind that incorrect answers will penalize your score and time by ten seconds!"
        messageArea.appendChild(openingMessage);
        startButton = document.createElement("section");
        buttonArea.appendChild(startButton);
        startButton.classList.add('start-button');
        startButton.textContent = "Start";
        startButton.addEventListener("click", nextQuestion);
}

function doNothing() {
        messageArea.appendChild(document.createElement("p"));
}

function nextQuestion() {
        if (currentQuestion === 0) {
                buttonArea.removeChild(startButton);
                currentQuestion++;
                nextQuestion();
        } else {
        // First button
        messageArea.textContent = questionArray[currentQuestion -1 ].question;
        answerButton1 = document.createElement("section");
        buttonArea.appendChild(answerButton1);
        answerButton1.classList.add('answer-buttons');
        answerButton1.textContent = questionArray[currentQuestion - 1].answer1;
        
        // Second button
        answerButton2 = document.createElement("section");
        buttonArea.appendChild(answerButton2);
        answerButton2.classList.add('answer-buttons');
        answerButton2.textContent = questionArray[currentQuestion - 1].answer2;

        // Third button
        answerButton3 = document.createElement("section");
        buttonArea.appendChild(answerButton3);
        answerButton3.classList.add('answer-buttons');
        answerButton3.textContent = questionArray[currentQuestion - 1].answer3;

        // Fourth button
        answerButton4 = document.createElement("section");
        buttonArea.appendChild(answerButton4);
        answerButton4.classList.add('answer-buttons');
        answerButton4.textContent = questionArray[currentQuestion - 1].answer4;

        addClick();
        }
}

function addClick() {
        // Initiates click capabilities
        answerButton1.addEventListener("click", rightOrWrong);
        answerButton2.addEventListener("click", rightOrWrong);
        answerButton3.addEventListener("click", rightOrWrong);
        answerButton4.addEventListener("click", rightOrWrong);
}

function clearQuestion() {
        buttonArea.removeChild(answerButton1);
        buttonArea.removeChild(answerButton2);
        buttonArea.removeChild(answerButton3);
        buttonArea.removeChild(answerButton4);
}

function rightOrWrong() {
        if (this.textContent === questionArray[currentQuestion - 1].rightAnswer) {
                console.log("Correct!");
                currentQuestion++;
                clearQuestion();
                if (currentQuestion < 5) {
                        nextQuestion();
                } else {
                        messageArea.textContent = "Congrats you win!";
                }
        } else {
                console.log("Incorrect!");
        }
}

openingScreen();