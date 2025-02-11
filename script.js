// Simulate fetching winning numbers from a server
document.addEventListener("DOMContentLoaded", function () {
    const winningNumbersElement = document.getElementById("winning-numbers");
  
    // Simulate an API call to get winning numbers
    setTimeout(() => {
      const winningNumbers = [7, 14, 21, 28, 35, 42]; // Example numbers
      winningNumbersElement.textContent = winningNumbers.join(", ");
    }, 1000);
  });