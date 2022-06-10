
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const dashboard = $('.dashboard')
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
//         path: './folder/path/y2mate.com - Tình yêu bát cơm rang  Thiện Hưng.mp3',
//         img: './folder/img/images (1).jpg'
//     },
//      {
//         name: 'Crying Over You ',
//         singer: 'Justatee',
//         path: './folder/path/y2mate.com - Tình yêu bát cơm rang  Thiện Hưng.mp3',
//         img: './folder/img/images (1).jpg'
//     },
//      {
//         name: 'Them bao nhieu lau',
//         singer: 'Dat G',
//         path: './folder/path/y2mate.com - Tình yêu bát cơm rang  Thiện Hưng.mp3',
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
            name: 'Tình yêu cơm rang',
            singer: 'Độ Mixi',
            path: './mp3/folder/path/y2mate.com - Tình yêu bát cơm rang  Thiện Hưng.mp3',
            img: './mp3/folder/img/images.jpg'
        },
        {
            name: 'Crying Over You ',
            singer: 'Justatee',
            path: './mp3/folder/path/y2mate.com - Official MV Crying Over You  JustaTee ft Binz.mp3',
            img: './mp3/folder/img/images (2).jpg'
        },
        {
            name: 'Thêm bao nhiêu lâu',
            singer: 'Đạt G',
            path: './mp3/folder/path/y2mate.com - Thêm Bao Nhiêu Lâu  Đạt G  OFFICIAL MV.mp3',
            img: './mp3/folder/img/images.jpg'
        },
        {
            name: 'Vùng Ký Ức ',
            singer: 'Chillies',
            path: './mp3/folder/path/y2mate.com - Vùng Ký Ức  Chillies Official Music Video.mp3',
            img: './mp3/folder/img/3.jpg'
        },
        {
            name: 'Những con đường song song',
            singer: 'Chillies',
            path: './mp3/folder/path/y2mate.com - CHILLIES  NHỮNG CON ĐƯỜNG SONG SONG  OFFICIAL MUSIC AUDIO.mp3',
            img: './mp3/folder/img/4.jpg'
        },
        {
            name: 'Cơn mưa cuối',
            singer: 'JustaTee x Binz',
            path: './mp3/folder/path/y2mate.com - Lyric Video Cơn Mưa Cuối  JustaTee x Binz.mp3',
            img: './mp3/folder/img/5.jpg'
        },
        {
            name: 'Nếu ngày mai không đến',
            singer: 'Chillies',
            path: './mp3/folder/path/y2mate.com - Nếu Ngày Mai Không Đến  Chillies.mp3',
            img: './mp3/folder/img/6.jpg'
        },
        {
            name: 'Và thế là hết ',
            singer: 'Chillies',
            path: './mp3/folder/path/y2mate.com - Và Thế Là Hết  Chillies Original.mp3',
            img: './mp3/folder/img/7.jpg'
        },
        {
            name: 'Yêu 5',
            singer: 'Rhymastic',
            path: './mp3/folder/path/y2mate.com - Lyrics  YÊU 5  Rhymastic.mp3',
            img: './mp3/folder/img/8.jpg'
        },
        {
            name: 'Xích thêm chút',
            singer: 'MCK',
            path: './mp3/folder/path/y2mate.com - Xích Thêm Chút  XTC Remix  RPT Groovie ft TLinh x RPT MCK Prod by fatbenn  RPT LT RAPITALOVE.mp3',
            img: './mp3/folder/img/9.jpg'
        },
        {
            name: 'Tay to',
            singer: 'MCK',
            path: './mp3/folder/path/y2mate.com - Rapitalove EP Tay To  RPT MCK x RPT PhongKhin prod by RPT Phongkhin Official Lyric Video.mp3',
            img: '././mp3/folder/img/10.jpg'
        },
        {
            name: 'Về bên anh',
            singer: 'Jack',
            path: './mp3/folder/path/y2mate.com - Vì đôi lúc anh thấy em giận anh quá nên thôi  Về Bên AnhLofi Ver Jack x Mihle  Lyric Video.mp3',
            img: '././mp3/folder/img/11.jpg'
        },
        {
            name: '2AM',
            singer: 'JustaTee  feat Big Daddy',
            path: './mp3/folder/path/y2mate.com - 2AM  JustaTee  feat Big Daddy Official Audio.mp3',
            img: '././mp3/folder/img/12.jpg'
        },
        {
            name: 'Ngày Nào',
            singer: 'Datmaniac',
            path: './mp3/folder/path/y2mate.com - Datmaniac  Ngày Nào ft Cá Hồi Hoang Official Audio.mp3',
            img: '././mp3/folder/img/13.jpg'
        },

        {
            name: 'Em của anh đừng của ai',
            singer: 'Long Cao ',
            path: './mp3/folder/path/y2mate.com - Long Cao  EM CỦA ANH ĐỪNG CỦA AI Audio.mp3',
            img: '././mp3/folder/img/14.jpg'
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
        const widthDashboard = dashboard.offsetHeight
        document.onscroll = function() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newWidth = Width - scrollTop
            cd.style.width = newWidth > 0 ? newWidth + 'px' :0
        }
        // document.onscroll = function() {
        //     const scrollTop1 = window.scrollY || document.documentElement.scrollTop
        //     const newWidth1 = widthDashboard - scrollTop1
        //     dashboard.style.height = newWidth1 > 0 ? newWidth1 + 'px' :0
        // }
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

