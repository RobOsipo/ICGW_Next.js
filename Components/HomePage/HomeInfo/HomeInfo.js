import React from 'react'
import Link from 'next/link'
import DrawBorder from '../../../UI/buttons/DrawBorder'
import TitleCard from './localComponents/TitleCard'
import InfoCard from './localComponents/InfoCard'

import classes from './HomeInfo.module.scss'

const HomeInfo = () => {
  return (
    <section className={classes['info-container']}>
    <TitleCard>
        <h2 className={classes.title}>A Small Business With An Eye For Detail</h2>

    </TitleCard>
    <InfoCard>

        <p className={classes['info-item']}>Isler Custom Gun Works is a small firearms parts design and manufacturing business located outside of Charlotte, NC. We offer a large range of services, from full firearms design and construction, partial to complete lightweight upper assemblies, individual parts sales, and even firearms sales and transfers. ICGW is an FFL07 licensed manufacturer.</p>
    </InfoCard>
        <InfoCard>
        <p className={classes['info-item']}>We have seen an increased demand for lightweight, high-strength firearm components in both the competitive firearms market and within the civilian market, as well. We apply engineering software to produce lighter high-strength components, materials that are higher quality than the industry standard and experienced CNC machining processes that result in high-quality components.</p>
        </InfoCard>
       <InfoCard>
       <p className={classes['info-item']}>After 30 plus years as a professional race engine builder in Sport Cars, Indy Cars and now NASCAR, we have gained an understanding regarding materials, machining processes, coatings, etc... All of this is incorporated into each part we make for a quality result.</p>
       </InfoCard>
       <InfoCard>

        <h2 className={classes.contact}>Want A Custom Build? <span className={classes.span}>Click Here</span> </h2>
       </InfoCard>
       
    </section>
  )
}

export default HomeInfo