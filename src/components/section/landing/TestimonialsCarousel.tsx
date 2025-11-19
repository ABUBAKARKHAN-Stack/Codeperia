"use client";

import { motion } from "motion/react";
import { ChevronLeftIcon, ChevronRightIcon, Delete, Diamond, Edit, Star, Trash } from "lucide-react";
import React from "react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-cards";
import { cn } from "@/lib/utils";
import { useAdminView } from "@/context/adminview.conext";
import { Button } from "@/components/ui/button";
import { MdRemove } from "react-icons/md";

const TestimonialsCarousel = ({
  items,
  className,
  showPagination = false,
  showNavigation = false,
  loop = true,
  autoplay = false,
  spaceBetween = 0,
}: {
  items: any[];
  className?: string;
  showPagination?: boolean;
  showNavigation?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  spaceBetween?: number;
}) => {
  const { adminView } = useAdminView()
  const css = `

  .carousel {
    width: 100%;
    height: 100%;
    padding-bottom: 50px !important;
  }
  
  .carousel .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 280px;
  }

  .swiper-pagination-bullet {
    background-color: #fff !important;
    opacity: 0.5 !important;
  }

  .swiper-pagination-bullet-active {
    opacity: 1 !important;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #000 !important;
    background: rgba(255, 255, 255, 0.25) !important;
    backdrop-filter: blur(10px) !important;
    border-radius: 50% !important;
    width: 44px !important;
    height: 44px !important;
    border: 1px solid rgba(255, 255, 255, 0.15) !important;
  }

  .swiper-button-next:hover,
  .swiper-button-prev:hover {
    background: rgba(255, 255, 255, 0.2) !important;
  }

`;

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.5,
      }}
      className={cn("relative w-full", className)}
    >
      <style>{css}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <Swiper
          spaceBetween={spaceBetween}
          autoplay={
            autoplay
              ? {
                delay: 2000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
              : false
          }
          effect="coverflow"
          grabCursor={true}
          slidesPerView="auto"
          centeredSlides={true}
          loop={loop}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={
            showPagination
              ? {
                clickable: true,
              }
              : false
          }
          navigation={
            showNavigation
              ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
              : false
          }
          className="carousel"
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              className={cn(
                "group relative h-full w-full overflow-hidden rounded-2xl border border-white/[0.15] bg-white/[0.08] backdrop-blur-sm transition-all duration-300",
                "shadow-lg hover:border-white/[0.25] hover:bg-white/[0.12] hover:shadow-xl",
              )}
              style={{
                background: `
                           linear-gradient(
                             135deg, 
                             rgba(255, 255, 255, 0.1) 0%, 
                             rgba(255, 255, 255, 0.05) 50%, 
                             rgba(255, 255, 255, 0.02) 100%
                           )
                          `,
              }}
            >
              {/* overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.15] via-transparent to-transparent opacity-60" />

              {/* Admin Actions  */}
              {adminView && (
                <div className="absolute z-50 inset-y-0 right-2 top-2.5">
                  <div className="flex items-center gap-x-1.5">

                    {/* Edit Button */}
                    <button
                      className="transition-transform duration-150 hover:scale-110 hover:opacity-80 cursor-pointer"
                    >
                      <Edit className="text-white size-5" />
                    </button>

                    {/* Delete Button */}
                    <button
                      className="transition-transform duration-150 hover:scale-110 hover:opacity-80 cursor-pointer"
                    >
                      <Trash className="text-red-500 size-5" />
                    </button>

                  </div>
                </div>
              )}


              {/* Hover effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `
                      radial-gradient(circle at 50% 50%, 
                        rgba(255, 255, 255, 0.15) 0%, 
                        rgba(255, 255, 255, 0.08) 40%, 
                        rgba(255, 255, 255, 0.03) 70%, 
                        transparent 100%
                      )
                    `,
                  filter: "blur(1px)",
                  zIndex: 1,
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex h-full flex-col justify-between gap-3 p-6">
                <div className="space-y-4">
                  <h3 className="font-audiowide text-2xl font-bold tracking-wider text-white/95 drop-shadow-sm">
                    {item.username}
                  </h3>
                  <div className="ml-auto flex w-fit items-center justify-center gap-x-1 rounded-full border border-white/[0.18] bg-white/[0.15] px-3 py-1.5 text-xs text-white/75 shadow-sm backdrop-blur-sm">
                    {item.date}
                    <Diamond className="size-2 fill-white/75 stroke-transparent" />
                    {item.time}
                  </div>
                </div>

                <div className="flex-col">
                  <p className="text-sm leading-relaxed font-light text-white/90 drop-shadow-sm">
                    "{item.feedback}"
                  </p>

                  <div className="mt-4 flex gap-1.5 border-t border-white/[0.12] pt-3">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="transition-all duration-200 hover:scale-110"
                      >
                        <Star
                          size={16}
                          className={
                            i < item.rating
                              ? "fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)] filter"
                              : "text-white/20 transition-colors hover:text-white/30"
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom gradient fade */}
              <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-8 rounded-b-2xl bg-gradient-to-t from-black/[0.15] via-black/[0.05] to-transparent" />
            </SwiperSlide>
          ))}
          {showNavigation && (
            <div>
              <div className="swiper-button-next after:hidden">
                <ChevronRightIcon className="h-6 w-6 text-white" />
              </div>
              <div className="swiper-button-prev after:hidden">
                <ChevronLeftIcon className="h-6 w-6 text-white" />
              </div>
            </div>
          )}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export { TestimonialsCarousel };
