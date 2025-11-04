"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { HiChevronLeft, HiChevronRight, HiPlay, HiPause } from "react-icons/hi2";
import type { Swiper as SwiperType } from "swiper";
import Container from "@/components/Container";
import { Data } from "./Data";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TestimonialSection() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section id="testimonials" className="py-20">
      <Container>
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold">
            <span className="text-gray-900 dark:text-white">Client </span>
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-300 mt-2 text-base sm:text-lg">
            Transforming Ideas into Results — Proven & Trusted
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides
          pagination={{ clickable: true, enabled: false }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="max-w-4xl mx-auto mb-8"
        >
          {Data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="flex flex-col items-center text-center p-8">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="mb-6"
                >
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt={item.title}
                    className="rounded-full"
                  />
                </motion.div>

                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2">
                  {item.title}
                </h3>

                <div className="flex gap-1 mb-6 text-yellow-400">
                  {Array(5).fill(0).map((_, i) => (
                    <span key={i} className="text-lg">★</span>
                  ))}
                </div>

               <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl italic">
  &quot;{item.description}&quot;
</p>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls Below */}
        <div className="flex justify-center items-center gap-4 mb-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-2 rounded-full text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
          >
            <HiChevronLeft size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (isPlaying) {
                swiperRef.current?.autoplay.stop();
              } else {
                swiperRef.current?.autoplay.start();
              }
              setIsPlaying(!isPlaying);
            }}
            className="p-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white transition-all"
          >
            {isPlaying ? <HiPause size={16} /> : <HiPlay size={16} />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => swiperRef.current?.slideNext()}
            className="p-2 rounded-full text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
          >
            <HiChevronRight size={20} />
          </motion.button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2">
          {Data.map((_, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.2 }}
              onClick={() => swiperRef.current?.slideTo(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500'
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}