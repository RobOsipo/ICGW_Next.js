import React from "react";

import classes from "./Hamburger.module.scss";

const Hamburger = ({clickHandler}) => {
  return (
    <>
      <input id="dropdown" className={classes["input-box"]} type="checkbox" />

      <label htmlFor="dropdown" className={classes.dropdown} onClick={clickHandler}>
        <span className={classes.hamburger}>
          <span className={`${classes["icon-bar"]} ${classes["top-bar"]}`}></span>
          <span
            className={`${classes["icon-bar"]} ${classes["middle-bar"]}`}
          ></span>
          <span
            className={`${classes["icon-bar"]} ${classes["bottom-bar"]}`}
          ></span>
        </span>
      </label>
    </>
  );
};

export default Hamburger;
