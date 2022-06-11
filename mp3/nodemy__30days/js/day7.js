const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const inputElement = $('.input')
const buttonElement = $('.button')
const removeall = $('.delete')
const save = $('.content__input-save')

const app = {
    folder: [
        {
            name : 'Reacjs'
        },
        {
            name : 'Javascript'
        },
        {
            name : 'Reacjs'
        },
        {
            name : 'Javascript'
        },
    ],
    
    handelEvent: function() {
       
    },

    start: function() {
        app.render()
        app.handelEvent()
    },

    render: function() {
        const main = document.querySelector('.content__input')
        if(main) {
            console.log(main)
            var test = $('.content__input-save')
            // toast.style.animation = `Easin ease-in 1s`;
            const htmls = this.folder.map(function(course, index) {
                return `
                <div class="push">
                   <span class="content__input-span">${course.name}</span>
                   <i class="fa-solid fa-xmark icon" data-index="${index}"></i>
               </div>
                `;
    
            })
            test.innerHTML = htmls.join('')
            //  main.appendChild(toast);    
        }
    }
}

app.start()
const push = $('.push')

// them node
function demo() {

        const node = document.createElement("div");
        node.classList.add('push');
        const textnode = document.createTextNode(inputElement.value)
        const span = document.createElement("span");
        span.classList.add('content__input-span')
        span.appendChild(textnode);
        node.appendChild(span);
        save.appendChild(node);
        
}

document.addEventListener('keydown', function(e) {
        if(e.which == 13) {
            demo()
        }
})

// nhan vao close
const close = $$('.icon')
console.log(close)
close.forEach(function(course) {
    course.onclick = function(e) {
        if(push) {
            save.removeChild(save.firstElementChild)
            console.log([push])
        }
    }
    
})

// remove all
buttonElement.onclick = function() {
    const pushall = $$('.push')
    pushall.forEach(function(course) {
        course.remove()
    })
}
