"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Button } from "@heroui/react";
import Link from "next/link";

const Carousel = () => {
  const carouselData = [
    {
      id: 1,
      title: "Find Expert Tutors Easily",
      description:
        "Browse experienced tutors from different subjects and book your preferred mentor in just a few clicks.",
      bg_image: "/slide/slide1.jpg",
      buttonText: "Tutors",
    },
    {
      id: 2,
      title: "Book Live Classes Anytime",
      description:
        "Schedule online or offline classes based on your preferred time and learning style.",
      bg_image: "/slide/slide2.jpg",
      buttonText: "Tutors",
    },
    {
      id: 3,
      title: "Learn With Top Rated Mentors",
      description:
        "Improve your skills with highly rated tutors and personalized learning sessions.",
      bg_image: "/slide/slide3.jpg",
      buttonText: "Tutors",
    },
  ];

  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {carouselData.map((carousel) => (
          <SwiperSlide key={carousel.id}>
            <div
              style={{
                backgroundImage: `url(${carousel.bg_image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
              className="px-12 py-12 h-140 flex justify-center items-center"
            >
              <div className="text-center">
                <h2 className="text-[48px] text-[#5bd9b3] font-bold">
                  {carousel.title}
                </h2>

                <p className="max-w-90 mx-auto text-[24px] text-[#ffffff]">
                  {carousel.description}
                </p>

                <div className="mt-4">
                  <Link href="/tutors">
                    <Button
                      variant="outline"
                      className="rounded text-[#5bd9b3] px-8"
                    >
                      {carousel.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Carousel;
