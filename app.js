let play = document.getElementById("play");
play.addEventListener("click", () => {
    timeSince1970 = Date.now() - timeAfterStart;
    setInterVal = setInterval(() => {
        timeAfterStart = Date.now() - timeSince1970;
        let time = timeCalculation(timeAfterStart);
        time1(time);
    }, 10);
    hidePlay();
});

let pause = document.getElementById("pause");
pause.addEventListener("click", () => {
    clearInterval(setInterVal);
    hidePause();
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(setInterVal);
    time1("00:00:00");
    timeAfterStart = 0;
    hidePause();
});

let timeSince1970;
let timeAfterStart = 0;
let setInterVal;

function timeCalculation(time) {
    let hoursInPoint = time / 3600000;
    let hour = Math.floor(hoursInPoint);

    let minInPoint = (hoursInPoint - hour) * 60;
    let minutes = Math.floor(minInPoint);


    let secInPoint = (minInPoint - minutes) * 60;
    let seconds = Math.floor(secInPoint);


    let msInPoint = (secInPoint - seconds) * 100;
    let ms = Math.floor(msInPoint);

    let minPlus0 = minutes.toString().padStart(2, '0');
    let secPlus0 = seconds.toString().padStart(2, '0');
    let msPlus0 = ms.toString().padStart(2, '0');

    return `${minPlus0}:${secPlus0}:${msPlus0}`;
}

function time1(time) {
    document.getElementById("time").innerHTML = time;
}

let img1 = document.getElementById("img1");

function hidePlay() {
    play.style.display = "none";
    pause.style.display = "block";
    img1.style.visibility = "visible";
}

function hidePause() {
    pause.style.display = "none";
    play.style.display = "block";
    img1.style.visibility = "hidden";
}
