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


  // Registration Form Submission
document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");
  
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      const fullName = document.getElementById("fullname").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirm-password").value;
  
      // Simulate registration validation
      if (fullName && email && password && confirmPassword) {
        if (password === confirmPassword) {
          alert("Registration successful! Redirecting to the login page...");
          window.location.href = "login.html"; // Redirect to login page
        } else {
          alert("Passwords do not match.");
        }
      } else {
        alert("Please fill in all fields.");
      }
    });
  });
  // Buy Ticket Page Logic
document.addEventListener("DOMContentLoaded", function () {
    const numberInputsContainer = document.getElementById("number-inputs");
    const generateNumbersButton = document.getElementById("generate-numbers");
    const ticketForm = document.getElementById("ticket-form");
    const confirmationSection = document.getElementById("confirmation");
    const ticketNumbersElement = document.getElementById("ticket-numbers");
  
    // Generate 6 number inputs
    for (let i = 0; i < 6; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.min = 1;
      input.max = 49;
      input.required = true;
      numberInputsContainer.appendChild(input);
    }
  
    // Generate random numbers
    generateNumbersButton.addEventListener("click", function () {
      const inputs = numberInputsContainer.querySelectorAll("input");
      inputs.forEach(input => {
        input.value = Math.floor(Math.random() * 49) + 1;
      });
    });
  
    // Handle form submission
    ticketForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission
  
      const inputs = numberInputsContainer.querySelectorAll("input");
      const numbers = Array.from(inputs).map(input => input.value);
  
      // Display confirmation
      ticketNumbersElement.textContent = numbers.join(", ");
      confirmationSection.style.display = "block";
    });
  });