import React from 'react'
import Nav from './Nav'
import Card from './Card'
import data from './data'

export default function App() {
	const cardData = data.map((el) => {
		return (
			<Card
				key={el.id}
				title={el.title}
				location={el.location}
				gMaps={el.googleMapsUrl}
				start={el.startDate}
				end={el.endDate}
				info={el.description}
				image={el.imageUrl}
			/>
		)
	})

	return (
		<div className='app-container'>
			<Nav />
			<section className='card-box'>{cardData}</section>
		</div>
	)
}
