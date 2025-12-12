class Stopwatch {
    constructor(display, startBtn, stopBtn, resetBtn) {
        this.display = display;
        this.startBtn = startBtn;
        this.stopBtn = stopBtn;
        this.resetBtn = resetBtn;

        this.startTime = 0;
        this.elapsedTime = 0;
        this.timerInterval = null;

        // Initialize button states
        this.updateButtonStates(false);

        // Bind events
        this.startBtn.addEventListener("click", () => this.start());
        this.stopBtn.addEventListener("click", () => this.stop());
        this.resetBtn.addEventListener("click", () => this.reset());
    }

    timeToString(time) {
        const ms = time % 1000;
        const totalSec = Math.floor(time / 1000);
        const sec = totalSec % 60;
        const totalMin = Math.floor(totalSec / 60);
        const min = totalMin % 60;
        const hr = Math.floor(totalMin / 60);

        return `${hr.toString().padStart(2,'0')}:${min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}.${ms.toString().padStart(3,'0')}`;
    }

    print(timeString) {
        this.display.textContent = timeString;
    }

    updateButtonStates(running) {
        if (running) {
            this.startBtn.disabled = true;
            this.startBtn.classList.add("faded");
            this.stopBtn.disabled = false;
            this.stopBtn.classList.remove("faded");
            this.resetBtn.disabled = false;
            this.resetBtn.classList.remove("faded");
        } else {
            this.startBtn.disabled = false;
            this.startBtn.classList.remove("faded");
            this.stopBtn.disabled = true;
            this.stopBtn.classList.add("faded");
            this.resetBtn.disabled = false;
            this.resetBtn.classList.remove("faded");
        }
    }

    start() {
        this.updateButtonStates(true);
        this.startTime = Date.now() - this.elapsedTime;
        this.timerInterval = setInterval(() => {
            this.elapsedTime = Date.now() - this.startTime;
            this.print(this.timeToString(this.elapsedTime));
        }, 10);
    }

    stop() {
        clearInterval(this.timerInterval);
        this.updateButtonStates(false);
    }

    reset() {
        clearInterval(this.timerInterval);
        this.elapsedTime = 0;
        this.print("00:00:00.000");
        this.updateButtonStates(false);
    }
}

// Initialize stopwatch
const display = document.getElementById("time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

const stopwatch = new Stopwatch(display, startBtn, stopBtn, resetBtn);
