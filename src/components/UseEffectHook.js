import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {
    const[starWarsData, setStarWarsData]= useState({})
    const[count,setCount]= useState(1)
    const handleIncrement=()=>{
      setCount(count +1)
    }
    // fetch("https://swapi.dev/api/people/1")
    // .then(res=>res.json()). then(data=> console.log(data))
    //this line cause trouble and stuck ininfinite loop because
    //every sec api calls fetch the data and set the sate which 
    //cause the component rerendering.
    // .then(data=> setStarWarsData(data))

    //to break this loop we are going to use useEffect hook to cover this side effect
    //It means we are reaching out of the react's echo system and also trying to set
    //some state in the process
    useEffect(()=>{
      //if we don't provide the second parameter the code stills stuck in infinite loop
      //the second parameter is almost always an empty array, which makes this function 
      //runs only once.
      //if you want to render the function every time it could be possible by passing 
      // the dependency or state name forexample [starWarsData]
fetch(`https://swapi.dev/api/people/${count}`)
     .then(res=>res.json())
    .then(data=>  setStarWarsData(data))
    
    }, [count])
       //useEffect takes a function as it's parameters. If a function needsto return something,
    //it needs to be a clean up function. Otherwise it should return nothing. If we make an
    //async function, it automatically returns a promise instead of a fuction or nothing. 
    //Therefore if you want to use async operator inside of useEffect, you need to define a
    //function seperately inside of a callback function as seen below

    // useEffect(()=>{
    //    async const getPeople= ()=>{
    //    const  restApi= await fetch('https://swapi.dev/api/people/1')
   //     const data= await res.json()
   //      setStarWarsData(data)
    //     }
            //getPeople()
    //          
    //   }, [])
  return (
    <div>
         <div>          
          <button onClick={handleIncrement}>Get Next Character</button>
        </div>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      
    </div>
  )
}
