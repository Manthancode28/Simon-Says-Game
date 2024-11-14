let gameSeq = [];
let userSeq = [];
let start = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "purple", "green"];
let score = 0;

document.addEventListener("keypress", function() {
    if (start == false) {
        console.log("Game started");
        start = true;
    }
    levelup();

});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userSeq = [];
    level++;
    if (level >= score) {
        score = level;
    }
    h2.innerText = `Level ${level}`;

    let randInx = Math.floor(Math.random() * 3);
    let randColors = btns[randInx];
    let randBtn = document.querySelector(`.${randColors}`);
    gameSeq.push(randColors);
    btnFlash(randBtn);
    console.log(gameSeq);
}

function checkAns(idx) {
    // console.log("Level : ", level);

    if (userSeq[idx] === gameSeq[idx]) {
        // console.log("Same value");
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 500);
        }
    } else {
        h2.innerHTML = `Game over😟 Your score is <b>${level}</b><br>Press any key to start new game`;
        document.querySelector("body").style.backgroundColor = "rgba(241, 0, 0, 0.67)";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "#F8EDE3";
        }, 150);
        let h4 = document.createElement("h4");
        h4.innerHTML = `Your highest score is ${score}`;
        h2.appendChild(h4);
        reset();
    }
}

function btnpress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);

}
let allBtn = document.querySelectorAll(".btn");
// console.log(allBtn);
for (i of allBtn) {
    i.addEventListener("click", btnpress);
}

function reset() {
    userSeq = [];
    gameSeq = [];
    level = 0;
    start = false;
}