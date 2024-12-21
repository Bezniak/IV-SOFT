import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Добавляем стили для навигации
import {Autoplay, Navigation, Pagination} from 'swiper/modules';
import './Slider.css';
import {useTranslation} from "react-i18next";
import {useAuth} from "../../context/AuthContext.jsx";

export default function Slider() {
    const {theme} = useAuth();
    const {t} = useTranslation();

    // Choose background image based on theme
    const backgroundImage = theme === "dark" ? '/bg-dark.jpg' : '/bg-light.jpg';

    const title = [
        t("home_page.easy_to_create"),
        t("home_page.promote_company"),
        t("home_page.trust_to_experience"),
    ];

    return (
        <div className="relative overflow-hidden w-screen h-screen">
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt="background slide"
                    className="w-full h-full object-cover"
                />
            </div>

            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true} // Включаем стрелки
                modules={[Autoplay, Pagination, Navigation]}
                effect="slide"
                speed={3000}
                className="relative z-10 w-full h-full"
            >
                {title.map((text, index) => (
                    <SwiperSlide key={index}>
                        <h1 className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-black dark:text-white xs:text-3xl md:text-6xl text-center">
                            {text}
                        </h1>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
