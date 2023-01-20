import React, { useState, useEffect } from 'react'
import './styles.css';
import Data from '../Data';


export default function Meme() {
    // const [randomImg, setRandomImg]= useState("");
    const [meme, setMeme] =useState({
      topText: '',
      bottomText: '',
      randomImg: '',

    })
    const[allMemeImages, setAllMemeImages]=useState([]);

    const getNewImg=()=>
        {
       
       
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNumber].url;
         setMeme(prevMeme =>({
          ...prevMeme, 
          randomImg: url
         }))  
    }
    const handleChange=(event)=>{
      const{name, value}= event.target
      setMeme(prevMeme=>({
        ...prevMeme,
        [name]: value
      }))

    }
    const handleSubmit=(event)=>{
      event.preventDefault();
    }

      useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=> res.json())
        .then(data=> setAllMemeImages(data.data.memes))        
      },[])
     
  return (
    <main>
        <div className='meme-form' >
            <input className='meme-input'
                   placeholder='Hello'
                   name='topText'
                   value={meme.topText}
                   onChange={handleChange}
            
            />
            <input className='meme-input' 
                   placeholder='World'
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange}
            />
            <button className='meme-btn' onClick={getNewImg}>Get a new meme image  🖼</button>
        </div>
        <div className='meme'>
        <h2 className='meme--text-top'>{meme.topText}</h2>
        <img src={meme.randomImg} className='display-img'/>
        
        <h2 className='meme--text-bottom'>{meme.bottomText}</h2>
        </div>
    </main>
  )
}
