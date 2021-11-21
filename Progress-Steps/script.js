const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let beingActive = 1;

next.addEventListener('click', () => {
    beingActive++
    console.log(beingActive);
})