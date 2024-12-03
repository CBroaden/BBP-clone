"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css'

const slides2 = [
  "/slides2/a3.jpg",
  "/slides2/bd3.jpg",
  "/slides2/c10.jpg",
  "/slides2/prop32.jpg",
];

export default function Carousel2() {
  return (
    
        <div className="border-y-2 w-[96vw] mx-auto my-16 border-black bg-zinc-300">
        <Swiper
          className=" my-1 h-[25vw]"
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
