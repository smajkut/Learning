const burgerMenu = document.querySelector('.burger-menu')
const bar1 = document.querySelector('.bar-1')
const bar2 = document.querySelector('.bar-2')
const bar3 = document.querySelector('.bar-3')

const burgerMenuActive = () => {
    bar1.classList.toggle('bar-a-1');
    bar2.classList.toggle('bar-a-2');
    bar3.classList.toggle('bar-a-3');
}

burgerMenu.addEventListener('click', burgerMenuActive)