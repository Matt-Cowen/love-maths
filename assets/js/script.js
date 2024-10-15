// Wait for the DOM to load before running Game
// Get the button elements and add eventListeners to them

document.addEventListener('DOMContentLoaded',function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }


    runGame("addition");
})

/**
 * The main game loop, called when the script is first loaded and after the user's answer has been processed.
 */
function runGame(gameType) {

    //Creates 2 random nums
    let num1 = Math.ceil(Math.random() * 25)
    let num2 = Math.ceil(Math.random() * 25)

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
};


/**
 * Checks the user answeer against first element in calculateCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey you got it right! :)");
    } else {
        alert(`Aww, you answered ${userAnswer}. The correct answer is ${calculatedAnswer[0]}.`);
    }

    runGame(calculatedAnswer[1]);
};

/**
 * Gets operands + operator straight from the DOM and returns correct answer
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById("operand1").innerText)
    let operand2 = parseInt(document.getElementById("operand2").innerText)
    let operator = document.getElementById("operator").innerText    

// Matty's experimental code
    // if (operator === "X") {
    //         let operator = "*"
    //     }
    // console.log(eval(operand1+operator+operand2));

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
 
};

function incrementScore() {

};

function incrementWrongAnswer() {

};

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
};

function displaySubtractQuestion() {

};

function displayMultiplyQuestion() {

};
