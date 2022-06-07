import React from 'react'

import classes from './Hamburger.module.scss'


const Hamburger = () => {
  return (
      <>
      <input id="dropdown" className={classes['input-box']} type="checkbox" />

<label for="dropdown" className={classes.dropdown}>

<span class={classes.hamburger}>
<span class={`${classes['icon-bar']} ${classes['top-bar']}`}></span>
<span class={`${classes['icon-bar']} ${classes['middle-bar']}`}></span>
<span class={`${classes['icon-bar']} ${classes['bottom-bar']}`}></span>
</span>
</label>

      {/* <input type="checkbox" id="hamburger" />
      <label htmlFor="hamburger">
     <div className={classes.hamburgerMenu}>
        <span className={classes.one}></span>
        <span className={classes.two}></span>
        <span className={classes.three}></span>
    </div>
    </label> */}
    </>
  )
}

export default Hamburger
   