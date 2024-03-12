import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Populor } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

export const Shop = () => {
  return (
    <div>
     <Hero />
     <Populor />
     <Offers />
     <NewCollections />
     <NewsLetter />
    </div>
  )
}
