import React from 'react'
import MainNavigation from '../../Components/SharedComponents/MainNavigation/MainNavigation'
import Hero from '../../Components/HandguardsPage/Hero/Hero'
import WhatWeDo from '../../Components/HandguardsPage/WhatWeDo/WhatWeDo'
import ProductList from '../../Components/HandguardsPage/ProductList/ProductList'
import Footer from '../../Components/SharedComponents/Footer/Footer'

import classes from '../../styles/Handguards.module.scss'

const HandguardsPage = () => {
  return (
    <main className={classes['page-container']}>
        <MainNavigation />
        <Hero />
        <WhatWeDo />
        <ProductList />
        <Footer />
    </main>
  )
}

export default HandguardsPage