const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const img = $('.img')
const img1 = $('.img1')
const next = $('.next')
const prev = $('.prev')
const close = $('.close')
const modal = $('.modal')
const  row = $('.row')
console.log(next)



const app = {
    currentIndex : 0,
    folder : [
        {
            img: 'mp3/nodemy__30days/img/img1.jpeg'
        },
        {
            img: 'mp3/nodemy__30days/img/img2.jpeg'
        },
        {
            img: 'mp3/nodemy__30days/img/img3.jpeg'
        },
        {
            img: 'mp3/nodemy__30days/img/img4.jpeg'
        },
        {
            img: 'mp3/nodemy__30days/img/img5.jpeg'
        },
        {
            img: 'mp3/nodemy__30days/img/img6.jpeg'
        },
        {
            img: 'mp3/nodemy__30days/img/img7.jpeg'
        },
        {
            img: 'mp3/nodemy__30days/img/img8.jpeg'
        },
        
    ],
    
    start: function() {
        this.render()
        this.defineProperties()
        this.loadImage()
        this.handelEvent()
    },
    render: function() {
        const htmls = this.folder.map(function(course, index) {
            return `
            <div class="col l-3 m-6 c-12">
            <div class = "imgclick" data-index="${index}"> 
            <img src="${course.img}" class="img" alt="">
            </div>
        </div>
            `
        })
        row.innerHTML = htmls.join('');
    },
    loadImage: function() {
        img1.style.backgroundImage = `url('${app.currentImage.img}')`
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentImage', {
            get: function() {
                return this.folder[this.currentIndex]
            }
        })
    },
    handelEvent: function() {
        const imgclick = $$('.imgclick')
        function toggleModal() {
                modal.classList.add("modal1");
        }

        // click vao anh
        imgclick.forEach(function(courseimg, index) {   
            courseimg.addEventListener("click", (e) => {
                const songNode = e.target.closest('.imgclick')
                console.log(songNode.getAttribute('data-index'))
                if(songNode) {
                    app.currentIndex = songNode.getAttribute('data-index')
                    app.loadImage()
                    app.render
                }
                toggleModal()
                // app.controlImage()
              });
        })

        // keydown
        document.onkeydown = function(e) {
            if(e.which == 27) {
                modal.classList.remove('modal1')
            }
            else if(e.which == 37) {
                prev.click()
            }
            else if(e.which == 39) {
                next.click()
            }
        }

        // click vao close
        close.onclick = function() {
             modal.classList.remove('modal1')
        }
        
        // click vao next
        next.onclick = function() {
            app.currentIndex++
            if(app.currentIndex >= app.folder.length) {
                app.currentIndex = 0
            }
            app.loadImage()
        }

        // click vao prev
        prev.onclick = function() {
            app.currentIndex--
            if(app.currentIndex < 0) {
                app.currentIndex = app.folder.length - 1
            }
            app.loadImage()
        }
        
    },
}
app.start()



// row.innerHTML = htmls.join('')
// function toggleModal() {
//     modal.classList.add("modal1");
//   }
// img.forEach((item, index) => {
//     item.addEventListener('click', function() {
//         modal.classList.add('modal1')
//     } )
// })
// img.onclick = function() {
//     modal.classList.add('modal1')
// }
// close.onclick = function() {
//     modal.classList.remove('modal1')

// }
