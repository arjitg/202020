let startButton = document.getElementById("btnStart")
if (startButton){
  startButton.addEventListener("click", () => {
    console.log('calling bg with value...');
    chrome.runtime.sendMessage({ time: 20 }, function (response) {
        console.log(response);
    });
  });
}

let stopButton = document.getElementById("btnStop")
if (stopButton){
  stopButton.addEventListener("click", () => {
      chrome.runtime.sendMessage({ stop: true }, function (response) {
          console.log(response);
      });
  });
}