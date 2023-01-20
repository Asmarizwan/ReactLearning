import React, { useState } from 'react'
import './stylesheet.css'

export default function EmailForm() {
    const[formData, setFormData]= useState({
        email:'',
        password:'',
        confirmPassword:'',
        IsNewsletter: true,
    })
    const handleSubmit=(event)=>{
        event.preventDefault()
        
       if( formData.password === formData.confirmPassword)
       {
         console.log('Successfully Signed up')
        }
         else {
            console.log('Password do not match')
            return
        }
        if(formData.IsNewsletter)
        {
          console.log('Thanks for signing up for our newsletter!')
         }
          
    }

    const handleChange=(event)=>{
        const{name,value, checked, type}= event.target

        setFormData(prevFormData =>({
            
                ...prevFormData, [name]: type ==='checkbox'? checked : value
            }))        
    }   
  return (
    <div className='form-container'>
    <form className='form' onSubmit={handleSubmit}>
    
         <div>
        <input
         type='email'
         name='email'
         onChange={handleChange}
         placeholder='Email'
         value={formData.email}
         />
           </div> 
         <br/> 
         <div>
        <input
          type='password'
          name='password'
          onChange={handleChange}
          placeholder='Password'
          value={formData.password}
          />  </div> 
          <br/> 
          <div>
        <input
         type='confirmPassword'
         name='confirmPassword'
         onChange={handleChange}
         placeholder='Confirm password'
         value={formData.confirmPassword}/>
        
         </div> 
         <br/> 
         <div>
        <input
         id='newsletter'
         className='check'
         name='IsNewsletter'
         type='checkbox'
         onChange={handleChange}
         checked={formData.IsNewsletter}
         value={formData.IsNewsletter}
         />
        <label className='check-label' htmlFor='newsletter'>I want to join the newsletter</label>
        </div>
        <button className='btn'>Sign Up</button>
    </form>
    </div>
  )
}
