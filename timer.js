let startTime;

function startTimer() {
  startTime = new Date();
}

function stopTimer() {
  const endTime = new Date();
  const timeSpent = endTime - startTime;
  console.log(`User spent ${timeSpent} milliseconds on this page`);
}

function minsToSecs(mins){
  return mins*60;
}
// startTimer();

// Call stopTimer after 5 seconds (5000 milliseconds)
// setTimeout(stopTimer, minsToSecs(1));
console.log("File is running")
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const currentTab = tabs[0];
    console.log(currentTab);
});