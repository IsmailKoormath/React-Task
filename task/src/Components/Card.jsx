import React from 'react'
import classes from "../styles/Card.module.css"

const Card = ({ image, paragraph }) => {
  return (
    <div className={classes.card}>
        <img src={image} alt={image} />
          <p className={classes.para_text}>{paragraph}</p>
    </div>
  )
}

export default Card