'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import { ServiceData } from '@/constants';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const ServiceSlider = () => {
  return (
    <div className="rounded-md sm:w-[100%] lg:w-[58%]">
      <Swiper
        breakpoints={{
          340: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className="group relative flex h-[300px] cursor-pointer flex-col gap-4 overflow-hidden rounded-md px-6 py-8 text-white shadow-lg sm:w-[300px] md:w-[250px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50" />
              <div className="relative flex flex-col gap-3">
                <h1 className="text-center text-4xl">{item.title}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;
