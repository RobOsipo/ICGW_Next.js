import React from 'react'
import HoverSlide from '../../../UI/buttons/HoverSlide'


import classes from './CustomQuotes.module.scss'

const CustomQuotes = () => {
  return (
    <div className={classes.card}>
        <p>For Custom Quotes And Assemblies <span><HoverSlide buttonText="Contact Us" /></span></p>
    </div>
  )
}

export default CustomQuotes