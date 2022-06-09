import React from 'react'

import classes from './HeroContent.module.scss'

const HeroContent = () => {
  return (
    <div className={classes['hero-content']}>
        <p className={classes.text}>CUSTOM AR-15 AND LR308 PARTS AND ASSEMBLIES</p>
        <p className={classes.text}>AR-15 AND LR308 COMPLETE UPPER ASSEMBLIES</p>
        <p className={classes.text}>LIGHTWEIGHT HIGH STRENGTH CARBON FIBER HANDGAURDS</p>
    </div>
  )
}

export default HeroContent