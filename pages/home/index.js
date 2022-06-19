import { useState } from "react";
import Link from 'next/link'
import Head from "next/head";
import Hero from "../../Components/HomePage/Hero/Hero";
import MainNavigation from "../../Components/SharedComponents/MainNavigation/MainNavigation";
import HomeInfo from "../../Components/HomePage/HomeInfo/HomeInfo";
import ImageCarousel from "../../Components/HomePage/ImageCarousel/ImageCarousel";
import HomeCarousel from "../../Components/HomePage/Carousel/Carousel";
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
        <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>
      </Head>
      <main className={classes["page-container"]} id="top">
        <MainNavigation clickHandler={hamburgerClickHandler} />
          
        {openHamburger && <SlideMenu />}
        <Hero />
        
        
          <HomeInfo />
          <HomeCarousel />
          <div className={classes.top}>

          <Link href="#top"><a className={classes.anchor}><span><UpArrow /></span>Back to top</a></Link>
          </div>
        

        <Footer />
      </main>
    </>
  );
};

export default HomePage;
