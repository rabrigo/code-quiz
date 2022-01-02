// TODO: create link to view high scores
// TODO: correct/incorrect display
// TODO: create a timer
// TODO: record initials and clear highscore button

var messageArea = document.querySelector('#message-area');
var buttonArea = document.querySelector('#button-area');
var questionText;
var answerButton1;
var answerButton2;
var answerButton3;
var answerButton4;
var currentQuestion = 1;

// This array contains all of the questions and answers as objects
// for each index.

var questionArray = [ {
        question: "Commonly used data types DO NOT include:",
        choice1: "Strings", 
        choice2: "Boolean",
        choice3: "Alert",
        choice4: "Number",
        rightAnswer: "Alert"
}, {
        question: "The condition in an if / else statement is enclosed within _____.",
        choice1: "Quotes", 
        choice2: "Curly Brackets",
        choice3: "Parentheses",
        choice4: "Square Brackets",
        rightAnswer: "Parentheses"
}, {
        question: "Arrays in JavaScript can be used to store _____.",
        choice1: "Numbers and Strings", 
        choice2: "Other Arrays",
        choice3: "Booleans",
        choice4: "All of the Above",
        rightAnswer: "All of the Above"
}, {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choice1: "Commas", 
        choice2: "Curly Brackets",
        choice3: "Quotes",
        choice4: "Parentheses",
        rightAnswer: "Quotes"
}, {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "JavaScript", 
        choice2: "Terminal / Bash",
        choice3: "For Loops",
        choice4: "console.log",
        rightAnswer: "console.log"        
}];

// addClick();
nextQuestion();

function addClick() {
        // Initiates click capabilities
        answerButton1.addEventListener("click", rightOrWrong);
        answerButton2.addEventListener("click", rightOrWrong);
        answerButton3.addEventListener("click", rightOrWrong);
        answerButton4.addEventListener("click", rightOrWrong);
}

function nextQuestion() {

        // First button
        messageArea.textContent = questionArray[currentQuestion - 1].question;
        answerButton1 = document.createElement("section");
        buttonArea.appendChild(answerButton1);
        answerButton1.classList.add('answer-buttons');
        answerButton1.textContent = questionArray[currentQuestion - 1].choice1;
        
        // Second button
        answerButton2 = document.createElement("section");
        buttonArea.appendChild(answerButton2);
        answerButton2.classList.add('answer-buttons');
        answerButton2.textContent = questionArray[currentQuestion - 1].choice2;

        // Third button
        answerButton3 = document.createElement("section");
        buttonArea.appendChild(answerButton3);
        answerButton3.classList.add('answer-buttons');
        answerButton3.textContent = questionArray[currentQuestion - 1].choice3;

        // Fourth button
        answerButton4 = document.createElement("section");
        buttonArea.appendChild(answerButton4);
        answerButton4.classList.add('answer-buttons');
        answerButton4.textContent = questionArray[currentQuestion - 1].choice4;

        addClick();
}

function clearQuestion() {
        messageArea.textContent = "";
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




