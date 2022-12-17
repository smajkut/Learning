const burgerMenu = document.querySelector('.burger-menu')
const bar1 = document.querySelector('.bar-1')
const bar2 = document.querySelector('.bar-2')
const bar3 = document.querySelector('.bar-3')
const navHeader = document.querySelector('.nav-header')
const mainNav = document.querySelector('.navigation')
const sidebar = document.querySelector('.sidebar')

const collectionHeadingImgBox = document.querySelector('.wallpaper-section-heading-imgs-box')
const collectionHeadingImages = document.querySelectorAll('.wallpaper-section-heading-img')
const collectionHeadingSingleImg = document.querySelector('.wallpaper-section-heading-imgs')

const collectionHeadingBox = document.querySelector('.collection-heading-box')
const collectionHeadings = document.querySelectorAll('.collection-heading-item')
const collectionSingleHeading = document.querySelector('.collection-headings')

const collectionTitleBox = document.querySelector('.collection-title-box')
const collectionTitles = document.querySelectorAll('.collection-title-item')
const collectionSingleTitle = document.querySelector('.collection-titles')

const collectionTextBox = document.querySelector('.collection-text-box')
const collectionTexts = document.querySelectorAll('.collection-text-item')
const collectionSigleText = document.querySelector('.collection-texts')

const collectionGalleryBox = document.querySelector('.collection-gallery-box')
const collectionGallerySingle = document.querySelector('.collection-gallery')
const collectionGallery = document.querySelectorAll('.collection-gallery-item')

const collectionCarouselBtns = document.querySelectorAll('.collection-carousel-btn')

const patternGalleryBox = document.querySelector('.pattern-gallery-img-box')
const patternGalleryImages = document.querySelectorAll('.pattern-gallery-img-box img')
const patternBtnLeft = document.querySelector('.pattern-arrow-left')
const patternBtnRight = document.querySelector('.pattern-arrow-right')

const fabricsGalleryBox = document.querySelector('.fabrics-gallery-img-box')
const fabricsGalleryImages = document.querySelectorAll('.fabrics-gallery-img-box img')
const fabricsBtnLeft = document.querySelector('.fabrics-arrow-left')
const fabricsBtnRight = document.querySelector('.fabrics-arrow-right')

const interiorParalaxSmall = document.querySelector('.interior-img-small') 

let indexCollectionHeadingImgCarousel = 0
let indexCollectionHeadingCarousel = 0
let indexCollectionTitleCarousel = 0
let indexCollectionTextCarousel = 0
let indexCollectionGalleryCarousel = 0

let valueY

const valueYRefresh = () => {
	valueY = window.scrollY
	
}

const burgerMenuActive = () => {
	bar1.classList.toggle('bar-a-1')
	bar2.classList.toggle('bar-a-2')
	bar3.classList.toggle('bar-a-3')
	sidebar.classList.toggle('sidebar-show')
}

