import React from 'react';
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

// Анимационные настройки
const animationVariants = {
    hidden: {opacity: 0, y: 50},
    visible: {opacity: 1, y: 0, transition: {duration: 0.6}},
};

// Компонент для анимации секций
const AnimatedSection = ({children}) => {
    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.1});

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={animationVariants}
        >
            {children}
        </motion.div>
    );
};

const AboutUs = () => {
    const {t} = useTranslation();

    return (
        <div className="dark:bg-gray-900 pb-20">
            {/* Первая секция */}
            <AnimatedSection>
                <div className="flex h-screen xs:flex-col md:flex-row items-center justify-center">
                    <h1 className="md:w-1/2 z-50 px-4 md:text-gray-900 xs:absolute md:relative xs:text-white text-2xl md:text-4xl uppercase text-center dark:text-white">
                        {t("aboutUs.welcome_to")}
                    </h1>
                    <div className="md:w-1/2 w-full h-full">
                        <img
                            src="/aboutUs.jpg"
                            alt="aboutUs img"
                            className="h-full w-full object-cover object-center rounded"
                        />
                    </div>
                </div>
            </AnimatedSection>

            <div className="xs:pt-8 md:pt-0">
                {/* Вторая секция */}
                <AnimatedSection>
                    <div className="flex md:flex-row xs:flex-col md:container mx-auto justify-center items-center">
                        <img
                            className="md:order-1 xs:order-2 h-auto md:w-1/2 xs:w-full md:max-w-4xl transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                            src="/welcome.jpg"
                            alt="image description"
                        />
                        <h2 className="md:order-2 xs:order-1 md:w-1/2 xs:w-full text-2xl text-center p-4 dark:text-white">
                            {t("aboutUs.welcome")}
                        </h2>
                    </div>
                </AnimatedSection>

                {/* Третья секция */}
                <AnimatedSection>
                    <div className="flex md:flex-row xs:flex-col md:container mx-auto justify-center items-center">
                        <div className="md:order-1 xs:order-1 p-4 md:w-1/2 xs:w-full dark:text-white">
                            <h2 className="text-2xl text-left p-4">{t("home_page.mission")}</h2>
                            <p className="text-base mt-4 text-left">
                                {t("aboutUs.mission_desc")}
                            </p>
                        </div>
                        <img
                            className="md:order-2 xs:order-2 h-auto md:w-1/2 xs:w-full md:max-w-4xl transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                            src="/mission.jpg"
                            alt="image description"
                        />
                    </div>
                </AnimatedSection>

                {/* Четвертая секция */}
                <AnimatedSection>
                    <div className="flex md:flex-row xs:flex-col md:container mx-auto justify-center items-center">
                        <img
                            className="md:order-1 xs:order-2 h-auto md:w-1/2 xs:w-full md:max-w-4xl transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                            src="/choose.jpg"
                            alt="image description"
                        />
                        <div className="md:order-2 xs:order-1 p-4 md:w-1/2 xs:w-full dark:text-white">
                            <h2 className="text-2xl text-left p-4">{t("aboutUs.why_choose_us")}</h2>
                            <p className="text-base text-left mt-4">{t("aboutUs.why_choose_us_desc_1")}</p>
                            <p className="text-base text-left mt-4">{t("aboutUs.why_choose_us_desc_2")}</p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Пятая секция */}
                <AnimatedSection>
                    <div className="flex md:flex-row xs:flex-col md:container mx-auto justify-center items-center">
                        <div className="p-4 md:w-1/2 xs:w-full dark:text-white">
                            <h2 className="text-2xl text-left p-4">{t("aboutUs.our_values")}</h2>
                            <p className="text-base text-left mt-4">{t("aboutUs.our_value_desc_1")}</p>
                            <p className="text-base text-left mt-4">{t("aboutUs.our_value_desc_2")}</p>
                            <p className="text-base text-left mt-4">{t("aboutUs.our_value_desc_3")}</p>
                        </div>
                        <img
                            className="h-auto md:w-1/2 xs:w-full md:max-w-4xl transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                            src="/our_value.jpg"
                            alt="image description"
                        />
                    </div>
                </AnimatedSection>

                {/* Шестая секция */}
                <AnimatedSection>
                    <div className="flex md:flex-row xs:flex-col md:container mx-auto justify-center items-center">
                        <img
                            className="md:order-1 xs:order-2 h-auto md:w-1/2 xs:w-full md:max-w-4xl transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0"
                            src="/approach.jpg"
                            alt="image description"
                        />
                        <div className="md:order-2 xs:order-1 p-4 md:w-1/2 xs:w-full dark:text-white">
                            <h2 className="text-2xl text-left p-4">{t("aboutUs.out_approach")}</h2>
                            <p className="text-base text-left mt-4">{t("aboutUs.out_approach_des_1")}</p>
                            <p className="text-base text-left mt-4">{t("aboutUs.out_approach_des_2")}</p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default AboutUs;
