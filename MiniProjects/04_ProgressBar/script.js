const formPages = document.querySelectorAll('.page')
const steps = document.querySelectorAll('.step')
const progressBar = document.querySelector('.progress-bar')
const prevBtn = document.querySelector('.btn-prev')
const nextBtn = document.querySelector('.btn-next')

let currentStep = 1

const handleNextBtn = () => {
	currentStep++

	if (currentStep > steps.length) {
		currentStep = steps.length
	}
	console.log(currentStep)
	handleProgressBar()
	// disabledBtn()
	// handleBtns()
}

const handlePrevBtn = () => {
	currentStep--

	if (currentStep < 1) {
		currentStep = 1
	}
	console.log(currentStep)
	handleProgressBar()
	// disabledBtn()
	// handleBtns()
}

const handleProgressBar = () => {
	steps.forEach((step, index) => {
		if (index < currentStep) {
			step.classList.add('active-step')
		} else {
			step.classList.remove('active-step')
		}
	})
	const activeStep = document.querySelectorAll('.active-step');
	// console.log((((activeStep.length-1) / (steps.length-1))*100+'%'))

	progressBar.style.width = ((activeStep.length - 1) / (steps.length - 1)) * 100 + '%';

	handleBtns()
	handleFormPage()
}

// const disabledBtn = () => {
// 	if (currentStep === 1) {
// 		prevBtn.setAttribute('disabled', '')
// 	} else {
// 		prevBtn.removeAttribute('disabled')
// 	}
// 	if (currentStep === 5) {
// 		nextBtn.setAttribute('disabled', '')
// 	} else {
// 		nextBtn.removeAttribute('disabled')
// 	}
// }

const handleBtns = () => {
	if(currentStep === 1){
		prevBtn.disabled = true
	} else if (currentStep === steps.length){
		nextBtn.disabled = true
	} else {
		prevBtn.disabled = false
		nextBtn.disabled = false
	}
}

const handleFormPage = () => {
	formPages.forEach(page => {
		if (currentStep == page.dataset.number) {
			page.classList.add('active-page')
		} else {
			page.classList.remove('active-page')
		}
	})
}

nextBtn.addEventListener('click', handleNextBtn)
prevBtn.addEventListener('click', handlePrevBtn)
// console.log(currentStep)
// disabledBtn()
// handleBtns()
handleProgressBar()
