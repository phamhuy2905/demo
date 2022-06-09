
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const playlist = $('.playlist')
const cd = $('.cd');
const header = $('.header__h2')
const cdthumb = $('.cd-thumb')
const audio = $('#audio')
const btn = $('.btn-toggle-play')
const player = $('.player')
const btnNext = $('.btn-next')
const progress = $('.progress')
const btnPrev = $('.btn-prev')
const btnRepeat = $('.btn-repeat')
const btnRandom = $('.btn-random')
console.log(progress)

// const songs = [
//     { 
//         name: 'Tinh yeu com rang',
//         singer: 'Do Mixi',
//         path: './folder\path\y2mate.com - Tình yêu bát cơm rang  Thiện Hưng.mp3',
//         img: './folder/img/images (1).jpg'
//     },
//      {
//         name: 'Crying Over You ',
//         singer: 'Justatee',
//         path: './folder\path\y2mate.com - Tình yêu bát cơm rang  Thiện Hưng.mp3',
//         img: './folder/img/images (1).jpg'
//     },
//      {
//         name: 'Them bao nhieu lau',
//         singer: 'Dat G',
//         path: './folder\path\y2mate.com - Tình yêu bát cơm rang  Thiện Hưng.mp3',
//         img: './folder/img/images (1).jpg'
//     },
// ]

