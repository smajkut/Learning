const sliderBox = document.querySelector('.slider-box')
const leftBtn = document.querySelector('.btn-left')
const rightBtn = document.querySelector('.btn-right')
const carouselImages = document.querySelectorAll('.slider-img')
const carouselWidth = 900
const carouselSpeed = 3000

let index = 0

const handleCarousel = () => {
	index++
	changeImage()
}

// let startCarousel = setInterval(handleCarousel, carouselSpeed)

const changeImage = () => {
	if (index > carouselImages.length - 1) {
		index = 0
	} else if (index < 0) {
		index = carouselImages - 1
	}
	sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`
}


