import React from 'react'

import classes from './HoverSlide.module.scss'

const HoverSlide = ({buttonText}) => {
  return (
    <button className={`${classes.button} ${classes['learn-more']}`}>
  <span className={classes.circle} aria-hidden="true">
  <span className={`${classes.icon} ${classes.arrow}`}></span>
  </span>
  <span className={classes['button-text']}>{buttonText}</span>
</button>
  )
}

export default HoverSlide