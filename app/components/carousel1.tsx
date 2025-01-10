"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css'

const slides = ['/slides1/pt1.jpg','/slides1/pt2.jpg','/slides1/pt3.jpg','/slides1/pt4.jpg','/slides1/pt5.jpg','/slides1/pt6.jpg','/slides1/pt7.jpg','/slides1/pt8.jpg','/slides1/pt9.jpg','/slides1/pt10.jpg','/slides1/pt11.jpg','/slides1/pt12.jpg','/slides1/pt13.jpg','/slides1/pt14.jpg']


export default function Carousel1() {
  return (
    
        <div className="border-y-2 w-[96vw] mx-auto border-black bg-zinc-300">
        <Swiper
          className=" my-1 h-[25vw]"
          spaceBetween={1}
          slidesPerView={5}
          loop
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true , type: 'bullets'}}
          autoplay
          navigation
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide}
              className="relative "
            >
              <Image
                width={500}
                height={500}
                className="absolute object-cover"
                alt="Examples of work by Bella Backdrops and Props"
                src={slide}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
  );
}