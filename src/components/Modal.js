import React from 'react'
import { createPortal } from 'react-dom'
//modal are used to create a popup windows and required a new din in index.html 
//rather than using the same div with id= root
//in return you need to pass the component itself and then render the 
export default function Modal() {
  return createPortal(
    <div>
        Modal        
    </div>,document.getElementById('modal')

  )
}
