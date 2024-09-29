document.getElementById("submitButton").addEventListener("click", function() {
    const userInput = document.getElementById("userInput").value;
    const responseMessage = document.getElementById("responseMessage");
    
    if (userInput.trim() === "") {
        responseMessage.innerText = "Please enter your thoughts!";
    } else {
        responseMessage.innerText = "Thank you for sharing your thoughts: " + userInput;
        document.getElementById("userInput").value = ""; // Clear the input
    }
});
const navLinks = document.querySelectorAll('.navbar a');

// Add click event listeners to each link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove 'active' class from all links
        navLinks.forEach(link => link.parentElement.classList.remove('active'));
        // Add 'active' class to the clicked link's parent
        this.parentElement.classList.add('active');
    });
});