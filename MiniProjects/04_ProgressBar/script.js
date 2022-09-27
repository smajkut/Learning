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
	// console.log(currentStep);
	handleProgressBar()
}

const handlePrevBtn = () => {
	currentStep--
	
	if (currentStep < 1) {
		currentStep = 1
	}
	// console.log(currentStep);
	handleProgressBar()

}

const handleProgressBar = () => {
	steps.forEach((step, index) => {
		if(index<currentStep){
			step.classList.add('active-step')
		} else{
			step.classList.remove('active-step')
		}
	})
	const activeStep = document.querySelectorAll('.active-step')
	// console.log((((activeStep.length-1) / (steps.length-1))*100+'%'))
		progressBar.style.width = (((activeStep.length-1) / (steps.length-1))*100+'%')
}

nextBtn.addEventListener('click', handleNextBtn)
prevBtn.addEventListener('click', handlePrevBtn)