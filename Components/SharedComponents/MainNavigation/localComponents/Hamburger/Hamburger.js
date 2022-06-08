import React from "react";

import classes from "./Hamburger.module.scss";

const Hamburger = () => {
  return (
    <>
      <input id="dropdown" className={classes["input-box"]} type="checkbox" />

      <label htmlFor="dropdown" className={classes.dropdown}>
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