const app = {
    currentIndex : 0,
    isPlay : false,
    isRandom : false,
    isRepeat: false,
    songs : [
        {
            name: 'Tinh yeu com rang',
            singer: 'Do Mixi',
            path: './folder/path/y2mate.com - Tình yêu bát cơm rang  Thiện Hưng.mp3',
            img: './folder/img/images (1).jpg'
        },
        {
            name: 'Crying Over You ',
            singer: 'Justatee',
            path: './folder/path/y2mate.com - Official MV Crying Over You  JustaTee ft Binz.mp3',
            img: './folder/img/images (2).jpg'
        },
        {
            name: 'Them bao nhieu lau',
            singer: 'Dat G',
            path: './folder/path/y2mate.com - Thêm Bao Nhiêu Lâu  Đạt G  OFFICIAL MV.mp3',
            img: './folder/img/images.jpg'
        },
        {
            name: 'Tinh yeu com rang',
            singer: 'Do Mixi',
            path: './folder/path/y2mate.com - Tình yêu bát cơm rang  Thiện Hưng.mp3',
            img: './folder/img/images (1).jpg'
        },
        {
            name: 'Crying Over You ',
            singer: 'Justatee',
            path: './folder/path/y2mate.com - Official MV Crying Over You  JustaTee ft Binz.mp3',
            img: './folder/img/images (2).jpg'
        },
        {
            name: 'Them bao nhieu lau',
            singer: 'Dat G',
            path: './folder/path/y2mate.com - Thêm Bao Nhiêu Lâu  Đạt G  OFFICIAL MV.mp3',
            img: './folder/img/images.jpg'
        },
        {
            name: 'Tinh yeu com rang',
            singer: 'Do Mixi',
            path: './folder/path/y2mate.com - Tình yêu bát cơm rang  Thiện Hưng.mp3',
            img: './folder/img/images (1).jpg'
        },
        {
            name: 'Crying Over You ',
            singer: 'Justatee',
            path: './folder/path/y2mate.com - Official MV Crying Over You  JustaTee ft Binz.mp3',
            img: './folder/img/images (2).jpg'
        },
        {
            name: 'Them bao nhieu lau',
            singer: 'Dat G',
            path: './folder/path/y2mate.com - Thêm Bao Nhiêu Lâu  Đạt G  OFFICIAL MV.mp3',
            img: './folder/img/images.jpg'
        },
        {
            name: 'Tinh yeu com rang',
            singer: 'Do Mixi',
            path: './folder/path/y2mate.com - Tình yêu bát cơm rang  Thiện Hưng.mp3',
            img: './folder/img/images (1).jpg'
        },
        {
            name: 'Crying Over You ',
            singer: 'Justatee',
            path: './folder/path/y2mate.com - Official MV Crying Over You  JustaTee ft Binz.mp3',
            img: './folder/img/images (2).jpg'
        },
        {
            name: 'Them bao nhieu lau',
            singer: 'Dat G',
            path: './folder/path/y2mate.com - Thêm Bao Nhiêu Lâu  Đạt G  OFFICIAL MV.mp3',
            img: './folder/img/images.jpg'
        },
    ],

    start: function() {
        this.render()

        this.defineProperties()

        this.loadSong()

        this.scrollTop()

        this.handelEvents()
    },

    render: function() {
        const htmls = app.songs.map(function(song, index) {
            return `
                <div class="song ${index == app.currentIndex ? 'active' : ''} " data-index="${index}">
                <div class="thumb" style="background-image: url('${song.img}')">
                </div>
                <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
                </div>
                <div class="option">
                <i class="fas fa-ellipsis-h"></i>
                </div>
                </div>
            `
        })
        playlist.innerHTML = htmls.join("")
    },

    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },

    loadSong: function() {
        header.textContent = app.currentSong.name
        cdthumb.style.backgroundImage = `url('${app.currentSong.img}')`
        audio.src = app.currentSong.path
    },

    scrollTop: function() {
        const Width = cd.offsetWidth
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newWidth = Width - scrollTop
            cd.style.width = newWidth > 0 ? newWidth + 'px' :0
        }
    },


    handelEvents: function() {

        // click vao nut play
        btn.onclick = function() {
            if(app.isPlay == true) { // click vao neu isPlay la true thi dung, con la false thi chay
                audio.pause()
                console.log(app.isPlay)

            }
            else{
                audio.play()
                
            }

            audio.onplay = function() {
                app.isPlay = true
                player.classList.add('playing')
                cdRorate.play()
            }
            audio.onpause = function() {
                app.isPlay = false
                player.classList.remove('playing')
                cdRorate.pause()
            }
        }
        
        /// xu li seek
        audio.ontimeupdate = function() {
                if(audio.duration) { // audio.duratio la tong thoi gian cua bai nhac
                    const progressPercent = (audio.currentTime / audio.duration * 100) // do dai thanh seek tinh theo %
                    progress.value = progressPercent
                }

        }
       /// xu li an vao progress

       progress.oninput = function() { // khi click vao, thoi gian hien tai bang tong thoi gian * phan tram seek
           audio.currentTime = audio.duration * progress.value / 100 
       }

       // xu li quay cd
        const cdRorate = cdthumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 10000,
            iterations: Infinity
        })
        cdRorate.pause()


        // xu li next
        btnNext.onclick = function() {
            if(btnRandom.classList.contains('active')) {
                app.randomSong()
            }
            else{
                app.nextSong()
            }
            audio.onplay = function() {
                app.isPlay = true
                player.classList.add('playing')
                cdRorate.play()
            }
            app.render()
            app.scrollActivesong()
        }

        // xu li prev
        btnPrev.onclick = function() {
            if(btnRandom.classList.contains('active')) {
                app.randomSong()
            }
            else{
                app.prevSong()
            }
            audio.onplay = function() {
                app.isPlay = true
                player.classList.add('playing')
                cdRorate.play()
            }
            app.render()
            app.scrollActivesong()
        }
        

        // xu li random
        btnRandom.onclick = function() {
            app.isRandom = !app.isRandom
            btnRandom.classList.toggle('active', app.isRandom)
        }
        // if(btnRandom.classList.contains('active')) {
        //     audio.onended = function() {
        //         app.randomSong()
        //         audio.play()
        //     }
            
        // }
        audio.onended = function() {
            if(btnRandom.classList.contains('active')) {
                app.randomSong()
                audio.play()
            }
            else if(btnRepeat.classList.contains('active')) {
                audio.play()
            }
            else {
                btnNext.click()
            }
        }
        /// xu li btn REPEAT
        btnRepeat.onclick = function() {
            app.isRepeat = !app.isRepeat
            btnRepeat.classList.toggle('active', app.isRepeat)
        }

        /// xu li an vao playlist

        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)')
            if(songNode || e.target.closest('.option')) {
                if(e.target.closest('.song:not(.active)')) {
                    console.log(songNode.getAttribute('data-index'))
                    app.currentIndex = songNode.getAttribute('data-index')
                    app.loadSong()
                    app.render()
                    audio.play()
                    app.scrollActivesong()
                }
                if(e.target.closest('.option')) {
                    console.log(123)
                }
            }
        }
    },
    nextSong: function() {
        app.currentIndex++
        if(app.currentIndex >= app.songs.length) {
            app.currentIndex = 0
        }
        app.loadSong()
        audio.play()
    },

    prevSong: function() {
        app.currentIndex--
            if(app.currentIndex < 0) {
                app.currentIndex = app.songs.length - 1
            }
            app.loadSong()
            audio.play()
    },

    randomSong: function() {
        let random
        do{
            random = Math.floor(Math.random() * this.songs.length)
        }while(this.currentIndex == random)
        this.currentIndex = random
        app.loadSong()
    },

    repeatSong: function() {
        if(btnRepeat.classList.contains('active')) {
            // this.isRepeat = false;
            audio.onended = function() {
                audio.play()
            }
        }
    },

    endSong: function() {
        audio.onended = function() {
            audio.play()
        }
    },

    scrollActivesong: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior : 'smooth',
                block : 'center',
                inline : 'start',
            })
        },0)
    }
}

app.start()

