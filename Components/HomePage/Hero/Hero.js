import React from 'react'
import HeroContent from './localComponents/HeroContent'
import MadeIn from './localComponents/MadeIn'


import classes from './Hero.module.scss'

const Hero = () => {
  return (
    <section className={classes['hero-container']}>
        <HeroContent />
        <MadeIn />
    </section>
  )
}

export default Hero