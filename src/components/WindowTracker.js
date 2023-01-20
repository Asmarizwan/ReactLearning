import { useEffect, useState } from "react"


export default function WindowTracker() {

    const[windowWidth, setWindowWidth]= useState(window.innerWidth)
 
 useEffect(()=>{
   const watchWidth= ()=>{
    console.log('setting up')
        setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', watchWidth)
        return ()=>{
            console.log('cleaning up..')
      window.removeEventListener('resize', watchWidth)
    }
 }, [])
  return (
    <div>
       <h1>Window Width :{windowWidth} </h1>
    </div>
  )
}
