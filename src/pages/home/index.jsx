import React from 'react'
import Header from '../../components/header'
import Carousel from '../../components/carousel'
import { Navigation } from 'swiper/modules'

function HomePage() {
  return (
    <div><Header/>
     <Carousel numberOfSlide={1} category={"Trending"}/>
    <Carousel numberOfSlide={5} category={"Horror"} isUseNavigation={true} title="Horror Movie"/> 
    <Carousel numberOfSlide={5} category={"Action"} isUseNavigation={true} title="Action"/></div>  )
}

export default HomePage