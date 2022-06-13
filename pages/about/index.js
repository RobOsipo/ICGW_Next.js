import Head from "next/head";
import MainNavigation from '../../Components/SharedComponents/MainNavigation/MainNavigation'
import Hero from '../../Components/AboutPage/Hero/Hero'
import AboutInfo from '../../Components/AboutPage/AboutInfo/AboutInfo'

import classes from '../../styles/About.module.scss'

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Isler Custom Gun Works Home Page</title>
        <meta
          name="description"
          content="Isler Custom Gun Works About Handguards MPX Upper-Assemblies Picatinny"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={classes['page-container']}>
        <MainNavigation />
        <Hero />
        <AboutInfo />
      </main>
    </>
  );
};

export default AboutPage
