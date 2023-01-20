import React from 'react'
import './styles.css'
import trollFace from '../images/trollFace.png'

export default function Header() {
  return (
    <header className='header'>        
        <img className='header-image' src={trollFace} alt='' />  
          
           <h2 className='header-title'>MemeGenerator</h2> 
           <h4 className='header-subtitle'>React Course - Project 3</h4>  
              
    </header>
  )
}
