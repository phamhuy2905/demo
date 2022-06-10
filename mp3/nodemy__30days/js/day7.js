const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const inputElement = $('.input')
const spanElement = $('.content__input-span')
const buttonElement = $('.button')
const close = $('.icon')
const removeall = $('.delete')




// document.addEventListener('keydown', function(e) {
//     if(e.which == 13) {
//         spanElement.innerText = (inputElement.value)
//     }
// })



function toast({title="", message="", animation=""}) {
    const main = document.querySelector('.content__input')
    if(main) {
        console.log(main)
        const toast = document.createElement('div')
        toast.classList.add('content__input-save');
        // toast.style.animation = `Easin ease-in 1s`;
         toast.innerHTML = `
         <div class="push">
            <span class="content__input-span">ReacJs</span>
            <i class="fa-solid fa-xmark icon"></i>
        </div>
        <div class="push">
            <span class="content__input-span">PHP</span>
            <i class="fa-solid fa-xmark icon"></i>
        </div>
         `;
         main.appendChild(toast); 
    }
}
function show(){
    toast({
    title : 'Hoi lam gi',
    message: 'notify',
    animation: 500,
});
}

show()

buttonElement.onclick = function(e) {
    const push = $('.push')
    const test = $('.content__input-save')
    push.remove()
    if(!push) {
        e.preventDefault()
    }
}
