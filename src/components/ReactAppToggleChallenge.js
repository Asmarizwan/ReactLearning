import React from 'react'
import './challengestyles.css'

export default function ReactAppToggleChallenge() {
  return (
    <div>
        <header>
            <nav className='navbar'>
            <img className='logo' src='.././logo192.png' alt='react-logo'/>
            <ul className='nav-items'>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
            </ul>
 
        </nav>
        </header>
 
        <h1>Fun facts about React</h1>
        <div>
           <ul>
            <li>Was first release in  2013</li> 
            <li>Was originally created by Jorden Walker</li> 
            <li>Has well over 100K stars on GitHub</li> 
            <li>It is maintained by Facebbok</li> 
            <li>Power thousands of enterprise apps, including mobile apps</li>
           </ul>
        </div>
    </div>
  )
}
