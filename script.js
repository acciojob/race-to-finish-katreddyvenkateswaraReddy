// script.js
const outputDiv = document.getElementById('output');

// Function to generate a random time between 1 and 5 seconds
function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000; // Between 1000 and 5000 milliseconds
}

// Array of promises with random resolving times
const promises = Array.from({ length: 5 }, (_, index) =>
  new Promise(resolve => {
    const randomTime = getRandomTime();
    setTimeout(() => {
      resolve(`Promise ${index + 1} resolved in ${randomTime} milliseconds`);
    }, randomTime);
  })
);

// Use Promise.any to wait for the first resolved promise
Promise.any(promises)
  .then(result => {
    outputDiv.textContent = result;
  })
  .catch(error => {
    outputDiv.textContent = `All promises failed: ${error}`;
  });