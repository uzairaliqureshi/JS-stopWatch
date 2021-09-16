const img1 = document.getElementById("img1");
const pause = document.getElementById("pause");
const play = document.getElementById("play");

const hidePause_Play_img = () => {
    play.classList.toggle('hideBtn');
    pause.classList.toggle('hideBtn');
    img1.classList.toggle('hideImg');
};

const time1 = (time) => {
    document.getElementById("time").innerHTML = time;
};

const timeCalculation = (time) => {
    const hoursInPoint = time / 3600000;
    const hour = Math.floor(hoursInPoint);

    const minInPoint = (hoursInPoint - hour) * 60;
    const minutes = Math.floor(minInPoint);


    const secInPoint = (minInPoint - minutes) * 60;
    const seconds = Math.floor(secInPoint);


    const msInPoint = (secInPoint - seconds) * 100;
    const ms = Math.floor(msInPoint);

    const minPlus0 = minutes.toString().padStart(2, '0');
    const secPlus0 = seconds.toString().padStart(2, '0');
    const msPlus0 = ms.toString().padStart(2, '0');

    return `${minPlus0}:${secPlus0}:${msPlus0}`;
};

play.addEventListener("click", () => {
    timeSince1970 = Date.now() - timeAfterStart;
    setInterVal = setInterval(() => {
        timeAfterStart = Date.now() - timeSince1970;
        const time = timeCalculation(timeAfterStart);
        time1(time);
    }, 10);
    hidePause_Play_img();
});

pause.addEventListener("click", () => {
    clearInterval(setInterVal);
    hidePause_Play_img();
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(setInterVal);
    time1("00:00:00");
    timeAfterStart = 0;
    img1.classList.add('hideImg');
    pause.classList.add('hideBtn');
    play.classList.remove('hideBtn');
});

let timeSince1970;
let timeAfterStart = 0;
let setInterVal;