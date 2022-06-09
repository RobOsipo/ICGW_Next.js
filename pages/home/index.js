import { useState } from "react";
import Head from "next/head";
import Hero from "../../Components/HomePage/Hero/Hero";
import MainNavigation from "../../Components/SharedComponents/MainNavigation/MainNavigation";
import HomeInfo from "../../Components/HomePage/HomeInfo/HomeInfo";
import ImageCarousel from "../../Components/HomePage/ImageCarousel/ImageCarousel";
import Footer from "../../Components/SharedComponents/Footer/Footer";
import SlideMenu from "../../Components/SharedComponents/MainNavigation/localComponents/SlideMenu/SlideMenu";
import CustomQuotes from '../../Components/SharedComponents/CustomQuotes/CustomQuotes'
import SplitBg from '../../Components/HomePage/SplitBg/SplitBg'

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
      <main className={classes["page-container"]}>
        <MainNavigation clickHandler={hamburgerClickHandler} />
        {openHamburger && <SlideMenu />}
        <Hero />
        <SplitBg>
        <HomeInfo />
        <ImageCarousel />
        <CustomQuotes />
        </SplitBg>
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
