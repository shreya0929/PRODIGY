window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;
    let Interval;
    let lapCounter = 1;

    const appendMinutes = document.querySelector('#minutes');
    const appendTens = document.querySelector('#tens');
    const appendSeconds = document.querySelector('#seconds');
    const startBtn = document.querySelector('#start');
    const stopBtn = document.querySelector('#stop');
    const lapBtn = document.querySelector('#lap');
    const resetBtn = document.querySelector('#reset');
    const lapsContainer = document.querySelector('#laps');

    const startTimer = () => {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = '0' + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = '0' + seconds;
            tens = 0;
            appendTens.innerHTML = '0' + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = '0' + minutes;
            seconds = 0;
            appendSeconds.innerHTML = '0' + 0;
        }
    };

    startBtn.onclick = () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    stopBtn.onclick = () => {
        clearInterval(Interval);
    };

    lapBtn.onclick = () => {
        const lapItem = document.createElement('div');
        lapItem.classList.add('lap-item');
        lapItem.innerHTML = `Lap ${lapCounter}: ${appendMinutes.innerHTML}:${appendSeconds.innerHTML}:${appendTens.innerHTML}`;
        lapsContainer.appendChild(lapItem);
        lapCounter++;
    };

    resetBtn.onclick = () => {
        clearInterval(Interval);
        tens = 0;
        seconds = 0;
        minutes = 0;
        lapCounter = 1;
        appendTens.innerHTML = '00';
        appendSeconds.innerHTML = '00';
        appendMinutes.innerHTML = '00';
        lapsContainer.innerHTML = '';
    };
};