import React from 'react'
import './styles.css'
import { useState } from 'react';
import TempCount from './TempCount';

export default function Temp() {
    const[count, setCount]=  useState(0);
    
    const addCount=()=>{
        setCount(prev=> prev +1 )
    }
    const subtractCount=({number})=>{
        setCount(count - 1 )
    }
  return (
    <div>
        <button className="button-minus" onClick={subtractCount}>-</button>
       <TempCount number={count}/>
        <button className="button-plus" onClick={addCount}>+</button>

        
    </div>
   
  )
}
