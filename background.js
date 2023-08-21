let timerID;
let timerTime;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.cmd === 'START_TIMER') {
    timerTime = new Date(request.when);
    timerID = setTimeout(() => {
       console.log('Time up...');
    }, timerTime.getTime() - Date.now());
  } else if (request.cmd === 'GET_TIME') {
    sendResponse({ time: timerTime });
  }
});

function showAlert() {
  console.log("test!");
}

showAlert();
// chrome.scripting.executeScript({
//   function: showAlert
// });

chrome.alarms.onAlarm.addListener(
  () => {
      chrome.notifications.create(
          {
              type: "basic",
              iconUrl: "alarm.jpg",
              title: "Stretch time!",
              message: "You've worked hard. Time to relax!",
              silent: false
          },
          () => { }
      )
  },
)
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
      // console.log(request);
      if (request.time)
          createAlarm(request.time);

      sendResponse(() => {
          return false
      });
  }
);

function createAlarm(time) {
  chrome.alarms.create(
      "break_time",
      {
          delayInMinutes: 0.5,
          periodInMinutes: time
      }
  );
}