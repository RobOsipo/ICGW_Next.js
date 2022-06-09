import React from 'react'

import classes from './FooterNav.module.scss'

const FooterNav = () => {
  return (
    <ul className={classes.list}>
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