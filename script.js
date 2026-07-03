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