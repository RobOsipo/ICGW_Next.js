import React from 'react'

import classes from './InfoCard.module.scss'

const InfoCard = ({children}) => {
  return (
    <div className={classes.card}>
        {children}
    </div>
  )
}

export default InfoCard