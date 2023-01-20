import React, { useState } from 'react'
import './styles.css'
import user from '../images/user.png'
import Star from './Star'
export default function Toggle() {
    const[contact, setContact]=useState({
        firstName :'John',
        lastName :'Doe',
        Phone: '+46 76 2222222',
        Email:'somerealname@mail.com',
        isFavorite: true

    })
    // we cannot return only one property in an object when setting a state therefore we must 
   //return the whole object. The following example execute toggle but the othe info will disappear
    
   // const toggleFavorite =()=>{
    //     setContact(prevState => {
    //         return{
    //             isFavorite: !prevState.isFavorite
    //         }
    //     })
    // }

    //right way to return the object with toggle Or use a spread operator insted

        // const toggleFavorite =()=>{
        //         setContact(prevState => {
        //             return{
        //                 firstName :'John',
        //                 lastName :'Doe',
        //                 Phone: '+46 76 2222222',
        //                 Email:'somerealname@mail.com',
        //                 isFavorite: true,
        //                 isFavorite: !prevState.isFavorite
        //             }
        //         })
        //     }
//OR 
        const toggleFavorite =()=>{
            setContact(prevState => {
                return{
                   ...prevState,
                    isFavorite: !prevState.isFavorite
                }
            })
        }

   
  return (
    <main>
        <article className='card'>
        <img src={user} alt='' className='card-img'/>
        <div className='container'>
        {/* <img src={toggleFavorite} alt='' className='card-starimg'/>
       */}
       {/* if you want to pass the parent function to child component you need to pass as a custom 
       property and it is usually named as handle..and what ever the function name is. In the 
       following example we are now going to pass the function to the child component as a custom 
       props and recieved in child component via props it will handle the toggle property name is 
       'handleToggle' */}
<div>
    <Star isFilled={contact.isFavorite} handleToggle={toggleFavorite}/>
</div>
        <h2>{contact.firstName} {contact.lastName}</h2>
        <p>{contact.Phone}</p>
        <p>{contact.Email}</p>
        </div>
        </article>
    </main>
  )
}
