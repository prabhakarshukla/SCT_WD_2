const display = document.querySelector(".display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const lapBtn = document.getElementById("lap");                        
const laps = document.getElementById("laps");
let timer = null;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let isRunning = false;

function updateDisplay() {

    const formattedMinutes = String(minutes).padStart(2, "0");

    const formattedSeconds = String(seconds).padStart(2, "0");

    const formattedMilliseconds = String(milliseconds).padStart(2, "0");

    display.textContent =
        `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;

}

startBtn.addEventListener("click", function () {

    if (isRunning) {
        return;
    }

    isRunning = true;

    timer = setInterval(function () {

        milliseconds++;

        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        updateDisplay();

    }, 10);

});

pauseBtn.addEventListener("click", function () {

    clearInterval(timer);

    isRunning = false;

});

resetBtn.addEventListener("click", function () {
    clearInterval(timer);
    timer = null;
    isRunning = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();

});

lapBtn.addEventListener("click", function () {
    if (!isRunning) {
        return;
    }
    const lapItem = document.createElement("li");
    lapItem.textContent =
        `Lap ${lapCount} - ${display.textContent}`;

    laps.appendChild(lapItem);
    lapCount++;
});