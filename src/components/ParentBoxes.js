import React from 'react'
import Boxes from '../Boxes'
import { useState } from 'react'
import './styles.css';
import Box from './Box';

export default function ParentBoxes(props) {
    const [squares, setSquares]= useState(Boxes);
     
    const styles={
       backgroundColor: props.darkMode ? '#222222' : '#cccccc'
    }
    //imparitive way of writing the code 
    // const Toggle=(id)=>{ 
    //  setSquares(prevSquare => {
    //    const newSquares = []
    //   for(let i=0; i<prevSquare.length; i++){
    //     const currentSquare = prevSquare[i]
    //     if(currentSquare.id === id){
    //       const updatedSquare={
    //         ...currentSquare,
    //         on: !currentSquare.on
    //       }
    //       newSquares.push(updatedSquare)
    //     }else
    //     {
    //       newSquares.push(currentSquare)
    //     }
    //   }
    //   return newSquares;
    //  })
    // }
    //declarative waya of writing the same function
    const Toggle=(id)=>{
      setSquares(prevSquares=>{
        return prevSquares.map((square)=>{
          return square.id === id ? {...square, on: !square.on} : square
        })
      })
    }
    const squareElements = squares.map(square=>(
      <Box key={square.id} 
           on={square.on} 
           //instead of passing a seperate id we can pass the id in a toggle func which will 
           //remember every box id itself
           toggle={()=>Toggle(square.id)}/>
    ))
   
 
  return (
    <div>
       {squareElements}
    </div>
  )
}
