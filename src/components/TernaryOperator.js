import React, { useState } from 'react'
import './styles.css'

export default function TernaryOperator(props) {
   // const isGoingOut= true;
    //this is called ternary operator
    // let answer= !isGoingOut? 'Yes': 'No'
    //Instead of using if else we use ternary operator in react
    // if(!isGoingOut)
    // {
    //     answer='Yes'
    // }
    // else{
    //     answer='No'
    // }

    //instead of hardcode we are now using state
    const[isGoingOut, setIsGoingOut] = useState(false);
    const answer =()=>{
        setIsGoingOut(isGoingOut=> !isGoingOut
        )}
    
  return (
    <div className='state'>
        <h1>Do I feel like going out</h1>
        <div > 
               {/* <h1>{isGoingOut? 'Yes':'No'}</h1>*/}   
        <h1> <button  className='ternary-btn' onClick={answer}>
            {isGoingOut ? 'Yes': 'No'}
         </button>
         
            </h1>
        </div> 
          
        </div>
  )
}
