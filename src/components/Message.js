import React from 'react'
import { useState } from 'react';

export default function Message() {
  const[message, setMessage]= useState(['a','b','c']);
 
  const msg=()=>{
    setMessage(message.length === 0  ? <h1>'You have{message.length} new messages'</h1>:
    <h1>'You are all caught up!'</h1> )
  }

  return (
    <div>
      {
      message.length === 0 ? 
      <h1>You are all caught up!</h1> : 
      <h1>You have {message.length} unread {message.length > 1 ? 'messages' : 'message'}</h1>
      
      }
    </div>
  )
}
