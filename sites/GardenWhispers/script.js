const burgerMenu = document.querySelector('.burger-menu')
const bar1 = document.querySelector('.bar-1')
const bar2 = document.querySelector('.bar-2')
const bar3 = document.querySelector('.bar-3')
const sidebar = document.querySelector('.sidebar')
const collectionBtn = document.querySelector('.collection-btn')
const wallpaperHeadingImg = document.querySelectorAll('.wallpaper-section-head-img')


const burgerMenuActive = () => {
	bar1.classList.toggle('bar-a-1')
	bar2.classList.toggle('bar-a-2')
	bar3.classList.toggle('bar-a-3')
	sidebar.classList.toggle('sidebar-show')
	collectionBtn.classList.toggle('hide') // do naprawy
}

const changeWallpaperHeadingImg = () => {
    
}


burgerMenu.addEventListener('click', burgerMenuActive)

changeWallpaperHeadingImg()