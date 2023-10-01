let homeScore = 0;
let guestScore = 0;

let homeDisplayScore = document.querySelector("#home-score");
let guestDisplayScore = document.querySelector("#guest-score");

homeDisplayScore.innerText = homeScore;
guestDisplayScore.innerText = guestScore;

const addOneHome = document.querySelector("#home-plus-one");
const addTwoHome = document.querySelector("#home-plus-two");
const addThreeHome = document.querySelector("#home-plus-three");

const addOneGuest = document.querySelector("#guest-plus-one");
const addTwoGuest = document.querySelector("#guest-plus-two");
const addThreeGuest = document.querySelector("#guest-plus-three");

const newGameBtn = document.querySelector("#new-game");

function addOne(teamScore, teamDisplayScore) {
    teamScore.score++;
    teamDisplayScore.innerText = teamScore.score;
}

function addTwo(teamScore, teamDisplayScore) {
    teamScore.score += 2;
    teamDisplayScore.innerText = teamScore.score;
}

function addThree(teamScore, teamDisplayScore) {
    teamScore.score += 3;
    teamDisplayScore.innerText = teamScore.score;
}

let homeTeam = { score: homeScore };
let guestTeam = { score: guestScore };

document.addEventListener("click", function (event) {
    if (event.target === addOneHome) {
        addOne(homeTeam, homeDisplayScore);
    } else if (event.target === addTwoHome) {
        addTwo(homeTeam, homeDisplayScore);
    } else if (event.target === addThreeHome) {
        addThree(homeTeam, homeDisplayScore);
    } else if (event.target === addOneGuest) {
        addOne(guestTeam, guestDisplayScore);
    } else if (event.target === addTwoGuest) {
        addTwo(guestTeam, guestDisplayScore);
    } else if (event.target === addThreeGuest) {
        addThree(guestTeam, guestDisplayScore);
    }

    updateColors();
});

newGameBtn.addEventListener("click", function () {
    homeScore = 0;
    guestScore = 0;
    homeTeam = { score: homeScore };
    guestTeam = { score: guestScore };
    homeDisplayScore.innerText = homeTeam.score;
    guestDisplayScore.innerText = guestTeam.score;

    resetColors();
});

function updateColors() {
    if (homeTeam.score > guestTeam.score) {
        homeDisplayScore.style.color = "orange";
        guestDisplayScore.style.color = "";
    } else if (guestTeam.score > homeTeam.score) {
        guestDisplayScore.style.color = "orange";
        homeDisplayScore.style.color = "";
    } else {
        resetColors();
    }
}

function resetColors() {
    homeDisplayScore.style.color = "";
    guestDisplayScore.style.color = "";
}

updateColors();
