import React from 'react'

export default function Card(props) {
	return (
		<div className='card-box'>
			<div className='card-single'>
				<img className='card-image' src={props.image} alt={props.title} />
				<div className='card-info'>
					<div className='card-location'>
						<img src='/img/pin.png' />
						<h3>{props.location}</h3>
						<a href='{props.gMaps}'>View on Google Maps</a>
					</div>
					<div className='card-content'>
						<h1 className='card-title'>{props.title}</h1>
						<p className='card-date'>
							{props.start} - {props.end}
						</p>
						<p className='card-text'>{props.info}</p>
					</div>
				</div>
			</div>
		</div>
	)
}
