"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function HomeBanner() {
  const slides = [1, 2, 3, 4, 5];

  return (
    <section className="relative w-full overflow-hidden bg-slate-900">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        grabCursor={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000} // Increased duration for a smoother, buttery slide transition
        navigation={{
          prevEl: ".banner-prev",
          nextEl: ".banner-next",
        }}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide} className="overflow-hidden">
            <div className="relative w-full aspect-[16/6] min-h-[220px] sm:min-h-[300px] lg:min-h-[600px]">
              <Image
                src="/home/banner.webp"
                alt={`Commercial Kitchen Equipment Banner ${slide}`}
                fill
                priority={slide === 1}
                sizes="100vw"
                className="object-cover transition-transform duration-[2000ms]"
              />
              {/* Optional dark overlay gradient for cinematic richness */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </SwiperSlide>
        ))}

        {/* PREVIOUS BUTTON */}
        <button
          type="button"
          className="banner-prev absolute left-5 top-1/2 z-20 hidden lg:flex -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/90 text-[#2F3192] shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-[#2F3192] hover:text-white hover:scale-110 active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* NEXT BUTTON */}
        <button
          type="button"
          className="banner-next absolute right-5 top-1/2 z-20 hidden lg:flex -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white/90 text-[#2F3192] shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-[#2F3192] hover:text-white hover:scale-110 active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </Swiper>
    </section>
  );
}
