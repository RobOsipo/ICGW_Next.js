import React from "react";
import { useRouter } from "next/router";
import BasicCrosshairs from '../../../svg/BasicCrosshairs'
import gunshotMp3 from '../../../public/gunshot.mp3'

import classes from "./LogoFlip.module.scss";

const LogoFlip = () => {

    const router = useRouter()

const play = () => {
    var audio = document.getElementById('a1');
    audio.play();

    router.replace('/home')
}

  return (
  
      <div className={classes["card-container"]} onClick={play}>
        <div className={classes.card}>
            <div className={classes.front}>
                <h1>I G</h1>
                <h1 className={classes.bottom}>C W</h1>
                
            </div>
            <div className={classes.back}>
                <BasicCrosshairs />
                <audio id='a1' src={gunshotMp3}></audio>
            </div>
        </div>
      </div>
    
  );
};

export default LogoFlip;
