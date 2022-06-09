const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const search = $('.search-btn')
const searchbox = $('.search-box')
const searchinput = $('.search-input')
console.log(search)



search.addEventListener('click', function() {
    searchbox.classList.toggle('open')
    search.previousElementSibling.focus()
} )
