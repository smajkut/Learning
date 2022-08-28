const hamburgerBtn = document.querySelector('.hamburger-btn')
const hamburgerList = document.querySelector('.hamburger-list')
const hamBtns = document.querySelectorAll('.ham-btn')


const hamActive = () => {
    hamburgerList.classList.toggle('nonactive')
}

const hamReset = () => {
    hamburgerList.classList.remove('nonactive')
}

hamburgerBtn.addEventListener('click', hamActive);

for(let i=0;i<hamBtns.length; i++){
    hamBtns[i].addEventListener('click', hamActive);
}