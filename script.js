// Login script
document.getElementById("login-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful! Redirecting to the homepage...");
        window.location.href = "index.html";
      } else {
        alert(data.error || "Login failed");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  });

  //Register form

  document.getElementById("register-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Registration successful! Redirecting to the login page...");
        window.location.href = "login.html";
      } else {
        alert(data.error || "Registration failed");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  });


  //ticket form

    // Generate 6 number inputs
    const numberInputsContainer = document.getElementById("number-inputs");
    for (let i = 0; i < 6; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.min = 1;
      input.max = 49;
      input.required = true;
      numberInputsContainer.appendChild(input);
    }
  
    // Generate random numbers
    document.getElementById("generate-numbers").addEventListener("click", function () {
      const inputs = numberInputsContainer.querySelectorAll("input");
      inputs.forEach(input => {
        input.value = Math.floor(Math.random() * 49) + 1;
      });
    });
  
    // Handle form submission
    document.getElementById("ticket-form").addEventListener("submit", async function (event) {
      event.preventDefault();
  
      const inputs = numberInputsContainer.querySelectorAll("input");
      const numbers = Array.from(inputs).map(input => parseInt(input.value));
  
      try {
        const response = await fetch("http://localhost:5000/api/ticket/buy", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId: "USER_ID_HERE", numbers }), // Replace USER_ID_HERE with the actual user ID
        });

        const data = await response.json();

        if (response.ok) {
          document.getElementById("ticket-numbers").textContent = numbers.join(", ");
          document.getElementById("confirmation").style.display = "block";
        } else {
          alert(data.error || "Failed to purchase ticket");
        }
      } catch (error) {
        alert("An error occurred. Please try again.");
      }
    });


    // Results Page Logic

     // Fetch latest winning numbers
  async function fetchLatestResults() {
    try {
      const response = await fetch("http://localhost:5000/api/result/latest");
      const data = await response.json();

      if (response.ok) {
        document.getElementById("latest-numbers").textContent = data.numbers.join(", ");
      } else {
        document.getElementById("latest-numbers").textContent = "Failed to load results";
      }
    } catch (error) {
      document.getElementById("latest-numbers").textContent = "An error occurred";
    }
  }

  // Fetch past results
  async function fetchPastResults() {
    try {
      const response = await fetch("http://localhost:5000/api/result");
      const data = await response.json();

      if (response.ok) {
        const tbody = document.querySelector("#past-results tbody");
        tbody.innerHTML = ""; // Clear existing rows

        data.forEach(result => {
          const row = document.createElement("tr");
          const dateCell = document.createElement("td");
          const numbersCell = document.createElement("td");

          dateCell.textContent = new Date(result.date).toLocaleDateString();
          numbersCell.textContent = result.numbers.join(", ");

          row.appendChild(dateCell);
          row.appendChild(numbersCell);
          tbody.appendChild(row);
        });
      } else {
        alert("Failed to load past results");
      }
    } catch (error) {
      alert("An error occurred");
    }
  }

  // Load data when the page loads
  document.addEventListener("DOMContentLoaded", function () {
    fetchLatestResults();
    fetchPastResults();
  });



































/*
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
  // Results Page Logic
document.addEventListener("DOMContentLoaded", function () {
    const latestNumbersElement = document.getElementById("latest-numbers");
    const pastResultsTableBody = document.querySelector("#past-results tbody");
  
    // Simulate fetching latest winning numbers
    setTimeout(() => {
      const latestNumbers = [7, 14, 21, 28, 35, 42]; // Example numbers
      latestNumbersElement.textContent = latestNumbers.join(", ");
    }, 1000);
  
    // Simulate fetching past results
    setTimeout(() => {
      const pastResults = [
        { date: "2023-10-01", numbers: [3, 12, 19, 27, 34, 41] },
        { date: "2023-09-25", numbers: [5, 11, 18, 22, 33, 40] },
        { date: "2023-09-18", numbers: [2, 9, 17, 25, 32, 39] },
      ];
  
      pastResults.forEach(result => {
        const row = document.createElement("tr");
        const dateCell = document.createElement("td");
        const numbersCell = document.createElement("td");
  
        dateCell.textContent = result.date;
        numbersCell.textContent = result.numbers.join(", ");
  
        row.appendChild(dateCell);
        row.appendChild(numbersCell);
        pastResultsTableBody.appendChild(row);
      });
    }, 1500);
  });
*/
