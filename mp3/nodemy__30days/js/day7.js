const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const inputElement = $('.input')
const spanElement = $('.content__input-span')
const buttonElement = $('.button')
const close = $('.icon')
const push = $('.push')




document.addEventListener('keydown', function(e) {
    if(e.which == 13) {
        spanElement.innerText = (inputElement.value)
    }
})

buttonElement.addEventListener('click', function() {
    push.classList.add('remove')
    console.log(123)
})
