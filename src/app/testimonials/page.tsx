"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useTheme } from "@/context/ThemeContext";
import { Data } from "./Data";

export default function TestimonialSection() {
  const { colors } = useTheme();

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: colors.gradient.background }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: colors.text }}
          >
            What My Clients Say
          </h2>
          <p
            className="text-lg font-medium tracking-wide"
            style={{ color: colors.textSecondary }}
          >
            Real feedback from my creative collaborations
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <div className="relative mt-16">
          <Swiper
            modules={[Autoplay, Navigation]}
            spaceBetween={40}
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
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {Data.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="bg-white/10 dark:bg-gray-800/70 backdrop-blur-lg rounded-3xl p-8 md:p-10 shadow-lg border border-gray-300/20 dark:border-gray-700/30 flex flex-col items-center text-center"
                  style={{ background: colors.gradient.card }}
                >
                  {/* Avatar */}
                  <motion.div
                    className="relative mb-6"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div
                      className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto"
                      style={{
                        boxShadow: `0 15px 30px ${colors.primary}30`,
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={120}
                        height={120}
                        className="rounded-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Text */}
                  <motion.h4
                    className="text-xl font-semibold mb-3"
                    style={{ color: colors.text }}
                  >
                    {item.title}
                  </motion.h4>

                  <div className="flex justify-center mb-3 text-yellow-400">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                  </div>

                  <motion.p
                    className="italic text-base leading-relaxed"
                    style={{ color: colors.textSecondary }}
                  >
                    “{item.description}”
                  </motion.p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            className="prev-btn absolute -left-6 md:-left-10 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 dark:bg-gray-700/40 backdrop-blur-md p-3 rounded-full border border-gray-300/20 dark:border-gray-700/40 shadow-md hover:scale-110 transition"
            style={{ color: colors.primary }}
          >
            <HiChevronLeft className="text-2xl" />
          </button>
          <button
            className="next-btn absolute -right-6 md:-right-10 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 dark:bg-gray-700/40 backdrop-blur-md p-3 rounded-full border border-gray-300/20 dark:border-gray-700/40 shadow-md hover:scale-110 transition"
            style={{ color: colors.primary }}
          >
            <HiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