const navEfects = () => {
	if (window.scrollY > 20) {
		navHeader.style.color = '#0c473a'
		navHeader.style.filter = 'drop-shadow( 0 0 14px #093a2f)'
	} else {
		navHeader.style.color = '#222'
		navHeader.style.filter = ''
	}


	if (window.scrollY > 30) {
		mainNav.style.boxShadow = '0 0 20px 1px #093a2f'
	} else {
		mainNav.style.boxShadow = ''
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
		-indexCollectionHeadingImgCarousel * collectionHeadingSingleImg.offsetWidth
	}px)`
}
const changeCollectionHeading = () => {
	if (indexCollectionHeadingCarousel > collectionHeadings.length - 1) {
		indexCollectionHeadingCarousel = 0
	} else if (indexCollectionHeadingCarousel < 0) {
		indexCollectionHeadingCarousel = collectionHeadings.length - 1
	}
	collectionHeadingBox.style.transform = `translateX(${
		-indexCollectionHeadingCarousel * collectionSingleHeading.offsetWidth
	}px)`
}

const changeCollectionTitle = () => {
	if (indexCollectionTitleCarousel > collectionTitles.length - 1) {
		indexCollectionTitleCarousel = 0
	} else if (indexCollectionTitleCarousel < 0) {
		indexCollectionTitleCarousel = collectionTitles.length - 1
	}
	collectionTitleBox.style.transform = `translateX(${
		-indexCollectionTitleCarousel * collectionSingleTitle.offsetWidth
	}px)`
}

const changeCollectionText = () => {
	if (indexCollectionTextCarousel > collectionTexts.length - 1) {
		indexCollectionTextCarousel = 0
	} else if (indexCollectionTextCarousel < 0) {
		indexCollectionTextCarousel = collectionTexts.length - 1
	}
	collectionTextBox.style.transform = `translateX(${
		-indexCollectionTextCarousel * collectionSigleText.offsetWidth
	}px)`
}

const changeCollectionGallery = () => {
	if (indexCollectionGalleryCarousel > collectionGallery.length - 1) {
		indexCollectionGalleryCarousel = 0
	} else if (indexCollectionGalleryCarousel < 0) {
		indexCollectionGalleryCarousel = collectionGallery.length - 1
	}
	collectionGalleryBox.style.transform = `translateX(${
		-indexCollectionGalleryCarousel * collectionGallerySingle.offsetWidth
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

let patternGalleryScroll = patternGalleryBox.scrollLeft

const patternBtnDisabled = () => {
	if (patternGalleryScroll < 100) {
		patternBtnLeft.style.opacity = '0.5'
	} else {
		patternBtnLeft.style.opacity = '1'
	}

	if(patternGalleryScroll > ((patternGalleryImages.length - 2) * 320)){
		patternBtnRight.style.opacity = '0.5'
	} else {
		patternBtnRight.style.opacity = '1'
	}
}
const handlePatternGalleryRight = () => {
	patternGalleryBox.scrollLeft += 300
}
const handlePatternGalleryLeft = () => {
	patternGalleryBox.scrollLeft -= 300
}

let fabricsGalleryScroll = fabricsGalleryBox.scrollLeft

const fabricsBtnDisabled = () => {
	if (fabricsGalleryScroll < 100) {
		fabricsBtnLeft.style.opacity = '0.5'
	} else {
		fabricsBtnLeft.style.opacity = '1'
	}

	if(fabricsGalleryScroll > ((fabricsGalleryImages.length - 2) * 320)){
		fabricsBtnRight.style.opacity = '0.5'
	} else {
		fabricsBtnRight.style.opacity = '1'
	}
}
const handleFabricsGalleryRight = () => {
	fabricsGalleryBox.scrollLeft += 300
}
const handleFabricsGalleryLeft = () => {
	fabricsGalleryBox.scrollLeft -= 300
}

const interiorParalax = () => {
	let paralaxTranslateYInterior = -250 + (valueY * 4)/100 + '%'
	interiorParalaxSmall.style.transform = `translateY(${paralaxTranslateYInterior})`;
}

const paralaxBox = () => {
	interiorParalax()
}

//addEventListener

window.addEventListener('scroll', valueYRefresh)

collectionCarouselBtns.forEach((btn) => {
	btn.addEventListener('click', handleCollectionCarouselBtns)
})

burgerMenu.addEventListener('click', burgerMenuActive)
window.addEventListener('scroll', navEfects)

patternGalleryBox.addEventListener('scroll', () => {
	patternGalleryScroll = patternGalleryBox.scrollLeft;
	patternBtnDisabled()
})
patternBtnDisabled()
patternBtnRight.addEventListener('click', handlePatternGalleryRight)
patternBtnLeft.addEventListener('click', handlePatternGalleryLeft)

fabricsGalleryBox.addEventListener('scroll', () => {
	fabricsGalleryScroll = fabricsGalleryBox.scrollLeft;
	fabricsBtnDisabled()
})
fabricsBtnDisabled()
fabricsBtnRight.addEventListener('click', handleFabricsGalleryRight)
fabricsBtnLeft.addEventListener('click', handleFabricsGalleryLeft)

window.addEventListener('scroll', paralaxBox)