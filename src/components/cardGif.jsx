import React from 'react'
import "./gifGrid.css"
import PropTypes from "prop-types"

export const CardGif = (props) => {

  return (
    <div className='gif-card'>
      <img src={props.urlita}/>
      <p>{props.titulete}</p>
    </div>
  )
}

CardGif.propTypes = {
  urlita: PropTypes.string.isRequired,
  titulete: PropTypes.string.isRequired
};
