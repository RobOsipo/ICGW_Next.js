import React from 'react'

import classes from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={classes['hero-container']}>
        <div className={classes['hero-info-container']}>
            <p className={classes.top}>Lightweight carbon fiber handguards</p>
            <p className={classes.middle}>and</p>
            <p className={classes.bottom}>Accessories</p>
        </div>
    </section>
  )
}

export default Hero