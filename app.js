const seconds = document.querySelector('#seconds')
const minutes = document.querySelector('#minutes')
const hours = document.querySelector('#hours')
const days = document.querySelector('#days')

function showTime() {
    
    const countDownDate = new Date('August 29 , 2021 17:28:0:15').getTime()

    let date = new Date()
    let now = date.getTime()
    let distance = countDownDate - now

    let d = ((Math.floor(distance / (1000 * 60 * 60 * 24)) > 0) ? Math.floor(distance / (1000 * 60 * 60 * 24)) : 0)
    let h = (Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) > 0) ? Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : 0
    let m = (Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) > 0) ? Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) : 0
    let s = (Math.floor((distance % (1000 * 60)) / 1000) > 0) ? Math.floor((distance % (1000 * 60)) / 1000) : 0

    days.innerHTML = (d > 10) ? d : '0' + d
    hours.innerHTML = (h > 10) ? h : '0' + h
    minutes.innerHTML = (m > 10) ? m : '0' + m
    seconds.innerHTML = (s >= 10) ? s : '0' + s

    if (distance <= 1000) {
        document.querySelector('h2').innerHTML = 'Launch!'
    }

    setTimeout(showTime, 1000)
}

showTime()