import React from 'react'
import Infobox from './Infobox'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'

export default function App() {
	return (
		<div className='app--container'>
			<div className='app--box'>
				<Infobox />
				<About />
				<Interests />
				<Footer />
			</div>
		</div>
	)
}
