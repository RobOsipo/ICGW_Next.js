import React from 'react'
import HeroContent from './localComponents/HeroContent'


import classes from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={classes['hero-container']}>
        <HeroContent />
    </section>
  )
}

export default Hero