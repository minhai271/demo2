import React from 'react'
import Header from '../../components/header'
import Carousel from '../../components/carousel'

function HomePage() {
  return (
    <div><Header/>
     <Carousel numberOfSlide={1} category={"Trending"}/>
    <Carousel numberOfSlide={2} category={"Horror"}/>
    <Carousel numberOfSlide={2} category={"Action"}/></div>  )
}

export default HomePage