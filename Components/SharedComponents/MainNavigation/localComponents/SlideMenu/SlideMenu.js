import React from 'react'
import NavList from '../NavList/NavList'

import classes from './SlideMenu.module.scss'

const SlideMenu = () => {
  return (
    <div className={classes['slide-menu']}>
        <NavList />
    </div>
  )
}

export default SlideMenu