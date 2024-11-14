'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { ProImages, ProImages2 } from '@/constants';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

const ProjectSlider = () => {
  return (
    <div className="rounded-md sm:w-[100%] lg:w-[62%]">
      <Swiper
        breakpoints={{ 700: { slidesPerView: 1 } }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-2">
            {ProImages.map((image) => (
              <div
                className="group relative h-[150px] w-[150px] md:h-[230px] md:w-[250px]"
                key={image.src}
              >
                <Image
                  src={image.src}
                  alt="project image"
                  width={230}
                  height={230}
                  className="h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 cursor-pointer bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 transition-opacity duration-200 group-hover:opacity-70" />
                <div className="absolute inset-0 flex cursor-pointer items-center justify-center text-white opacity-0 transition-opacity duration-200 group-hover:opacity-70 md:text-lg">
                  View Project
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="arrow right"
                    width={20}
                    height={20}
                    className="ml-2 brightness-0 invert"
                  />
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="grid grid-cols-2 gap-2">
            {ProImages2.map((image) => (
              <div
                className="group relative h-[150px] w-[150px] md:h-[230px] md:w-[250px]"
                key={image.src}
              >
                <Image
                  src={image.src}
                  alt="project image"
                  width={280}
                  height={280}
                  className="h-full w-full rounded-md object-cover"
                />
                <div className="absolute inset-0 cursor-pointer bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 transition-opacity duration-200 group-hover:opacity-70" />
                <div className="absolute inset-0 flex cursor-pointer items-center justify-center text-white opacity-0 transition-opacity duration-200 group-hover:opacity-70 md:text-lg">
                  View Project
                  <Image
                    src="/assets/icons/arrow-right.svg"
                    alt="arrow right"
                    width={20}
                    height={20}
                    className="ml-2 brightness-0 invert"
                  />
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
