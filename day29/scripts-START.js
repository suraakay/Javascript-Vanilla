// clearInterval should be outside of function if gives initialization error (line 14 => line 7)
// should reset directly form element. not while defining eventListener (line 62)

const timeLeft = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')

let countdown

function preperaData(e) {
    time = e.target.dataset.time
    timer(time)
}
function timer(time) {
    clearInterval(countdown)
    const now = new Date()
    let totalSec = (now.getHours() * 3600) + (now.getMinutes() * 60) + (now.getSeconds())
    totalSec = totalSec + parseInt(time)

    const hour = Math.floor(totalSec / 3600)
    totalSec = totalSec % 3600
    const minutes = Math.floor(totalSec / 60)
    totalSec = totalSec % 60
    const seconds = totalSec

    endTime.textContent = `Back at : ${hour < 10 ? '0' + hour : hour}.${minutes < 10 ? '0' + minutes : minutes}`

    let forCountDown = parseInt(time)

    countdown = setInterval(() => {
        forCountDown--

        if (forCountDown <= 0) {
            timeLeft.textContent = `I will be back soon...`
            return
        }

        let timeCount = forCountDown
        const hourI = Math.floor(timeCount / 3600)
        timeCount = timeCount % 3600
        const minutesI = Math.floor(timeCount / 60)
        timeCount = timeCount % 60
        const secondsI = timeCount

        timeLeft.textContent = `${hourI < 10 ? '0' + hourI : '00'}:${minutesI < 10 ? '0' + minutesI : minutesI}:${secondsI < 10 ? '0' + secondsI : secondsI}`
    }, 50);
}

const buttons = document.querySelectorAll('button')
const timeInput = document.querySelector('input')
const form = document.querySelector('#custom')

buttons.forEach(button => button.addEventListener('click', preperaData))
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let time = timeInput.value
    if (parseInt(timeInput.value) % 1 === 0 && time < 800) {
        timer(time * 60)
    }
    else {
        alert('pff..')
    }
    form.reset()
})




