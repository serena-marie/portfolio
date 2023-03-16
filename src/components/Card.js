import React from 'react'
import CardDetails from './CardDetails'
import data from '../data/projects.json'
import './../styles/card.scss'

export default function Card () {
  return (
    <div className='cardsContainer'>
    {data.map((detail, index) => {
      return <CardDetails key={index} details={detail}/>
    })}
    </div>
  )
}
