import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import WelcomeCardModalWindow from "./WelcomeCardModalWindow.jsx";

const WelcomeCard = ({ svg, title, desc, modalDesc }) => {
    const { t } = useTranslation();
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    return (
        <motion.div
            className="max-w-sm p-6 dark:bg-gray-800 dark:border-gray-700 mx-auto text-center group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div
                className='text-5xl border rounded-full w-fit p-4 text-gray-400 mx-auto mt-10 mb-8 transition-all group-hover:bg-black group-hover:text-white group-hover:border-white dark:group-hover:text-white dark:group-hover:bg-black'>
                {svg}
            </div>
            <h5 className=" text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {title}
            </h5>
            <hr className='w-1/2 mx-auto mt-3 mb-8 text-gray-400' />
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                {desc}
            </p>
            <button
                className="inline-flex font-medium items-center border rounded px-4 py-2 transition-all group-hover:bg-black group-hover:text-white dark:text-white dark:group-hover:bg-black"
                onClick={() => setIsButtonClicked(!isButtonClicked)}
            >
                {t("home_page.learn_more")}
            </button>

            {isButtonClicked && (
                <WelcomeCardModalWindow
                    modalTitle={title}
                    modalDesc={modalDesc}
                    closeModal={() => setIsButtonClicked(!isButtonClicked)}
                    isButtonClicked={isButtonClicked}
                />
            )}
        </motion.div>
    );
};

export default WelcomeCard;
