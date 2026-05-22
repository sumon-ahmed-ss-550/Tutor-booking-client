"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Button } from "@heroui/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Carousel = () => {
  const carouselData = [
    {
      id: 1,
      title: "Find Expert Tutors Easily",
      description:
        "Browse experienced tutors from different subjects and book your preferred mentor in just a few clicks.",
      bg_image: "/slide/slide1.jpg",
      buttonText: "Book Now",
    },
    {
      id: 2,
      title: "Book Live Classes Anytime",
      description:
        "Schedule online or offline classes based on your preferred time and learning style.",
      bg_image: "/slide/slide2.jpg",
      buttonText: "Get Started",
    },
    {
      id: 3,
      title: "Learn With Top Rated Mentors",
      description:
        "Improve your skills with highly rated tutors and personalized learning sessions.",
      bg_image: "/slide/slide3.jpg",
      buttonText: "Explore Features",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        effect={"fade"}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper w-full h-125 md:h-150 lg:h-175"
      >
        {carouselData.map((carousel) => (
          <SwiperSlide key={carousel.id}>
            <div className="relative w-full h-full flex items-center group overflow-hidden">
              {/* Pixel Perfect Background Image with Zoom Animation on Hover */}
              <div
                className="absolute inset-0 w-full h-full transition-transform duration-100000 group-hover:scale-110 ease-linear"
                style={{
                  backgroundImage: `url(${carousel.bg_image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent z-10" />

              {/* Text Content */}
              <div className="relative z-20 text-left px-20 md:px-28 lg:px-32 w-full max-w-7xl mx-auto flex flex-col items-start gap-6">
                {/* Title */}
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white max-w-3xl leading-tight tracking-tight drop-shadow-2xl transition-all duration-500 hover:tracking-wide">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                    {carousel.title.split(" ")[0]}
                  </span>{" "}
                  {carousel.title.split(" ").slice(1).join(" ")}
                </h2>

                {/* Description */}
                <p className="max-w-2xl text-lg md:text-xl lg:text-2xl text-gray-200 drop-shadow-md font-light leading-relaxed transition-all duration-500 hover:text-white">
                  {carousel.description}
                </p>

                {/* Interactive Button */}
                <div className="mt-6">
                  <Link href="/tutors">
                    <Button
                      size="lg"
                      className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-teal-500 px-8 py-6 font-semibold text-white shadow-[0_0_20px_rgba(4,133,247,0.3)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(91,217,179,0.5)] active:scale-95 border-none"
                    >
                      <span className="relative z-10 text-lg">
                        {carousel.buttonText}
                      </span>
                      <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />

                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover/btn:duration-1000 group-hover/btn:[transform:skew(-12deg)_translateX(100%)]">
                        <div className="relative h-full w-12 bg-white/20" />
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Global overrides for Swiper Pagination/Navigation to look more modern */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          background: rgba(255, 255, 255, 0.15) !important;
          backdrop-filter: blur(8px);
          width: 50px !important;
          height: 50px !important;
          border-radius: 50% !important;
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          transition: all 0.3s ease;
        }
        .swiper-button-prev {
          left: 16px !important;
        }
        .swiper-button-next {
          right: 16px !important;
        }
        @media (min-width: 768px) {
          .swiper-button-prev {
            left: 24px !important;
          }
          .swiper-button-next {
            right: 24px !important;
          }
        }
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.25) !important;
          transform: scale(1.1);
          border-color: white;
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px !important;
          font-weight: bold;
        }
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 30px;
          border-radius: 5px;
          background: #5bd9b3 !important;
        }
      `,
        }}
      />
    </section>
  );
};

export default Carousel;
