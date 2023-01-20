import React from 'react'
import { useState } from 'react'

export default function ElementVariable() {
    const[display, setDisplay]= useState(true);
    //another way of written the condition is   
    return(
     !display ?
     (<div>This element returns when the condition is true</div>)
     :
     (<div>This element returns when the condition is false</div>)
     )
//     let output;
//     if(display)
//     {
//             output =<h2>This element returns when the condition is true</h2>
//     }
//     else
//     {
//              output =<h2>This element returns when the condition is false</h2>
//     }
//   return (
//     <div>{output}</div>
//   )
}
