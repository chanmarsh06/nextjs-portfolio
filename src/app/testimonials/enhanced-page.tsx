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

        {/* Manual Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
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
            className="p-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg hover:shadow-xl transition-all"
          >
            {isPlaying ? <HiPause size={20} /> : <HiPlay size={20} />}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => swiperRef.current?.slideNext()}
            className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all"
          >
            <HiChevronRight size={20} />
          </motion.button>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {Data.map((_, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.2 }}
              onClick={() => swiperRef.current?.slideTo(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === idx
                  ? 'bg-gradient-to-r from-primary-500 to-secondary-500 scale-125'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary-300 dark:hover:bg-primary-700'
              }`}
            />
          ))}
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
          className="max-w-4xl mx-auto testimonial-swiper"
        >
          {Data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative p-8 sm:p-10 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl max-w-3xl mx-auto"
              >
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  "
                </div>

                <div className="flex flex-col items-center text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative mb-6"
                  >
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt={item.title}
                      className="rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
                  </motion.div>

                  <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2">
                    {item.title}
                  </h3>

                  <div className="flex gap-1 mb-6 text-yellow-400">
                    {Array(5).fill(0).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-lg"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed max-w-2xl italic">
                    "{item.description}"
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Keyboard Shortcuts Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8 text-sm text-gray-500 dark:text-gray-400"
        >
          Use ← → arrow keys or click controls to navigate
        </motion.div>
      </Container>
    </section>
  );
}