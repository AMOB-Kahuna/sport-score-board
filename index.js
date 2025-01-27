let homeScore = 0
let guestScore = 0
let homeBoard = document.getElementById("home-score")
let guestBoard = document.getElementById("guest-score")

function homePlus1() {
    homeScore += 1
    homeBoard.textContent = homeScore
}

function homePlus2() {
    homeScore += 2
    homeBoard.textContent = homeScore
}

function homePlus3() {
    homeScore += 3
    homeBoard.textContent = homeScore
}

function guestPlus1() {
    guestScore += 1
    guestBoard.textContent = guestScore
}

function guestPlus2() {
    guestScore += 2
    guestBoard.textContent = guestScore
}

function guestPlus3() {
    guestScore += 3
    guestBoard.textContent = guestScore
}

function newGame() {
    homeScore = 0
    guestScore = 0
    homeBoard.textContent = "0"
    guestBoard.textContent = "0"
}