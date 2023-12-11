// Function to keep track of the current day and time
function trackDateTime() {
    const currentDate = new Date();
    console.log(`Current Date and Time: ${currentDate}`);
}

// Function to send an alert using JavaScript
function showAlert() {
    alert('This is an alert!');
}

// Function to use a Math method
function useMathMethod() {
    const randomNumber = Math.random();
    console.log(`Random Number: ${randomNumber}`);
}

// Function to delay one command or run a command at a specified interval
function delayedCommand() {
    console.log('This command is delayed.');
}

// Function to convert between a number and a text
function convertNumberToText() {
    const number = 42;
    const text = number.toString();
    console.log(`Number: ${number}, Text: ${text}`);
}

// Function for a simple countdown
function countdown(seconds) {
    let currentSeconds = seconds;

    const intervalId = setInterval(() => {
        console.log(`${currentSeconds} seconds remaining`);

        if (currentSeconds === 0) {
            console.log('Countdown complete!');
            clearInterval(intervalId);
        } else {
            currentSeconds--;
        }
    }, 1000);
}

// Call the functions
trackDateTime();
showAlert();
useMathMethod();
setTimeout(delayedCommand, 2000); // Delayed command after 2 seconds
convertNumberToText();
countdown(5); // Countdown for 5 seconds
