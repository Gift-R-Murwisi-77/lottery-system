// Simulate fetching winning numbers from a server
document.addEventListener("DOMContentLoaded", function () {
    const winningNumbersElement = document.getElementById("winning-numbers");
  
    // Simulate an API call to get winning numbers
    setTimeout(() => {
      const winningNumbers = [7, 14, 21, 28, 35, 42]; // Example numbers
      winningNumbersElement.textContent = winningNumbers.join(", ");
    }, 1000);
  });
  
  // Login Form Submission
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
  
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Simulate login validation
      if (email && password) {
        alert("Login successful! Redirecting to the homepage...");
        window.location.href = "index.html"; // Redirect to homepage
      } else {
        alert("Please fill in all fields.");
      }
    });
  });