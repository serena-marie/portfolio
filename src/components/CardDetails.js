import React from 'react'
import { cardDetailsType } from './types'
import './../styles/card.scss'

function CardDetails ({ details }) {
  function handleClick (e) {
    e.stopPropagation()
    return details.url ? window.open(details.url, '_blank') : ''
  }

  function setImageUrl () {
    if (!details.image) return ''
    return require(`../assets/${details.image}`)
  }

  function isSourceCodeAvailable () {
    return details.url !== ''
  }

  return (
    <div className='card'>
      <img className='photo' src={setImageUrl()} alt=''></img>
      <div className='content'>
        <h1>{details.title}</h1>
        <h3>{details.role}</h3>
        <p>{details.info}</p>
      </div>

      <div className='moreInfo'>
        <p>Utilized: {details.tech}</p>
        <button className={isSourceCodeAvailable() ? 'active' : 'inactive'} onClick={handleClick}>Source Code</button>
      </div>
    </div>
  )
}

CardDetails.propTypes = {
  details: cardDetailsType
}

export default CardDetails
