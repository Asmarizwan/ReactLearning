import React from 'react'

export default function Box(props) {
    //setting state in a child component is not the right approach 
    //because it can create problems or wieredness happens later on in the application.
    // when you are passing the props and setting state in child component when
    // initializing this  state it is called DERIVED STATE which means that we have
    // two sources of truth. The best approach is to initialize the state in parent component. 
     // and pass it down to each of the box instances.
    // const [on, setOn]= useState(props.on)
   
    // const Toggle=()=>{     
    //     setOn(prevState => !prevState)  
    //    console.log(on)    
    //   }
  
    const styles= {
        backgroundColor:props.on ? 'blue' :'Grey'
    }  

  return (
    <div onClick={props.toggle} style={styles}className='box'  >
      
    </div>
  )
}
