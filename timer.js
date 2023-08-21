// let startTime;

// function startTimer() {
//   startTime = new Date();
// }

// function stopTimer() {
//   const endTime = new Date();
//   const timeSpent = endTime - startTime;
//   console.log(`User spent ${timeSpent} milliseconds on this page`);
// }

// function minsToSecs(mins){
//   return mins*60;
// }
// startTimer();

// Call stopTimer after 5 seconds (5000 milliseconds)
// setTimeout(stopTimer, minsToSecs(1));
// console.log("File is running")
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//     const currentTab = tabs[0];
//     console.log(currentTab);
// });

// Call this when the pop-up is shown
chrome.runtime.sendMessage({ cmd: 'GET_TIME' }, response => {
  if (response.time) {
    const time = new Date(response.time);
    startTimer(time)
  }
});

function startTimer(time) {
  if (time.getTime() > Date.now()) {
    setInterval(() => {
      // display the remaining time
    }, 1000)

  }
}

function startTime(time) {
  chrome.runtime.sendMessage({ cmd: 'START_TIMER', when: time });
  startTimer(time);
}

// const para = document.getElementById("#timeArea");
// console.log('para is', para)
const curTab = chrome.tabs.query({
  active: true,
  currentWindow: true
})

console.log(curTab);