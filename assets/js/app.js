let homeCountEl = document.getElementById("home-count")
let homeCount = 0

let guestCountEl = document.getElementById("guest-count")
let guestCount = 0

function incrementHomeOne() {
    homeCount += 1
    homeCountEl.textContent = homeCount
}

function incrementHomeTwo() {
    homeCount += 2
    homeCountEl.textContent = homeCount
}

function incrementHomeThree() {
    homeCount += 3
    homeCountEl.textContent = homeCount
}

function incrementGuestOne() {
    guestCount += 1
    guestCountEl.textContent = guestCount
}

function incrementGuestTwo() {
    guestCount += 2
    guestCountEl.textContent = guestCount
}

function incrementGuestThree() {
    guestCount += 3
    guestCountEl.textContent = guestCount
}