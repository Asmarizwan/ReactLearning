import React from 'react'
import heroImage from '../Images/heroImage.png'
import './styles.css'

export default function Hero() {
  return (
    <section className='hero'>
        <img className='heroImg' src={heroImage} alt=''/>
        <h1 className='heroHeading'>Online Experience</h1>
        <h3 className='heroText'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
        </h3>
    </section>
  )
}
