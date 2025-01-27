let homeScore = 0
let guestScore = 0
let homeBoard = document.getElementById("home-score")
let guestBoard = document.getElementById("guest-score")

function changeColor() {
    if(homeScore > guestScore) {
        homeBoard.setAttribute("style", "color: #7FB800")
        guestBoard.setAttribute("style", "color: #F6511D")
    } else if (homeScore < guestScore) {
        guestBoard.setAttribute("style", "color: #7FB800")
        homeBoard.setAttribute("style", "color: #F6511D")
    } else {
        guestBoard.setAttribute("style", "color: #FFB400")
        homeBoard.setAttribute("style", "color: #FFB400")
    }
}

function homePlus1() {
    homeScore += 1
    homeBoard.textContent = homeScore
    changeColor()
}

function homePlus2() {
    homeScore += 2
    homeBoard.textContent = homeScore
    changeColor()
}

function homePlus3() {
    homeScore += 3
    homeBoard.textContent = homeScore
    changeColor()
}

function guestPlus1() {
    guestScore += 1
    guestBoard.textContent = guestScore
    changeColor()
}

function guestPlus2() {
    guestScore += 2
    guestBoard.textContent = guestScore
    changeColor()
}

function guestPlus3() {
    guestScore += 3
    guestBoard.textContent = guestScore
    changeColor()
}



function newGame() {
    homeScore = 0
    guestScore = 0
    homeBoard.textContent = "0"
    guestBoard.textContent = "0"
    changeColor()
}