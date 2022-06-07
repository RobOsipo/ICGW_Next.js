import Head from 'next/head'
import Image from 'next/image'

import classes from '../../styles/Home.module.scss'

const HomePage = () => {
    return (
        <>
          <Head>
        <title>Isler Custom Gun Works Home Page</title>
        <meta name="description" content="Isler Custom Gun Works Home Handguards MPX Upper-Assemblies Picatinny" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={classes['page-container']}>
            <h1>Home Page</h1>
        </main>
        </>
    )
}

export default HomePage