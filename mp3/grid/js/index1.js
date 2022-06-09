function toast({title="", message="", animation=""}) {
    const main = document.getElementById('header')
    if(main) {
        const toast = document.createElement('div')
        toast.classList.add('header__transtion');
        toast.style.animation = `Easin ease-in 1s`;
         toast.innerHTML = `
            <ul class="header__transtion-list">
                <li class="header__transtion-item">
                    <a href="" class="header__transtion-link">${title}</a>
                </li>
                <li class="header__transtion-item">
                    <a href="" class="header__transtion-link">Thiet ke</a>
                </li>
                <li class="header__transtion-item"> 
                    <a href="" class="header__transtion-link">${message}</a>
                </li>
                <li class="header__transtion-item">
                    <a href="" class="header__transtion-link">Ho tro nguoi dung</a>
                </li>
            </ul>
         `;
         main.appendChild(toast); 
    }
}