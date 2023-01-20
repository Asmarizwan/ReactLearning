import { nanoid } from 'nanoid'
import React from 'react'
import './styles.css'

export default function Die(props) {
    const faces =[
        [
            <div key={nanoid()} className='dot center middle'></div>
        ],

        [
         <div key={nanoid()} className='dot top right'></div>,
         <div key={nanoid()} className='dot bottom left'></div>
        ],

        [
         <div key={nanoid()} className='dot top right'></div>,
         <div key={nanoid()} className='dot bottom left'></div>,
         <div key={nanoid()} className='dot center middle'></div>
       
        ],

        [
         <div key={nanoid()} className='dot top left'></div>,
         <div key={nanoid()} className='dot top right'></div>,
         <div key={nanoid()} className='dot bottom left'></div>,
         <div key={nanoid()} className='dot bottom right'></div>
        ],

        [
         <div key={nanoid()} className='dot top left'></div>,
         <div key={nanoid()} className='dot top right'></div>,        
          <div key={nanoid()} className='dot center middle'></div>,
          <div key={nanoid()} className='dot bottom left'></div>,
          <div key={nanoid()} className='dot bottom right'></div>
        ],

        [
         <div key={nanoid()} className='dot top left'></div>,
         <div key={nanoid()} className='dot top right'></div>,
         <div key={nanoid()} className='dot center left'></div>,
         <div key={nanoid()} className='dot center right'></div>,
         <div key={nanoid()} className='dot bottom left'></div>,
         <div key={nanoid()} className='dot bottom right'></div>
        ],
]
    let face = faces[props.value -1]
    const styles={
        backgroundColor:  props.isHeld ? '#59E391' : 'white'
   
    }
  return (
    <div className='die-face' style={styles}
    onClick={props.holdDice}>
        {/* <h1 className='die-num'>{props.value}</h1>*/}
        {/* <span className="dot">{face} </span>    */}
        {face}
    </div>
  )
}
