 import "./index.scss"
 import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import axios from "axios";

export default function Carousel({numberOfSlide , category , isUseNavigation , title}) {
  const [movies, setMovies] =useState([])
  const fetchMovies = async () => {
    const response = await axios.get("https://6627a8e6b625bf088c093095.mockapi.io/Movies")
  console.log(response.data)
setMovies(response.data)};
  useEffect (()=>(
    fetchMovies()
  ), [])
  return (
    
    <div className={`carousel ${numberOfSlide > 1 ? "multi-item" : ""}`}>
      {title && <h1>{title}</h1>}
      <Swiper
      spaceBetween={10}
      navigation={isUseNavigation}
      slidesPerView={numberOfSlide}
       autoplay={{

        delay: 2500,
        disableOnInteraction: false,
        
      }} pagination={true} modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
         {movies.filter(movie => movie.category === category ).map((movie) => (<SwiperSlide key={movie.id}><img src={movie.poster_path } alt="" /></SwiperSlide>))}

        
        
       
</Swiper>
    </div>
  );
}
