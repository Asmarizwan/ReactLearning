import React, { useState } from 'react'
import './stylesheet.css'
export default function FormWithRadioAndCheckbox() {
    const[formData, setFormData]= useState({
        firstName:'', 
        lastName: '',
        email :'',
        comments: '',
        isFriendly: true,
        employment:'',
        favColor:'',
    })
    console.log(formData.favColor) 
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData)
       
    }
    const handleChange=(event)=>{
        //destructure event.target.name and event.target.value
        //for checkbox we need to pass other properties like checked and type
      
        const{name, value, type, checked}= event.target
       setFormData(prevFormData=>{
        return{
            ...prevFormData, [name]: type ==='checkbox' ?  checked : value,
        }
       })
       
    }
   
  return (
    //value property is help to have controlled state in a component
    // When the value propert is assigned the input stop controlling 
    //the value typed in input box instead react is controlling the value
    //every change that is made here runs the handle function which then 
    //updates the correct piece of state(firstname or lastname and so on)
    //which rerenders the forms and sets the value of form's input to be
    //whatever state is. Now state is cottrolling the change in input rather than
    //input box telling the value.
    <form onSubmit={handleSubmit}>
        <input type='text'
         name='firstName'
         placeholder='First Name' 
         className='form-input' 
         onChange={handleChange}
         value={formData.firstName}/>

        <input type='text' 
         placeholder='Last Name' 
         name ='lastName'
         className='form-input' 
         onChange={handleChange}
         value={formData.lastName} />

    <input type='text'
        placeholder='Email' 
        name ='email'
        className='form-input' 
        onChange={handleChange}
        value={formData.email}/>
         <br/>
        <textarea value={formData.comments}
          className='form-textarea' 
          onChange={handleChange}
          name ='comments'
          /> 
         <input 
         className='form-checkbox'
         name='isFriendly'
         id='isFriendly'         
         type='checkbox' 
         checked={formData.isFriendly }
         onChange={handleChange}/>
         <label  className='form-checkbox-label' htmlFor='isFriendly'>Are you friendly</label>
       <br/>
         <fieldset>
            <legend>Current employment status</legend>
         <input
            type='radio'
            id='unemployed'
            name='employment'            
            value='unemployed'
            onChange={handleChange}
            checked={formData.employment==='unemployed'}/>
        
         <label htmlFor='unemployed'>Unemployed</label>
         <br/>
         <input
            type='radio'
            id='part-time'
            name='employment'
            value='part-time'
            onChange={handleChange}
            checked={formData.employment==='part-time'}/>
            <label htmlFor='part-time'>Part-time</label>
         <br/>
         <input
            type='radio'
            id='full-time'
            name='employment'
            value='full-time'
            onChange={handleChange}
            checked={formData.employment==='full-time'}/>
         <label htmlFor='full-time'>Full-time</label>
         <br/>
         </fieldset>
         <br/>
         <label htmlFor='favColor'>What is your favorite color?</label>
         <br/>
         <select id='favColor'
                 value={formData.favColor}
                 onChange={handleChange}
                 name= 'favColor'>  
         <option id=''>-- Choose --</option>         
         <option id='red'>Red</option>
         <option id='orange'>Orange</option>
         <option id='yellow'>Yellow</option>
         <option id='green'>Green</option>
         <option id='blue'>Blue</option>
         <option id='violet'>Violet</option>
         <option id='indigo'>Indigo</option>
         </select>
         <br/>
        <button className='form-btn' >Submit</button>
    </form>
  )
}
