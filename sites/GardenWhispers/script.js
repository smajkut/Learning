const burgerMenu = document.querySelector('.burger-menu')
const bar1 = document.querySelector('.bar-1')
const bar2 = document.querySelector('.bar-2')
const bar3 = document.querySelector('.bar-3')
const navHeader = document.querySelector('.nav-header')
const sidebar = document.querySelector('.sidebar')
const collectionBtn = document.querySelector('.collection-btn')

const collectionHeadingImgBox = document.querySelector('.wallpaper-section-heading-imgs-box')
const collectionHeadingImages = document.querySelectorAll('.wallpaper-section-heading-img')

const collectionHeadingBox = document.querySelector('.collection-heading-box')
const collectionHeadings = document.querySelectorAll('.collection-heading-item')

const collectionTitleBox = document.querySelector('.collection-title-box')
const collectionTitles = document.querySelectorAll('.collection-title-item')

const collectionTextBox = document.querySelector('.collection-text-box')
const collectionTexts = document.querySelectorAll('.collection-text-item')

const collectionGalleryBox = document.querySelector('.collection-gallery-box')
const collectionGallery = document.querySelectorAll('.collection-gallery-item')

const collectionCarouselBtns = document.querySelectorAll('.collection-carousel-btn')

let indexCollectionHeadingImgCarousel = 0
let indexCollectionHeadingCarousel = 0
let indexCollectionTitleCarousel = 0
let indexCollectionTextCarousel = 0
let indexCollectionGalleryCarousel = 0

const burgerMenuActive = () => {
	bar1.classList.toggle('bar-a-1')
	bar2.classList.toggle('bar-a-2')
	bar3.classList.toggle('bar-a-3')
	sidebar.classList.toggle('sidebar-show')
	collectionBtn.classList.toggle('hide') // do naprawy
}

const navHeaderColorChanger = () => {
	if (window.scrollY > 100) {
		navHeader.style.color = '#999'
		navHeader.style.filter = 'drop-shadow( 0 0 12px #fff)'
	} else {
		navHeader.style.color = '#222'
		navHeader.style.filter = ''
	}
}

const handleCollectionCarousel = () => {
	indexCollectionHeadingImgCarousel++
	indexCollectionHeadingCarousel++
	indexCollectionTitleCarousel++
	indexCollectionTextCarousel++
	indexCollectionGalleryCarousel++
	changeCollectionHeadingImg()
	changeCollectionHeading()
	changeCollectionTitle()
	changeCollectionText()
	changeCollectionGallery()
	bodyColorChanger()
	activateCarouselBtn()
}

let startCollectionCarousel = setInterval(handleCollectionCarousel, 6000)

const changeCollectionHeadingImg = () => {
	if (indexCollectionHeadingImgCarousel > collectionHeadingImages.length - 1) {
		indexCollectionHeadingImgCarousel = 0
	} else if (indexCollectionHeadingImgCarousel < 0) {
		indexCollectionHeadingImgCarousel = collectionHeadingImages.length - 1
	}
	collectionHeadingImgBox.style.transform = `translateX(${
		-indexCollectionHeadingImgCarousel * collectionHeadingImages[indexCollectionHeadingImgCarousel].offsetWidth
	}px)`
}
const changeCollectionHeading = () => {
	if (indexCollectionHeadingCarousel > collectionHeadings.length - 1) {
		indexCollectionHeadingCarousel = 0
	} else if (indexCollectionHeadingCarousel < 0) {
		indexCollectionHeadingCarousel = collectionHeadings.length - 1
	}
	collectionHeadingBox.style.transform = `translateX(${
		-indexCollectionHeadingCarousel * collectionHeadings[indexCollectionHeadingCarousel].offsetWidth
	}px)`
}

const changeCollectionTitle = () => {
	if (indexCollectionTitleCarousel > collectionTitles.length - 1) {
		indexCollectionTitleCarousel = 0
	} else if (indexCollectionTitleCarousel < 0) {
		indexCollectionTitleCarousel = collectionTitles.length - 1
	}
	collectionTitleBox.style.transform = `translateX(${
		-indexCollectionTitleCarousel * collectionTitles[indexCollectionTitleCarousel].offsetWidth
	}px)`
}

const changeCollectionText = () => {
	if (indexCollectionTextCarousel > collectionTexts.length - 1) {
		indexCollectionTextCarousel = 0
	} else if (indexCollectionTextCarousel < 0) {
		indexCollectionTextCarousel = collectionTexts.length - 1
	}
	collectionTextBox.style.transform = `translateX(${
		-indexCollectionTextCarousel * collectionTexts[indexCollectionTextCarousel].offsetWidth
	}px)`
}

const changeCollectionGallery = () => {
	if (indexCollectionGalleryCarousel > collectionGallery.length - 1) {
		indexCollectionGalleryCarousel = 0
	} else if (indexCollectionGalleryCarousel < 0) {
		indexCollectionGalleryCarousel = collectionGallery.length - 1
	}
	collectionGalleryBox.style.transform = `translateX(${
		-indexCollectionGalleryCarousel * collectionGallery[indexCollectionGalleryCarousel].offsetWidth
	}px)`
}

const bodyColorChanger = () => {
	if (indexCollectionHeadingImgCarousel === 0) {
		document.documentElement.style.setProperty('--body-color', '#c9d8cb')
	} else if (indexCollectionHeadingImgCarousel === 1) {
		document.documentElement.style.setProperty('--body-color', '#d9dee2')
	} else if (indexCollectionHeadingImgCarousel === 2) {
		document.documentElement.style.setProperty('--body-color', '#f1e2c5')
	}
}

const activateCarouselBtn = () => {
	collectionCarouselBtns.forEach((btn) => {
		btn.classList.remove('active-carousel-btn')
	})
	collectionCarouselBtns[indexCollectionHeadingImgCarousel].classList.add('active-carousel-btn')
}

const handleCollectionCarouselBtns = (e) => {
	if (e.target.classList.contains('c-btn-1')) {
		indexCollectionHeadingImgCarousel = 0
		indexCollectionHeadingCarousel = 0
		indexCollectionTitleCarousel = 0
		indexCollectionTextCarousel = 0
		indexCollectionGalleryCarousel = 0
	} else if (e.target.classList.contains('c-btn-2')) {
		indexCollectionHeadingImgCarousel = 1
		indexCollectionHeadingCarousel = 1
		indexCollectionTitleCarousel = 1
		indexCollectionTextCarousel = 1
		indexCollectionGalleryCarousel = 1
	} else if (e.target.classList.contains('c-btn-3')) {
		indexCollectionHeadingImgCarousel = 2
		indexCollectionHeadingCarousel = 2
		indexCollectionTitleCarousel = 2
		indexCollectionTextCarousel = 2
		indexCollectionGalleryCarousel = 2
	}
	changeCollectionHeadingImg()
	changeCollectionHeading()
	changeCollectionTitle()
	changeCollectionText()
	changeCollectionGallery()
	bodyColorChanger()
	activateCarouselBtn()
	clearInterval(startCollectionCarousel)
	startCollectionCarousel = setInterval(handleCollectionCarousel, 10000)
}

collectionCarouselBtns.forEach((btn) => {
	btn.addEventListener('click', handleCollectionCarouselBtns)
})

burgerMenu.addEventListener('click', burgerMenuActive)
window.addEventListener('scroll', navHeaderColorChanger)
