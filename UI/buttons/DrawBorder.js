import React from "react";

import classes from './DrawBorder.module.scss'

const DrawBorder = ({buttonText}) => {
  return <button className={`${classes.btn} ${classes['draw-border']}`}>{buttonText}</button>;
}

export default DrawBorder;
