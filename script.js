let quotes = [
    "Success is the sum of small efforts repeated daily.",
    "Believe in yourself.",
    "Good things take time",
    "Every expert was once a beginner.",
    "Dream big and dare to fail.",
    "Your future is created by what you do today.",
    "Stay focused and never give up.",
    "Learning never exhausts the mind."
];

function showQuote() {

    let randomIndex =
        Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerHTML =
        quotes[randomIndex];
}
