const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const button = $('.button')
const content = $('.content')
const around = $('.around__h2')
const inner1 = $('.inner1')
const inner2 = $('.inner2')
const inner3 = $('.inner3')
const inner4 = $('.inner4')
console.log([inner1])

// document.onkeydown = function(e) {
//     if(e.which == 27) {
//         button.classList.add('hide')
//         content.classList.add('hide')
//         console.log(123)
//     }
// }

function logKey() {
    button.classList.add('hide')
    content.classList.add('hide')
}


document.addEventListener('keydown', logKey);

document.addEventListener('keydown', function(e) {
    inner1.textContent = `${e.which === 32 ? 'Space' : e.key}`
    inner2.textContent = `${e.location}`
    inner3.textContent = `${e.which}`
    inner4.textContent = `${e.code}`
    around.textContent = `${e.which}`
})  

