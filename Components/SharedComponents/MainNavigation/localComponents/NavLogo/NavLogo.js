import React, {useRef, useEffect} from 'react'

import classes from './NavLogo.module.scss'

const NavLogo = () => {
 const div = useRef()
 

   

    useEffect(() => {
      console.log(div.current)
      div.current
    }, [div])
  



  return (
    <div ref={div} id="s" className={`${classes.logo} ${classes.vibrate}`}>
        <h2>I C</h2>
        <h2>G W</h2>
    </div>
  )
}

export default NavLogo