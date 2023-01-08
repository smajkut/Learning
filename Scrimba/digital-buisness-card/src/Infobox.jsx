import React from 'react'

export default function Infobox() {
	return (
		<nav>
			<img src='photo.png' />
			<h1>Laura Smith</h1>
			<h3>Frontend Developer</h3>
			<p>laurasmith.website</p>
			<div className='info--btns'>
				<p className='btn--email'><i class="fa-solid fa-envelope"></i>Email</p>
				<p className='btn--linkedin'><i class="fa-brands fa-linkedin"></i>LinkedIn</p>
			</div>
		</nav>
	)
}
