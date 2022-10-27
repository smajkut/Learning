const menuItems = document.querySelectorAll('a')
const scrollSpySections = document.querySelectorAll('.section')
const navv = document.querySelector('nav')
const lastSection = document.querySelector('a:last-of-type')

const handleScrollSpy = () => {
	if (document.body.classList.contains('main-page')) {
		const sections = []

		scrollSpySections.forEach(section => {
			// console.log(`Wartość scrolla ${window.scrollY}`)
			//wartość scrolla
			// console.log(`Odl sekcji od górnej krawędzi ${section.offsetTop}`)
			//odległość danej sekcji od górnej krawędzi przeglądarki
			// console.log(`Wysokość każdej sekcji ${section.offsetHeight}`)
			//wysokość każdej z sekcji

			if(window.scrollY <= section.offsetTop + section.offsetHeight - 103){
				sections.push(section)

				const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

				menuItems.forEach(item => item.classList.remove('active'))

				activeSection.classList.add('active')
			}

			if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 160){
				menuItems.forEach(item => item.classList.remove('active'))
				lastSection.classList.add('active')
			}
		})
	}
}
console.log(navv.offsetHeight);
window.addEventListener('scroll', handleScrollSpy)
