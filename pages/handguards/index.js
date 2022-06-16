import React from 'react'
import MainNavigation from '../../Components/SharedComponents/MainNavigation/MainNavigation'

import classes from '../../styles/Handguards.module.scss'

const HandguardsPage = () => {
  return (
    <main className={classes['page-container']}>
        <MainNavigation />
    </main>
  )
}

export default HandguardsPage