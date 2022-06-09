import React from 'react'
import FooterNav from './localComponents/FooterNav'


import classes from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={classes.footer}>
        <FooterNav />
    </footer>
  )
}

export default Footer