import Head from "next/head";

import classes from '../../styles/About.module.scss'

const AboutPage = () => {
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
      <main className={classes['page-container']}>
        <h1>About page</h1>
      </main>
    </>
  );
};
