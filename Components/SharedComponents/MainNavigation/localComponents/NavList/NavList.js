import React from 'react'
import Link from 'next/link'

import classes from './NavList.module.scss'

const NavList = () => {
    // TODO: Turn li's into Links when pages complete
  return (
    <ul className={classes['list-container']}>
        <li>Home</li>
        <li>About</li>
        <li>Handguards</li>
        <li>Upper Assemblies</li>
        <li>Reviews</li>
        <li>News & Inventory</li>
        <li>Contact</li>
    </ul>
  )
}

export default NavList