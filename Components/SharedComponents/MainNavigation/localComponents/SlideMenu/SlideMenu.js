import React from 'react'
import NavList from '../NavList/NavList'

import classes from './SlideMenu.module.scss'

const SlideMenu = () => {
  return (
    <div className={classes['slide-menu']}>
        <NavList flex="column" />
    </div>
  )
}

export default SlideMenu