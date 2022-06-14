var couseAPI = 'http://localhost:3000/posts'
const list = document.querySelector('#list')
const khoahoc = document.querySelector('.khoahoc')
const lichhoc = document.querySelector('.lichhoc')
const btn = document.querySelector('#button')
const save = document.querySelector('#button1')
console.log(save)

function start() {
    getCourse(renderCourse)
    handelcreateCourse()
}
start()


function getCourse(callback) {
    fetch(couseAPI)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}


function renderCourse(courses) {
    const htmls = courses.map((course, index) => {
        return `
            <li>
                <h3 class="title${index}">${course.title}</h3 >
                <p>${course.author}</p>
                <button class="update" onclick = "update(${index}, ${course.id})">Chinh sua</button>
                <button onclick = "deleteCourse(${course.id})" id="#a">Xoa</button>
            </li>
        `;   
    })
    list.innerHTML = htmls.join('')
}



function handelcreateCourse() {
    btn.onclick = function() {
        var title = khoahoc.value;
        var author = lichhoc.value;
        var data = {
            title,
            author,
        }
        createCourse(data, function() {
            getCourse(renderCourse)
        })
    }
}

function createCourse(data, callback) {
    const option = {
        method: 'POST',
        body: JSON.stringify(data) ,
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    }
    fetch(couseAPI, option)
        .then(function(response) {
            return response.json()
        })
        .then(callback)
}



/// cong viec 1: an vao nut chinh sua, se tra lai value cua input va focus vao no


function update(index, id, data) {
    fetch(couseAPI)
        .then(function(response) {
            return response.json()
        })
        .then(function(response) {
            khoahoc.value = response[index].title
            lichhoc.value =  response[index].author
            khoahoc.focus()
        })
        save.classList.remove('hide')
        save.onclick = function() {
            var title = khoahoc.value;
            var author = lichhoc.value;
            var data = {
                title,
                author,
            }
            const option1 = {
                method: 'PUT',
                body: JSON.stringify(data) ,
                headers: {
                    'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                  },
            }
            fetch(couseAPI + '/' + id, option1)
                .then(function(response) {
                    return response.json()
                })
                .then(callback)
        }

}





function deleteCourse(id) {
    const option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
    }
    fetch(couseAPI + '/' + id, option)
        .then(function(response) {
            return response.json()
        })
        .then(function() {

        })
}

