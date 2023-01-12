import React from 'react'
import Navbar from "../src/Navbar"
import Hero from "../src/Hero"
import Card from "../src/Card"

export default function App() {
  return (
        <div>
            <Navbar />
            <Hero />
            <Card 
              img="../images/katie-zaferes.png"
              rating="5.0"
              reviewCount="(6)"
              country="USA"
              title="Life Lessons with Katie Zaferes"
              price="136"
            />
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