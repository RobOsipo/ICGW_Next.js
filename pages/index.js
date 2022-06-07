import Head from 'next/head'
import Image from 'next/image'
import LogoFlip from '../Components/WelcomePage/LogoFlip/LogoFlip'

import classes from '../styles/Welcome.module.scss'


export default function Welcome() {
  return (
    <>
     <Head>
        <title>Isler Custom Gun Works</title>
        <meta name="description" content="Welcome Page For Isler Custom Gun Works Handguards MPX Upper-Assemblies Picatinny" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className={classes['page-container']}>
     
      <h1>Welcome Page</h1>
      <LogoFlip />
    
     
    </main>
    </>
  )
}
