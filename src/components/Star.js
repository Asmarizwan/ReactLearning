import React from 'react'
import starEmpty from '../images/starEmpty.png'
import redstar from '../images/redstar.png'

export default function Star(props) {
    const toggleIcon = props.isFilled ? <img src={redstar} alt=''/> :  <img src={starEmpty} alt=''/>
 
  return (
    <div onClick={props.handleToggle}>{toggleIcon}</div>
  )
}
