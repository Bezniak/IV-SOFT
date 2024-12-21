import React from 'react';
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const WelcomeCardModalWindow = ({ modalTitle, modalDesc, closeModal }) => {
    const { t } = useTranslation();

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50"
            aria-hidden="true"
            initial={{ opacity: 0 }}   // Начальная непрозрачность
            animate={{ opacity: 1 }}   // Конечная непрозрачность
            exit={{ opacity: 0 }}      // Непрозрачность при выходе
            transition={{ duration: 0.4 }}  // Время анимации
        >
            <motion.div
                className="relative w-full max-w-2xl bg-white rounded-lg shadow dark:bg-gray-700"
                initial={{ scale: 0.8 }}  // Начальный масштаб
                animate={{ scale: 1 }}    // Конечный масштаб
                exit={{ scale: 0.8 }}     // Масштаб при выходе
                transition={{ duration: 0.4 }}  // Время анимации
            >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl mx-auto font-semibold text-gray-900 dark:text-white">
                        {modalTitle}
                    </h3>
                    <button
                        type="button"
                        className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={closeModal}
                    >
                        <svg
                            className="w-3 h-3"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* Modal Body */}
                <div className="p-4 space-y-4">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {modalDesc}
                    </p>
                </div>
                {/* Modal Footer */}
                <div className="flex items-center p-4 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                        type="button"
                        onClick={closeModal}
                        className="text-white mx-auto w-1/3 bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-white dark:text-black dark:hover:bg-gray-300 transition"
                    >
                        {t("home_page.got_it")}
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default WelcomeCardModalWindow;
