import React from 'react';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import WelcomeCard from "./WelcomeCard.jsx";
import { SlScreenDesktop } from "react-icons/sl";
import { CgScreenWide } from "react-icons/cg";
import { HiSupport } from "react-icons/hi";
import { useAuth } from "../../context/AuthContext.jsx";

const Welcome = () => {
    const { t } = useTranslation();
    const { theme, locale } = useAuth();

    const backgroundImage = (() => {
        if (theme === "dark" && locale === "ru") {
            return '/laptop-dark.png';
        } else if (theme === "dark" && locale === "en") {
            return '/laptop-black-en.png';
        } else if (theme === "light" && locale === "ru") {
            return '/laptop-white.png';
        } else if (theme === "light" && locale === "en") {
            return '/laptop-white-en.png';
        }
    })();

    return (
        <motion.div
            className='xs:p-4 mx-auto w-full dark:bg-gray-800 dark:border-gray-700'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Теперь анимация будет срабатывать каждый раз
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
        >
            <motion.h1
                className='uppercase text-4xl text-center mt-16 dark:text-white'
                variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
            >
                {t("home_page.welcome")}
            </motion.h1>
            <motion.img
                src="/kand1.png"
                alt="line"
                className='mx-auto mt-6'
                variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.div
                className='md:container flex justify-between mx-auto flex-wrap'
                variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
                }}
            >
                <WelcomeCard
                    svg={<SlScreenDesktop />}
                    title={t("home_page.fully_responsive")}
                    desc={t("home_page.fully_responsive_desc")}
                    modalDesc={t("home_page.fully_responsive_modal_desk")}
                />
                <WelcomeCard
                    svg={<HiSupport />}
                    title={t("home_page.friendly_support")}
                    desc={t("home_page.friendly_support_desc")}
                    modalDesc={t("home_page.friendly_support_modal_desc")}
                />
                <WelcomeCard
                    svg={<CgScreenWide />}
                    title={t("home_page.retina_display")}
                    desc={t("home_page.retina_display_desc")}
                    modalDesc={t("home_page.retina_display_modal_desc")}
                />
            </motion.div>
            <motion.img
                src={backgroundImage}
                alt="laptop"
                className='mx-auto w-4/5'
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8 }}
            />
        </motion.div>
    );
};

export default Welcome;
