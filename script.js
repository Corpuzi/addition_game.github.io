const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const CORRECT = [
    "Congrats! You're smarter than most people I know",
    "Nice!",
    "Congratulations on being the smartest person in the room!",
    "Wow! I'm impressed",
    "Sheeeeeeeeeeeeeeeesh",
    "Much wow. Congrats!",
    "Correct!"
]
const INCORRECT = [
    "That's false dumbass",
    "Nope. Try again",
    "Lmao that's not it",
    "Try again",
    "Try again but this time use a calculator",
    "Wrong!"
]


function randomAddition() {

    //Generate random numbers for our addition equation
    let randomNumberOne = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberTwo = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberThree = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberFour = Math.floor(Math.random() * (NUMBERS.length));
    
    //Generate random numbers for success and fail messages
    let randomTrue = Math.floor(Math.random() * (CORRECT.length));
    let randomFalse = Math.floor(Math.random() * (INCORRECT.length));

    //Generate & display a random addition equation as a string
    let equation = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]} + ${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`; 
    
    //Store the first random generated number of the equation inside a variable
    let numberOne = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]}`;
    
    //Store the second random generated number of the equation inside a variable
    let numberTwo = `${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`;

    //Convert the random generated numbers from strings to integers
    let intOne = parseInt(numberOne);
    let intTwo = parseInt(numberTwo);

    //Create a variable that adds the number value of both random generated numbers
    let equationAnswer = intOne + intTwo;

    //Prompt the user to answer the equation
    let addition = prompt(`What's ${equation} ?`);
    
    //Create a variable to store the success or fail message
    let result;

    //Verify if the input equals the correct answer and return the final result
    if (addition == equationAnswer) {
        result = CORRECT[randomTrue];
    } else if (addition == "") {
        result = "Error: Please type in something next time";
    } else {
        result = INCORRECT[randomFalse];
    }
    
    //Display the result in index.html
    document.getElementById("result").innerText = result;
}

function randomSubtraction() {
    
    //Generate random numbers for our addition equation
    let randomNumberOne = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberTwo = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberThree = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberFour = Math.floor(Math.random() * (NUMBERS.length));
    
    //Generate random numbers for success and fail messages
    let randomTrue = Math.floor(Math.random() * (CORRECT.length));
    let randomFalse = Math.floor(Math.random() * (INCORRECT.length));

    //Generate & display a random addition equation as a string
    let equation = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]} - ${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`; 
    
    //Store the first random generated number of the equation inside a variable
    let numberOne = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]}`;
    
    //Store the second random generated number of the equation inside a variable
    let numberTwo = `${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`;

    //Convert the random generated numbers from strings to integers
    let intOne = parseInt(numberOne);
    let intTwo = parseInt(numberTwo);

    //Create a variable that subtracts the number value of both random generated numbers
    let equationAnswer = intOne - intTwo;

    //Prompt the user to answer the equation
    let addition = prompt(`What's ${equation} ?`);
    
    //Create a variable to store the success or fail message
    let result;

    //Verify if the input equals the correct answer and return the final result
    if (addition == equationAnswer) {
        result = CORRECT[randomTrue];
    } else if (addition == "") {
        result = "Error: Please type in something next time";
    } else {
        result = INCORRECT[randomFalse];
    }
    
    //Display the result in index.html
    document.getElementById("result").innerText = result;
}

function randomAddition() {

    //Generate random numbers for our addition equation
    let randomNumberOne = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberTwo = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberThree = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberFour = Math.floor(Math.random() * (NUMBERS.length));
    
    //Generate random numbers for success and fail messages
    let randomTrue = Math.floor(Math.random() * (CORRECT.length));
    let randomFalse = Math.floor(Math.random() * (INCORRECT.length));

    //Generate & display a random addition equation as a string
    let equation = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]} + ${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`; 
    
    //Store the first random generated number of the equation inside a variable
    let numberOne = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]}`;
    
    //Store the second random generated number of the equation inside a variable
    let numberTwo = `${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`;

    //Convert the random generated numbers from strings to integers
    let intOne = parseInt(numberOne);
    let intTwo = parseInt(numberTwo);

    //Create a variable that adds the number value of both random generated numbers
    let equationAnswer = intOne + intTwo;

    //Prompt the user to answer the equation
    let addition = prompt(`What's ${equation} ?`);
    
    //Create a variable to store the success or fail message
    let result;

    //Verify if the input equals the correct answer and return the final result
    if (addition == equationAnswer) {
        result = CORRECT[randomTrue];
    } else if (addition == "") {
        result = "Error: Please type in something next time";
    } else {
        result = INCORRECT[randomFalse];
    }
    
    //Display the result in index.html
    document.getElementById("result").innerText = result;
}

