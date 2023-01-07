import React from 'react'

export default function Header() {
	return (
		<div>
			<header className='header'>
				<nav className='navigation'>
					<img className='img-style' src={'./react-logo.png'} alt={'React Logo'} />
					<ul className='nav-items'>
						<li>Pricing</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</nav>
			</header>
		</div>
	)
}
