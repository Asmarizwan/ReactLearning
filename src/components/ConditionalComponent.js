import React from 'react'
import { useState } from 'react'
import CounterWithState from './CounterWithState';
import Message from './Message';

export default function ConditionalComponent() {
    const[display, setDisplay]= useState(true);
    if(!display){
    return( <div>
       <CounterWithState/>
           </div>
    );}
    else{
        return(<div>
        
        <Message/>
    </div> );
    }
    
 
   
  
}
