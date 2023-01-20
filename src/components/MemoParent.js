import React, { useState } from 'react'
import MemoChild from './MemoChild';

export default function MemoParent() {
    const[parentCount, setParentCount]= useState(0);
    const[childCount, setChildCount]= useState(0);

    const handleIncrement= ()=>{
        setParentCount(parentCount + 1)
    }
    const handleChildIncrement= ()=>{
        setChildCount(childCount + 1)
    }
  return (
    <div>
        <h1>
        Parent Count is: {parentCount}
        </h1>
        <MemoChild childCount={childCount}/>
        <button onClick={handleIncrement}>Parent Count Increment</button>
        <button onClick={handleChildIncrement}>Child count Increment</button>
        </div>
  )
}
