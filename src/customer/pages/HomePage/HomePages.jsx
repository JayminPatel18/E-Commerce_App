import React from 'react'
import MainCarousel from '../../components/HomeCarosel/MainCarosel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../data/men_kurta';
const HomePages = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Kurta"}/>
          <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Shoes"}/>
          <HomeSectionCarousel data={mens_kurta} sectionName={"Mens Shirt"}/>
          <HomeSectionCarousel data={mens_kurta} sectionName={"Womens Saaree"}/>
          <HomeSectionCarousel data={mens_kurta} sectionName={"Womens Dress"}/>
        </div> 
    </div>
  )
}

export default HomePages