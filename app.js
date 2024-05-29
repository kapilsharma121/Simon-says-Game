let gamesque = [];
let userseque = [];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["red", "green", "yellow", "purple"];
// Define the colors directly in the function
document.addEventListener("keypress", function () {
    if (started === false) {
        console.log("game started");
        started = true;
        levelup();
    }
});

function levelup() {
    userseque = [];
    ++level;
    h2.innerText = `level ${level}`;
    // Move btns definition here
    let randindx = Math.floor(Math.random() * 3);
    let randclor = btns[randindx];
    let randbtn = document.querySelector(`.${randclor}`);
    gameflsh(randbtn);
    gamesque.push(randclor);
}

function gameflsh(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function checkans(idx) {
    if (userseque[idx] === gamesque[idx]) {
        if (userseque.length == gamesque.length) {
            setTimeout(levelup, 500);
        }
    } else {
        h2.innerHTML = `game over! your score was  <b>${level}</b>.<br> enter any key to restart`;
        reset();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);
    let usercolor = btn.getAttribute("id"); // Changed to getAttribute("class")
    userseque.push(usercolor);
    checkans(userseque.length - 1);
}

let allbtn = document.querySelectorAll(".btn");
for (let btn of allbtn) { // Use 'let' to declare btn in the loop
    btn.addEventListener("click", btnpress);
}
function playEndingVideo() {
    // Create video element
    let video = document.createElement("video");
    video.id = "ending-video";
    video.src = "Simon Says_ EXTREME Game Video (online-video-cutter.com) (1).mp4";
    video.autoplay = true;
    video.loop = false;
    video.onended = function() {
        video.parentNode.removeChild(video); // Remove video after it ends
    };
    document.body.appendChild(video);
}

function reset(){
    started=false;
    level=0;
    gamesque=[];
    userseque=[];
    let endingVideo = document.getElementById("ending-video");
    if (endingVideo) {
        endingVideo.parentNode.removeChild(endingVideo);
    }
}

