# Digital Clock & Stopwatch

A responsive Digital Clock and Stopwatch built using
HTML5, CSS3, and vanilla JavaScript.

## Features

- Live digital clock in HH:MM:SS format
- Current date display
- Stopwatch with Start, Pause, and Reset controls
- Prevents multiple stopwatch intervals
- Timestamp-based stopwatch calculation
- Responsive design for desktop, tablet, and mobile
- No external libraries or frameworks

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)

## Project Structure

digital-clock-stopwatch/

├── index.html
├── style.css
├── script.js
└── README.md

## How to Run

1. Download or clone the repository.
2. Open the project folder.
3. Open index.html in a browser.

No installation or build process is required.

## Stopwatch Approach

The stopwatch stores the start timestamp using Date.now()
instead of simply increasing a counter every second.

This helps reduce timing errors caused by browser timer
throttling or delays.

The application also uses clearInterval() when the stopwatch
is paused or reset so multiple intervals are not accidentally
created.

## Interview Questions

### 1. What is the difference between setTimeout and setInterval?

setTimeout() runs a function once after a specified delay.

setInterval() repeatedly runs a function at a specified
interval until it is cleared.

### 2. Why is clearInterval() important?

clearInterval() stops an active interval and prevents
unnecessary background execution.

In this project it also prevents multiple stopwatch timers
from running at the same time.

### 3. How is stopwatch accuracy improved?

The stopwatch stores the timestamp when it starts and
calculates elapsed time using the difference between
Date.now() and the stored start timestamp.

This is more reliable than assuming every timer callback
runs exactly on schedule.

## Known Limitations

The displayed stopwatch resolution is seconds.

Browser timing and system clock behavior can still affect
exact real-time precision.

## Author

Aditya Pandey