import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{ Pagination,Autoplay } from "swiper";


// setup autoplay slide
SwiperCore.use(Autoplay);


const Slide = ({data}) => {
  console.log(data);
    return (
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 18000,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data?.map((item, index) => (
          <SwiperSlide>
            <img className='rounded' src={"http://localhost:3000/"+item.image} alt="" />
          </SwiperSlide>
        ))}

        
      </Swiper>
    );
}

export default Slide;
