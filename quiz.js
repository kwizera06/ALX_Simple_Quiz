function checkAnswer() {
    // Identify the correct answer
    var correctAnswer = "4"; // This is the correct answer to the quiz question.

    // Retrieve the user's answer
    var userAnswer = document.querySelector('input[name="quiz"]:checked').value; // Select the checked radio button.

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done."; // Update feedback for correct answer.
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!"; // Update feedback for incorrect answer.
    }
}

// Add an event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer); // Call checkAnswer on button click.
