import React from 'react'
import Hero from '../components/Hero/Hero'
import Populer from '../components/Populer/Populer'
import Offer from '../components/Offers/Offesr'
import NewCollections from '../components/NewCollections/NewCollections'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Populer />
      <Offer />
      <NewCollections />
      <NewsLetter />

    </div>
  )
}

export default Shop