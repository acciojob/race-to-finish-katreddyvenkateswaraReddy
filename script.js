 window.promises = [
    new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), getRandomTime())),
    new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), getRandomTime())),
    new Promise(resolve => setTimeout(() => resolve('Promise 3 resolved'), getRandomTime())),
    new Promise(resolve => setTimeout(() => resolve('Promise 4 resolved'), getRandomTime())),
    new Promise(resolve => setTimeout(() => resolve('Promise 5 resolved'), getRandomTime())),
  ];

  Promise.any(window.promises)
    .then(result => {
      document.getElementById('output').innerText = result;
    })
    .catch(error => console.log(error));

  function getRandomTime() {
    return Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
  }