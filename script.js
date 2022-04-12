const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const CORRECT = [
    "Congrats! You're smarter than most people I know",
    "Nice!",
    "Congratulations on being the smartest person in the room!",
    "Wow! I'm impressed",
    "Sheeeeeeeeeeeeeeeesh",
    "Much wow. Congrats!"
]
const INCORRECT = [
    "That's false dumbass",
    "Nope. Try again",
    "Lmao that's not it",
    "Try again",
    "Try again but this time use a calculator"
]

function randomEquation() {
    let randomNumberOne = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberTwo = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberThree = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberFour = Math.floor(Math.random() * (NUMBERS.length));

    let randomTrue = Math.floor(Math.random() * (CORRECT.length));
    let randomFalse = Math.floor(Math.random() * (INCORRECT.length));

    

    let equation = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]} + ${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`;
    //document.getElementById("displayEquation").innerText = equation; 
    let numberOne = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]}`;
    let numberTwo = `${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`;

    let intOne = parseInt(numberOne);
    let intTwo = parseInt(numberTwo);

    let equationAnswer = intOne + intTwo;

    let showEquation = prompt(`What's ${equation} ?`);
    let result;

    if (showEquation == equationAnswer) {
        result = CORRECT[randomTrue];
    } else if (showEquation == "") {
        result = "Jeeez.. At least type in something";
    } else {
        result = INCORRECT[randomFalse];
    }


    document.getElementById("result").innerText = result;
}
