import React from 'react'
import NavLogo from './localComponents/NavLogo/NavLogo'
import NavList from './localComponents/NavList/NavList'
import Hamburger from './localComponents/Hamburger/Hamburger'

import classes from './MainNavigation.module.scss'

const MainNavigation = () => {
  return (
    <nav className={classes['main-navigation']}>
        <NavLogo />
        <Hamburger />
    </nav>
  )
}

export default MainNavigation