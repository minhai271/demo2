 import "./index.scss"
 import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import axios from "axios";

export default function Carousel({numberOfSlide , category}) {
  const [movies, setMovies] =useState([])
  const fetchMovies = async () => {
    const response = await axios.get("https://6627a8e6b625bf088c093095.mockapi.io/Movies")
  console.log(response.data)
setMovies(response.data)};
  useEffect (()=>(
    fetchMovies()
  ), [])
  return (
    <div className="carousel">
      <Swiper
      slidesPerView={numberOfSlide}
       autoplay={{

        delay: 2500,
        disableOnInteraction: false,
        
      }} pagination={true} modules={[Autoplay, Pagination]} className="mySwiper">
         {movies.filter(movie => movie.category === category ).map((movie) => (<SwiperSlide key={movie.id}><img src={movie.poster_path } alt="" /></SwiperSlide>))}

        
        
       
</Swiper>
    </div>
  );
}
