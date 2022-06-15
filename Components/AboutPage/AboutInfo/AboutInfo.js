import React from "react";

import classes from "./AboutInfo.module.scss";

const AboutInfo = () => {
  return (
    <section className={classes["info-container"]}>
      <h3 className={classes.title}>
        WHY COMPROMISE BETWEEN FORM AND FUNCTION?
      </h3>
      <p className={classes["info-item"]}>
        Isler Custom Gun Works started, when one day at the range, my Bride
        asked "why is this AR-15 so heavy?" That made me think about how I could
        build a lightweight AR-15 that was both light and accurate.
      </p>
      <p className={classes["info-item"]}>
        My Brides' first build was all Black - then she went to a gun show and
        saw an AR in FDE - and it was on from there... I learned a lot from that
        build. We build 'em light, we build 'em accurate, we build 'em durable
        and they look good!
      </p>
      <h3 className={classes.title}>WHAT SETS US APART FROM THE REST?</h3>
      <p className={classes["info-item"]}>
        All of our parts are designed to be as light as possible and as strong
        as possible. Our custom designed handguards are constructed from
        lightweight filament wound carbon fiber. Our low profile adjustable gas
        blocks are made from a lightweight titanium alloy that allows for a
        significant reduction in weight and size, while maintaining its strength
        and durability. We offer other innovative engineered parts and will
        continue to expand and improve our product line.{" "}
      </p>
      <p className={classes["info-item"]}>
        This dedication to quality and care does not end with our custom
        designed components, it is carried through the entire experience,
        whether you are interested in a handful of parts or a complete design
        and build. All additional components are sourced from only the highest
        quality manufacturers in the industry - V7 Weapons Systems, Spikes
        Tactical, SLR and Hiperfire to name a few. If it does not live up to our
        no compromises standard, then it won't be sold by us!{" "}
      </p>
      <p className={classes["info-item"]}>
        We build 'em light, we build 'em accurate, we build 'em durable and they
        look good!
      </p>
    </section>
  );
};

export default AboutInfo;
