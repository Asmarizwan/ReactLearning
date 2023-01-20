import React from 'react'
import airbnblogowhite from'../Images/airbnblogowhite.png';
import './styles.css'

export default function Navbar() {
  return (
    <nav className='Nav'>
        <img className='logo' src={airbnblogowhite} alt='logo' />
        
    </nav>
  )
}
