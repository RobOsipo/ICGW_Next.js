import React from 'react'

import classes from './TitleCard.module.scss'

const TitleCard = ({children}) => {
  return (
    <div className={classes.card}>
        {children}
    </div>
  )
}

export default TitleCard