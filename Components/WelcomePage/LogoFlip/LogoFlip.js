import React from "react";

import classes from "./LogoFlip.module.scss";

const LogoFlip = () => {
  return (
  
      <div className={classes["card-container"]}>
        <div className={classes.card}>
            <div className={classes.front}>
                <h1>I G</h1>
                <h1>C W</h1>
                {/* <h1>G</h1>
                <h1>W</h1> */}
            </div>
            <div className={classes.back}>

            </div>
        </div>
      </div>
    
  );
};

export default LogoFlip;
