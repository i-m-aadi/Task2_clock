// ==========================================
// DIGITAL CLOCK
// ==========================================

const clockElement =
  document.getElementById("clock");

const dateElement =
  document.getElementById("date");


// Add leading zero to single digit numbers
function pad(number) {
  return String(number).padStart(2, "0");
}


// Update the digital clock
function updateClock() {

  const now = new Date();


  const hours =
    pad(now.getHours());

  const minutes =
    pad(now.getMinutes());

  const seconds =
    pad(now.getSeconds());


  // Display time
  clockElement.textContent =
    `${hours}:${minutes}:${seconds}`;


  // Display date
  dateElement.textContent =
    now.toLocaleDateString(
      undefined,
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      }
    );
}


// Run immediately
updateClock();


// Update clock every second
setInterval(
  updateClock,
  1000
);



// ==========================================
// STOPWATCH
// ==========================================

const stopwatchElement =
  document.getElementById("stopwatch");

const stopwatchStatus =
  document.getElementById(
    "stopwatchStatus"
  );


const startBtn =
  document.getElementById("startBtn");

const pauseBtn =
  document.getElementById("pauseBtn");

const resetBtn =
  document.getElementById("resetBtn");


// Stopwatch state

let startTime = null;

let elapsedTime = 0;

let stopwatchInterval = null;



// Format milliseconds into HH:MM:SS
function formatStopwatchTime(
  milliseconds
) {

  const totalSeconds =
    Math.floor(
      milliseconds / 1000
    );


  const hours =
    Math.floor(
      totalSeconds / 3600
    );


  const minutes =
    Math.floor(
      (totalSeconds % 3600) / 60
    );


  const seconds =
    totalSeconds % 60;


  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}



// Update stopwatch display
function updateStopwatch() {

  // Nothing to update if stopwatch
  // hasn't been started
  if (startTime === null) {
    return;
  }


  const currentElapsedTime =
    elapsedTime +
    (Date.now() - startTime);


  stopwatchElement.textContent =
    formatStopwatchTime(
      currentElapsedTime
    );
}



// Start stopwatch
function startStopwatch() {

  // Prevent multiple intervals
  // if Start is clicked repeatedly
  if (stopwatchInterval !== null) {
    return;
  }


  startTime = Date.now();


  stopwatchStatus.textContent =
    "RUNNING";


  stopwatchInterval =
    setInterval(
      updateStopwatch,
      250
    );
}



// Pause stopwatch
function pauseStopwatch() {

  // Nothing to pause
  if (stopwatchInterval === null) {
    return;
  }


  // Save the time already elapsed
  elapsedTime +=
    Date.now() - startTime;


  // Stop interval
  clearInterval(
    stopwatchInterval
  );


  stopwatchInterval = null;

  startTime = null;


  // Update final display
  stopwatchElement.textContent =
    formatStopwatchTime(
      elapsedTime
    );


  stopwatchStatus.textContent =
    "PAUSED";
}



// Reset stopwatch
function resetStopwatch() {

  // Stop timer if running
  clearInterval(
    stopwatchInterval
  );


  stopwatchInterval = null;

  startTime = null;

  elapsedTime = 0;


  // Reset display
  stopwatchElement.textContent =
    "00:00:00";


  stopwatchStatus.textContent =
    "PAUSED";
}



// ==========================================
// BUTTON EVENTS
// ==========================================

startBtn.addEventListener(
  "click",
  startStopwatch
);


pauseBtn.addEventListener(
  "click",
  pauseStopwatch
);


resetBtn.addEventListener(
  "click",
  resetStopwatch
);