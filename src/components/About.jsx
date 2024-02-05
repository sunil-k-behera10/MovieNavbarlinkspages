import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import {Autoplay, Pagination } from 'swiper/modules';

function About() {
  return (
    <div>
    <h1 className='about'>Welcome to About Page</h1>
    <Swiper
    slidesPerView={'auto'}
    spaceBetween={30}
    loop={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    modules={[Autoplay,Pagination]}
    className="mySwiper"
  >
   
   <SwiperSlide className='relative'>
      <img className='h-[480px] w-full blur-sm' src="https://www.slashfilm.com/img/gallery/titans-season-4-release-date-cast-and-more-for-the-returning-dc-comics-show/l-intro-1666287491.jpg" alt="" />
      <img className='absolute left-0 top-0 right-0 h-[480px] m-auto' src="https://www.slashfilm.com/img/gallery/titans-season-4-release-date-cast-and-more-for-the-returning-dc-comics-show/l-intro-1666287491.jpg" alt="" />
   </SwiperSlide>

   <SwiperSlide className='relative'>
      <img className='h-[480px] w-full blur-sm' src="https://www.latercera.com/resizer/HFRwqovsOp1yhL3lQkSpC8UxBbM=/arc-anglerfish-arc2-prod-copesa/public/HPPMTOSNAFEKDD4PPGAFW35AIE.png" alt="" />
      <img className='absolute left-0 top-0 right-0 h-[480px] m-auto' src="https://www.latercera.com/resizer/HFRwqovsOp1yhL3lQkSpC8UxBbM=/arc-anglerfish-arc2-prod-copesa/public/HPPMTOSNAFEKDD4PPGAFW35AIE.png" alt="" />
   </SwiperSlide>
  </Swiper>
 </div>
  )
}

export default About