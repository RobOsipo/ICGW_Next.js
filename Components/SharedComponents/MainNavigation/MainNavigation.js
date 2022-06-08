import React, { useState } from 'react'
import NavLogo from './localComponents/NavLogo/NavLogo'
import NavList from './localComponents/NavList/NavList'
import Hamburger from './localComponents/Hamburger/Hamburger'


import classes from './MainNavigation.module.scss'

const MainNavigation = ({clickHandler}) => {
    

  return (
    <nav className={classes['main-navigation']}>
        <NavLogo />
        <Hamburger clickHandler={clickHandler} />
    </nav>
  )
}

export default MainNavigation