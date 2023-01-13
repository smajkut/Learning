import React from 'react'
import Navbar from '../src/Navbar'
import Hero from '../src/Hero'
import Card from '../src/Card'
import data from '../data'

export default function App() {
	const cardData = data.map((card) => {
		return (
			<Card
				img={card.coverImg}
				rating={card.stats.rating}
				reviewCount={card.stats.reviewCount}
				location={card.location}
				title={card.title}
				price={card.price}
			/>
		)
	})

	return (
		<div>
			<Navbar />
			<Hero />
			<section className='cards-list'>{cardData}</section>
		</div>
	)
}

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/
