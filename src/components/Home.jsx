import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay,Pagination } from 'swiper/modules';

function Home() {
  return (
    <div>
        <h1 className='home'>Welcome to Home Page 🏡</h1>
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
          <img className='h-[480px] w-full blur-sm' src="https://i.pinimg.com/originals/76/ac/30/76ac3010175919b12a9f36daa47b255e.jpg" alt="" />
          <img className='absolute left-0 top-0 right-0 h-[480px] m-auto' src="https://i.pinimg.com/originals/76/ac/30/76ac3010175919b12a9f36daa47b255e.jpg" alt="" />
       </SwiperSlide>

       <SwiperSlide className='relative'>
          <img className='h-[480px] w-full blur-sm' src="https://c4.wallpaperflare.com/wallpaper/644/787/693/zack-snyder-s-justice-league-justice-league-movies-dc-comics-dc-universe-hd-wallpaper-preview.jpg" alt="" />
          <img className='absolute left-0 top-0 right-0 h-[480px] m-auto' src="https://c4.wallpaperflare.com/wallpaper/644/787/693/zack-snyder-s-justice-league-justice-league-movies-dc-comics-dc-universe-hd-wallpaper-preview.jpg" alt="" />
       </SwiperSlide>
      </Swiper>
     </div>
  )
}

export default Home