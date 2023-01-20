import React from 'react'
import {useState, useEffect} from 'react'
import Die from './Die'
import Confetti from 'react-confetti'
import './styles.css'
import { nanoid } from 'nanoid'

const generateNewDie=()=>{
  return {
    value: Math.ceil((Math.random()* 6)), 
    isHeld: false,
    id: nanoid() }
}

const allNewDice=()=>{
  const newDice= [];
  for(let i= 0; i<10; i++)
  {
     newDice.push( generateNewDie());
  }    
  return newDice;    
 }
 

export default function MainApp() {
  
    const [dice, setDice] = useState(allNewDice)      
    const[tenzies, setTenzies]= useState(false)
    const[start, setStart]=useState(true)
    const[roll, setRoll]=useState(0)
    const [time, setTime] = React.useState(0);
    const[bestTime, setBestTime] = useState(
      JSON.parse(localStorage.getItem('bestTime'))|| []
    )
  //Timer
   useEffect(()=>{
    if (!tenzies) {
			let tick = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
			return () => {
				clearInterval(tick);
			};
		} else {
			setTime((prevTime) => prevTime);
		}
	}, [tenzies]);
   //Best time save in local storage
   useEffect(()=>{
    const currentBestTime = localStorage.getItem('bestTime')
    if(tenzies){
      if(!currentBestTime)
      {
        localStorage.setItem('bestTime', JSON.stringify(time))
      }
      else if ( time < currentBestTime)
      {
        setBestTime(localStorage.setItem('bestTime', JSON.stringify(time)))
      }
    }
   }, [tenzies, time])

    useEffect(()=>{
        const firstValue= dice[0].value
         const allHeld= dice.every(die=>die.isHeld)
         const allSameValue = dice.every(die=> die.value === firstValue)
         if(allHeld && allSameValue){
            setTenzies(true)
       }else{
        setTenzies(false)
       }

    }, [dice])

   
    const diceElements= dice.map((die)=>
      <Die key={die.id} 
      value={die.value} 
      isHeld={die.isHeld} 
      
      holdDice={()=>holdDice(die.id)}/>)

      const rollDice=(id)=>{
        if(!tenzies)
        {
        setDice(oldDice => oldDice.map(die=>{
          return die.isHeld ?
          die: generateNewDie()
          
        }))
        setRoll(precCount => precCount +1)
      }else{
        setTenzies(false)
        setRoll(0)
        setTime(0)
        setBestTime(localStorage.getItem("bestTime"))
        setDice(allNewDice())}
       }
     
       const holdDice=(id)=>{
        setStart(true)
        if(tenzies)
        {
          return
        }
        setDice(oldDice => oldDice.map(die=>{
          return die.id ===id ?
          {...die, isHeld: !die.isHeld}:
          die
        }))
       
      }
       
  return (
   <main>
    { tenzies && <Confetti className='confetti'/>}
    <h1 className='title'>Tenzies</h1>
    <p className='instructions'>Roll untill all dice are the same. Click each die to freeze it at its current
      value between rolls.
    </p>
    <div className="wrapper__stats flex-row">
				<h3 className="counter--roll">
					Rolls :{roll}
				</h3>
				<h3 className="bestTimer">
					Best Time: {bestTime}s
				
				</h3>
				<h3 className="timer">
					Time: {time}s
				</h3>
			</div>
    <div className='die-container'>
       {diceElements}
   </div>
   <button className='roll-dice' 
           onClick={rollDice}> {!tenzies ? 'Roll' :'New Game' }</button>
   </main>

  )
}
