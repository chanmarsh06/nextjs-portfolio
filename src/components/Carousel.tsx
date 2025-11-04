'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import "swiper/css";
import "swiper/css/navigation";

interface CarouselProps {
  items: { title: string; image: string }[];
}

export default function Carousel({ items }: CarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      navigation
      slidesPerView={1}          // ✅ ONLY ONE SLIDE ALWAYS
      centeredSlides={true}      // ✅ Center slide nicely
      loop={true}                // ✅ Infinite loop
      className="!pb-10 max-w-xl mx-auto"  // ✅ Same width always
    >
      {items.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col items-center h-[360px] text-center hover:scale-[1.02] transition-all duration-300">
            
            <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-gray-700 mb-4">
              <Image src={item.image} alt={item.title} width={96} height={96} />
            </div>

            <p className="text-lg font-semibold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              {item.title}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
