function trackDateTime() {
    const currentDate = new Date();
    console.log(`Current Date and Time: ${currentDate}`);
}

function showAlert() {
    alert('This is an alert!');
}

function useMathMethod() {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Random Number: ${randomNumber}`);
}

function delayedCommand() {
    console.log('This command is delayed.');
}

function convertNumberToText() {
    const number = 42;
    const text = number.toString();
    console.log(`Number: ${number}, Text: ${text}`);
}

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

// Call the functions after the page has loaded
window.onload = function () {
    trackDateTime();
    showAlert();
    useMathMethod();
    setTimeout(delayedCommand, 2000); // Delayed command after 2 seconds
    convertNumberToText();
    countdown(5); // Countdown for 5 seconds

    // Update the time every second
    setInterval(function() {
        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const seconds = currentTime.getSeconds().toString().padStart(2, '0');
        document.getElementById('current-time').textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
};

