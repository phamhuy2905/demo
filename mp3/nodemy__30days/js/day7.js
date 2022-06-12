const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const save = $('.content__input-save')
const input = $('.input')
console.log([input])

folder = ['Javascript', 'PHP', 'ReacJs'];



function render() {
    var htmls = folder.map((coure, index) => {
    return `
        <div class="push">
            <span class="content__input-span">${coure}</span>
            <i class="fa-solid fa-xmark icon" onclick = "removeTag(${index})"></i>
        </div>
    `;
    }) 
    save.innerHTML = htmls.join('')
}
render()

// xu li an enter 
input.onkeydown = function(e) {
   if(e.which == 13) {
        folder.push(input.value);
        input.value = ''
        render()
   }
}


//xu li an vao close
function removeTag(index) {
    console.log(index)
    folder.splice(index, 1)
    render()
}

// xu li an removeall
const button = $('.button')
const push = $('.push')
button.addEventListener('click', function() {
    folder = []
    render()
    
})
