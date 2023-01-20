import React from 'react'
import { useState } from 'react'
import  styles from'./FormWithFunction.module.css'


export default function FormWithFunction() {
    const [firstName, setFirstName]=useState("");
    const[lastName, setLastName]=useState("");

    const handleSubmit=(event)=>{
        event.preventDefault();
    console.log(
        {
        fName: firstName,
        lName: lastName
    
    })
    }
    const handleChange=(event)=>{
     
        setFirstName(event.target.value);
        console.log(event.target.value)
    }
    const handleLastNameChange=(event)=>{
        
        setLastName(event.target.value);
        console.log(event.target.value)
    }
  return (
    <div> 
        <form onSubmit={handleSubmit}>
    <input onChange={handleChange} type ={Text} value={firstName}></input>
    <input className={styles.input} onChange={handleLastNameChange} type ={Text} value={lastName}></input>
    <button  className="btn-submit"type="submit">Submit</button>
</form>
</div>
  )
}
