const pulseBtns = document.querySelectorAll('.pulse-btn')

const btnAnimation = (e) => {
	//pozycja kliknięcia na stronie
	const top = e.clientY
	const left = e.clientX

	//pozycja przycisku
	const btnTopPosition = e.target.offsetTop
	const btnLeftPosition = e.target.offsetLeft

	//pozycja klikniaca w granicach przycisku
	const insideBtnTop = top - btnTopPosition
	const insideBtnLeft = left - btnLeftPosition

	const circle = document.createElement('span')
	circle.classList.add('circle')

	circle.style.top = insideBtnTop + 'px'
	circle.style.left = insideBtnLeft + 'px'
	e.target.appendChild(circle)

	setTimeout(() => {circle.remove()}, 500)
}

pulseBtns.forEach(pulseBtn => pulseBtn.addEventListener('click', btnAnimation))
