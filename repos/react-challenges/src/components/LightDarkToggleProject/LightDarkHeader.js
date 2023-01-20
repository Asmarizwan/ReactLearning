import React from 'react'
import './styles.css'

export default function LightDarkHeader (props) 
{
  return (
    <nav className={props.darkMode ?'dark':''}>
        <img src='.././logo192.png' alt='' className='navbar--icon'/>
        <h3 className='navbar--logo_text'>React Facts</h3>
        <div class = 'header--toggler'>
            <label className='header_toggler--label'>
                <div onClick={props.toggle} className='toggler--slider'>
                <div class = 'toggler--slider--circle '>                   
                 </div> 
                 <span className='toggler--light'></span> 
                 <span className='toggler--dark'></span> 
                
                </div>            
            </label>           
        </div>
        
    </nav>
  )
}
