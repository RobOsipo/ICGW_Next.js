import React from 'react'
import HeroInfo from './localComponents/HeroInfo'

import classes from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={classes['hero-container']}>
        <HeroInfo />
    </section>
  )
}

export default Hero