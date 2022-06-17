import React from "react";

import classes from "./WhatWeDo.module.scss";

const WhatWeDo = () => {
  return (
    <section className={classes["info-container"]}>
      <h2 className={classes.title}>What we can do for you!</h2>
      <p className={classes.info}>
        When we install our handguards for our clientele we routinely remove the
        mil spec A2 front sights and install an SLR Steel or Titanium Adjustable
        Gas Block or whatever gas block you desire. Barrel removal and
        installation of upgraded barrels and upgraded muzzle brake installation
        are routinely performed. And heck, it doesn't have to be our handguards,
        it can be whatever make/look you desire!
      </p>
      <p className={classes.info}>
        Our Custom Shop can also install your handguard choice to your upper
        receiver and make the modifications you desire or ask for our input
        depending on your application.
      </p>
    </section>
  );
};

export default WhatWeDo;
