'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';


interface CarouselProps {
  items: { title: string; image: string }[];
}

export default function Carousel({ items }: CarouselProps) {
  return (
    <Swiper
      navigation
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="my-8"
    >
      {items.map((item, i) => (
        <SwiperSlide key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 flex flex-col items-center hover:scale-105 transition-transform">
          <img src={item.image} alt={item.title} className="w-32 h-32 object-cover rounded mb-2"/>
          <p className="text-gray-800 dark:text-gray-200">{item.title}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
