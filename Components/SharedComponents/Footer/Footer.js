import React from 'react'
import FooterNav from './localComponents/FooterNav'
import CustomQuotes from '../../../Components/SharedComponents/CustomQuotes/CustomQuotes'
import Facebook from '../../../svg/Facebook'


import classes from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={classes.footer}>
    <CustomQuotes />
        <FooterNav />
        <p className={classes.p}> <span className={classes.fb}><Facebook /></span>Follow us on Facebook! -link to FB-</p>
    </footer>
  )
}

export default Footer