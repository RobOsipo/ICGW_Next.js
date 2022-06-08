import React from 'react'
import Link from 'next/link'

import classes from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <button className={classes.button}>Contact Us</button>
    </footer>
  )
}

export default Footer