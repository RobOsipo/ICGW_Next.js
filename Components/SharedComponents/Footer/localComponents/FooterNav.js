import React from 'react'

import classes from './FooterNav.module.scss'

const FooterNav = () => {
  return (
    <ul className={classes.list}>
        <li className={classes.navigate}>Navigation</li>
        <li>Home</li>
        <li>About</li>
        <li>Handguards</li>
        <li>Upper Assemblies</li>
        <li>Reviews</li>
        <li>News & Inventory</li>
    </ul>
  )
}

export default FooterNav