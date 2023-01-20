import React from 'react'


export default function Profile(props) {
    //destructre the props
   const{name, lastName}= props;
  return (
   
    <div><h1>{name} {lastName}</h1>
    {props.children}
    </div>
  )
}
