import React from 'react'
import WindowTracker from './WindowTracker';
import { useState } from 'react'

export default function WindowTrackerToggle() {

    const[show,setShow]= useState(true);
    const Toggle=()=>{
       setShow(prevShow => !prevShow) 
    }
  return (
    <div>
        <button onClick={Toggle}>Show Window Tracker</button>
       {show && <WindowTracker/>}
    </div>
  )
}
