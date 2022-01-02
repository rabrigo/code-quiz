var mainDisplay = document.querySelector('#main-message');
mainDisplay.textContent = "Welcome my friends!";

// TODO: create link to view high scores
// TODO: correct/incorrect display
// TODO: create a timer
// TODO: record initials and clear highscore button

createMultipleChoice();

function createMultipleChoice() {
        // First choice button
        var choiceButton1 = document.createElement("section");
        document.body.appendChild(choiceButton1);
        choiceButton1.classList.add('multiple-choice-buttons');
        choiceButton1.textContent = "choice 1";
        
        // Second choice button
        var choiceButton2 = document.createElement("section");
        document.body.appendChild(choiceButton2);
        choiceButton2.classList.add('multiple-choice-buttons');
        choiceButton2.textContent = "choice 2";
}
