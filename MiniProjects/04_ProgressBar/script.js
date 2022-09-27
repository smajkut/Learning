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
}

const handlePrevBtn = () => {
	currentStep--

	if (currentStep < 1) {
		currentStep = steps.length
	}
}
