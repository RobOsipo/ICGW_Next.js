import React from "react";
import BasicCrosshairs from '../../../svg/BasicCrosshairs'
// import gunshotMp3 from '../../../audio/gunshot.mp3'

import classes from "./LogoFlip.module.scss";

const LogoFlip = () => {


const play = () => {
    var audio = document.getElementById('a1');
    audio.play();
}

  return (
  
      <div className={classes["card-container"]} onClick={play}>
        <div className={classes.card}>
            <div className={classes.front}>
                <h1>I G</h1>
                <h1>C W</h1>
                
            </div>
            <div className={classes.back}>
                <BasicCrosshairs />
                <audio id='a1' src='/public.gunshot.mp3'></audio>
            </div>
        </div>
      </div>
    
  );
};

export default LogoFlip;
