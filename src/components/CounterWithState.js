import React from 'react'
import { useState } from 'react'

export default function CounterWithState() {
    const[counter, setCounter]= useState(0);
   const Increment=()=>{
     setCounter(counter  + 1)
   }
   const Decrement=()=>{
     setCounter(counter  - 1)
   }
  return (
    <div>
        <h3>Function Counter Value: {counter}</h3>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement} style={{marginLeft:'4px'}}>Decrement</button>
    </div>
  )
}
