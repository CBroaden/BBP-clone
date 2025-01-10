"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css'

const slides2 = [
  "/slides2/ls1.jpg",
  "/slides2/ls2.jpg",
  "/slides2/ls3.jpg",
  "/slides2/ls4.jpg",
  "/slides2/ls5.jpg",
  "/slides2/ls6.jpg",
  "/slides2/ls7.jpg"
];

export default function Carousel2() {
  return (
    
        <div className="border-y-2 w-[98vw] mx-auto m-16 border-black bg-zinc-300">
        <Swiper
          className=" my-1 h-[24vw]"
          spaceBetween={1}
          slidesPerView={3}
          loop
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{ clickable: true , type: 'bullets'}}
          autoplay
          navigation
        >
          {slides2.map((slide) => (
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
