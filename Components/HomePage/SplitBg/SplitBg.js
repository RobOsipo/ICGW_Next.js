import React from 'react'

import classes from './SplitBg.module.scss'

const SplitBg = ({children}) => {
  return (
    <section className={classes.split}>
    {children}
        
    </section>
  )
}

export default SplitBg