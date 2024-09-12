import React from 'react'
import "./gifGrid.css"

export const CardGif = (props) => {

  return (
    <div className='gif-card'>
      <img src={props.urlita}/>
      <p>{props.titulete}</p>
    </div>
  )
}
