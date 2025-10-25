"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Container from "@/components/Container";
import { Data } from "./Data";

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20">
      <Container>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            <span className="text-gray-900 dark:text-white">Client </span>
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300">
            What my clients say about my work
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { 
                slidesPerView: 1,
                spaceBetween: 24
              },
              768: { 
                slidesPerView: 2,
                spaceBetween: 32
              },
              1024: { 
                slidesPerView: 3,
                spaceBetween: 40
              },
            }}
            className="!overflow-visible pb-4"
          >
            {Data.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200/20 dark:border-gray-700/20 hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 flex flex-col items-center text-center h-full"
                >
                  {/* Avatar */}
                  <div className="relative mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full overflow-hidden border-3 sm:border-4 border-white dark:border-gray-700 shadow-lg mx-auto">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={96}
                        height={96}
                        className="rounded-full object-cover w-full h-full"
                        sizes="(max-width: 640px) 64px, (max-width: 1024px) 80px, 96px"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                    {item.title}
                  </h4>

                  {/* Star Rating */}
                  <div className="flex justify-center mb-3 sm:mb-4 text-yellow-400">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i} className="text-sm sm:text-base">★</span>
                      ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="italic text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                    &quot;{item.description}&quot;
                  </p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons - Hidden on mobile */}
          <button className="prev-btn hidden sm:flex absolute -left-4 lg:-left-8 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 lg:p-3 rounded-full border border-gray-200/20 dark:border-gray-700/20 shadow-md hover:scale-110 transition-all duration-300 items-center justify-center text-primary-600">
            <HiChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          
          <button className="next-btn hidden sm:flex absolute -right-4 lg:-right-8 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-2 lg:p-3 rounded-full border border-gray-200/20 dark:border-gray-700/20 shadow-md hover:scale-110 transition-all duration-300 items-center justify-center text-primary-600">
            <HiChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
        </div>
      </Container>
    </section>
  );
}