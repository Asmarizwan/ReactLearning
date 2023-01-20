import React from 'react'
import './styles.css'

export default function Card(props) {

  let badgeText;
  if(props.openSpots === 0){
    badgeText= 'SOLD OUT'
  }
  else if(props.location ==='Online')
  {
    badgeText = 'ONLINE'
  }
 
  return (
    <div className='card'> 
   {badgeText && <div className='card--badge'>{badgeText}</div> }      
      <img src={props.coverImg} alt='' className='card--img'/>
       <div className='card--stats'>
        <img src={props.starimg} alt=''  className='card--star' />
        <span className='cardRating'>{props.stats.rating}</span> 
        <span className='gray'>({props.stats.reviewCount}) <span className='dot'>.</span> </span>
        <span className='gray'>{props.location}  </span>
        </div>
        <p className='card--title'>{props.title}</p>
        <p className='card--price'><span className='bold'>${props.price}</span> / person</p>
       
    </div>
  )
}
