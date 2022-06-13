import { useState } from "react";
import Link from 'next/link'
import Head from "next/head";
import Hero from "../../Components/HomePage/Hero/Hero";
import MainNavigation from "../../Components/SharedComponents/MainNavigation/MainNavigation";
import HomeInfo from "../../Components/HomePage/HomeInfo/HomeInfo";
import ImageCarousel from "../../Components/HomePage/ImageCarousel/ImageCarousel";
import Footer from "../../Components/SharedComponents/Footer/Footer";
import SlideMenu from "../../Components/SharedComponents/MainNavigation/localComponents/SlideMenu/SlideMenu";
import SplitBg from "../../Components/HomePage/SplitBg/SplitBg";
import UpArrow from '../../svg/UpArrow'

import classes from "../../styles/Home.module.scss";

const HomePage = () => {
  const [openHamburger, setOpenHamburger] = useState(false);

  const hamburgerClickHandler = () => {
    setOpenHamburger((prevState) => !prevState);
  };

  return (
    <>
      <Head>
        <title>Isler Custom Gun Works Home Page</title>
        <meta
          name="description"
          content="Isler Custom Gun Works Home Handguards MPX Upper-Assemblies Picatinny"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes["page-container"]} id="top">
        <MainNavigation clickHandler={hamburgerClickHandler} />
          
        {openHamburger && <SlideMenu />}
        <Hero />
        
        
          <HomeInfo />
          <ImageCarousel />
          <div className={classes.top}>

          <Link href="#top"><a className={classes.anchor}><span><UpArrow /></span>Back to top</a></Link>
          </div>
        

        <Footer />
      </main>
    </>
  );
};

export default HomePage;
