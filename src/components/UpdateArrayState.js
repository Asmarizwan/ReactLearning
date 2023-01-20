import React from 'react'
import { useState } from 'react'

export default function UpdateArrayState() {
    //convert this code to state
    // const thingsArray =['Thing 1', 'Thing 2']
    // const element= thingsArray.map(thing=> <p key={thing}>{thing}</p>)

    const[things, setThings] = useState(['Thing 1', 'Thing 2'])
    
    const list= things.map(thing=><li>{thing}</li>)
      //to set a new value in array we need to return an []
        //then we need to spread in an existing array by[...prevArray]
        //Then add a new value to the array which updates the state of [] 
   
    const addItem =()=>{
         
        //the sytext below is one liner

    //  setThings(prevArray=> [...prevArray, `Thing ${prevArray.length + 1}`])

      //the syntex below is multiliner so we need to usse return statement in this case
     setThings(prevArray=>{ 
      return [...prevArray, `Thing ${prevArray.length + 1}`]})
    }
  return (
    <div style={{backgroundColor:'burlywood'}}>
        
        <button onClick={addItem} 
        style={{marginTop:'5rem', 
        marginBottom: '2rem',
        backgroundColor:'brown',
        color:'whitesmoke',
        width:'7rem',
        height:'2rem',
        borderRadius:'5px'
        }}>Add Item</button>
        <div style={{backgroundColor:'wheat'}}>
        {list}
        </div>
    </div>
  )
}