function randomMultiplication() {
    
    //Generate random numbers for our addition equation
    let randomNumberOne = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberTwo = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberThree = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberFour = Math.floor(Math.random() * (NUMBERS.length));
    
    //Generate random numbers for success and fail messages
    let randomTrue = Math.floor(Math.random() * (CORRECT.length));
    let randomFalse = Math.floor(Math.random() * (INCORRECT.length));

    //Generate & display a random addition equation as a string
    let equation = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]} * ${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`; 
    
    //Store the first random generated number of the equation inside a variable
    let numberOne = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]}`;
    
    //Store the second random generated number of the equation inside a variable
    let numberTwo = `${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`;

    //Convert the random generated numbers from strings to integers
    let intOne = parseInt(numberOne);
    let intTwo = parseInt(numberTwo);

    //Create a variable that subtracts the number value of both random generated numbers
    let equationAnswer = intOne * intTwo;

    //Prompt the user to answer the equation
    let addition = prompt(`What's ${equation} ?`);
    
    //Create a variable to store the success or fail message
    let result;

    //Verify if the input equals the correct answer and return the final result
    if (addition == equationAnswer) {
        result = CORRECT[randomTrue];
    } else if (addition == "") {
        result = "Error: Please type in something next time";
    } else {
        result = INCORRECT[randomFalse];
    }
    
    //Display the result in index.html
    document.getElementById("result").innerText = result;
}

function randomAddition() {

    //Generate random numbers for our addition equation
    let randomNumberOne = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberTwo = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberThree = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberFour = Math.floor(Math.random() * (NUMBERS.length));
    
    //Generate random numbers for success and fail messages
    let randomTrue = Math.floor(Math.random() * (CORRECT.length));
    let randomFalse = Math.floor(Math.random() * (INCORRECT.length));

    //Generate & display a random addition equation as a string
    let equation = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]} + ${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`; 
    
    //Store the first random generated number of the equation inside a variable
    let numberOne = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]}`;
    
    //Store the second random generated number of the equation inside a variable
    let numberTwo = `${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`;

    //Convert the random generated numbers from strings to integers
    let intOne = parseInt(numberOne);
    let intTwo = parseInt(numberTwo);

    //Create a variable that adds the number value of both random generated numbers
    let equationAnswer = intOne + intTwo;

    //Prompt the user to answer the equation
    let addition = prompt(`What's ${equation} ?`);
    
    //Create a variable to store the success or fail message
    let result;

    //Verify if the input equals the correct answer and return the final result
    if (addition == equationAnswer) {
        result = CORRECT[randomTrue];
    } else if (addition == "") {
        result = "Error: Please type in something next time";
    } else {
        result = INCORRECT[randomFalse];
    }
    
    //Display the result in index.html
    document.getElementById("result").innerText = result;
}

function randomDivision() {
    
    //Generate random numbers for our addition equation
    let randomNumberOne = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberTwo = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberThree = Math.floor(Math.random() * (NUMBERS.length));
    let randomNumberFour = Math.floor(Math.random() * (NUMBERS.length));
    
    //Generate random numbers for success and fail messages
    let randomTrue = Math.floor(Math.random() * (CORRECT.length));
    let randomFalse = Math.floor(Math.random() * (INCORRECT.length));

    //Generate & display a random addition equation as a string
    let equation = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]} / ${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`; 
    
    //Store the first random generated number of the equation inside a variable
    let numberOne = `${NUMBERS[randomNumberOne]}${NUMBERS[randomNumberTwo]}`;
    
    //Store the second random generated number of the equation inside a variable
    let numberTwo = `${NUMBERS[randomNumberThree]}${NUMBERS[randomNumberFour]}`;

    //Convert the random generated numbers from strings to integers
    let intOne = parseInt(numberOne);
    let intTwo = parseInt(numberTwo);

    //Create a variable that subtracts the number value of both random generated numbers
    let equationAnswer = intOne / intTwo;

    //Prompt the user to answer the equation
    let addition = prompt(`What's ${equation} ?`);
    
    //Create a variable to store the success or fail message
    let result;

    //Verify if the input equals the correct answer and return the final result
    if (addition == equationAnswer) {
        result = CORRECT[randomTrue];
    } else if (addition == "") {
        result = "Error: Please type in something next time";
    } else {
        result = INCORRECT[randomFalse];
    }
    
    //Display the result in index.html
    document.getElementById("result").innerText = result;
}
