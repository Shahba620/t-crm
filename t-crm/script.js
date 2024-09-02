let correctAnswer;
                                
function generateCaptcha() {
    // Generate two random numbers
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);

    // Display the question
    document.getElementById('captchaQuestion').innerText = `${num1} + ${num2} = ?`;

    // Store the correct answer
    correctAnswer = num1 + num2;
}

function validateCaptcha() {
    const userAnswer = parseInt(document.getElementById('captchaAnswer').value);

    if (userAnswer === correctAnswer) {
        document.getElementById('message').innerText = "CAPTCHA passed!";
        alert("Form submitted successfully!");
        return true;  // This would allow form submission
    } else {
        document.getElementById('message').innerText = "Incorrect, please try again.";
        alert("Incorrect CAPTCHA. Please try again");
        generateCaptcha();  // Refresh CAPTCHA
        return false;  // Prevent form submission
    }
}

// Generate a CAPTCHA when the page loads
window.onload = generateCaptcha;


