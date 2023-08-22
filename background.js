chrome.alarms.onAlarm.addListener(
  () => {
      chrome.notifications.create(
          {
              type: "basic",
              iconUrl: "stretch.png",
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
      if (request.time){
        createAlarm(request.time);
      }

      sendResponse(() => {
        console.log('Reached...')
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

chrome.runtime.onMessage.addListener(
  function (req, sender, sendRes){
    if (req.stop){
      chrome.alarms.clear("break_time");
    }
  }
)