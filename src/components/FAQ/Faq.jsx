import React, {useRef, useState} from 'react';
import {useTranslation} from "react-i18next";
import { motion, useInView } from "framer-motion";


const Faq = () => {
    const [activeId, setActiveId] = useState(null);
    const {t} = useTranslation();


    const data = [
        {id: 1, ask: t("FAQ.ask_1"), answer: t("FAQ.answer_1")},
        {id: 2, ask: t("FAQ.ask_2"), answer: t("FAQ.answer_2")},
        {id: 3, ask: t("FAQ.ask_3"), answer: t("FAQ.answer_3")},
        {id: 4, ask: t("FAQ.ask_4"), answer: t("FAQ.answer_4")},
        {id: 5, ask: t("FAQ.ask_5"), answer: t("FAQ.answer_5")},
        {id: 6, ask: t("FAQ.ask_6"), answer: t("FAQ.answer_6")},
        {id: 7, ask: t("FAQ.ask_7"), answer: t("FAQ.answer_7")},
        {id: 8, ask: t("FAQ.ask_8"), answer: t("FAQ.answer_8")},
        {id: 9, ask: t("FAQ.ask_9"), answer: t("FAQ.answer_9")},
        {id: 10, ask: t("FAQ.ask_10"), answer: t("FAQ.answer_10")},
        {id: 11, ask: t("FAQ.ask_11"), answer: t("FAQ.answer_11")},
        {id: 12, ask: t("FAQ.ask_12"), answer: t("FAQ.answer_12")},
        {id: 13, ask: t("FAQ.ask_13"), answer: t("FAQ.answer_13")},
        {id: 14, ask: t("FAQ.ask_14"), answer: t("FAQ.answer_14")},
        {id: 15, ask: t("FAQ.ask_15"), answer: t("FAQ.answer_15")},
        {id: 16, ask: t("FAQ.ask_16"), answer: t("FAQ.answer_16")},
    ]

    const toggleActive = (id) => {
        setActiveId((prevId) => (prevId === id ? null : id));
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="dark:bg-gray-900 dark:text-white">
            <div className="md:container mx-auto md:pt-52 xs:pt-28 md:pb-40 xs:pb-12">
                <h1 className="text-3xl md:mb-16 xs:mb-6 text-center font-bold">
                    {t("FAQ.title")}
                </h1>
                <p className="text-lg md:mb-16 xs:pb-6 text-center md:w-1/2 mx-auto">
                    {t("FAQ.desc")}
                </p>
                <div
                    id="accordion"
                    data-accordion="open"
                    className="md:w-1/2 xs:w-full xs:p-4 md:p-0 mx-auto"
                >
                    {data.map((item) => {
                        const ref = useRef(null);
                        const isInView = useInView(ref, {once: true});

                        return (
                            <motion.div
                                ref={ref}
                                key={item.id}
                                className="mb-10"
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                variants={containerVariants}
                                transition={{duration: 0.6, ease: "easeOut"}}
                            >
                                <h2 id={`accordion-heading-${item.id}`}>
                                    <button
                                        type="button"
                                        className={`flex items-center justify-between w-full p-5 font-medium rtl:text-right ${
                                            activeId === item.id
                                                ? "text-white bg-black"
                                                : "text-black bg-white"
                                        } border border-black focus:ring-4 focus:ring-black dark:focus:ring-gray-800 dark:bg-gray-900 dark:text-white dark:border-gray-700 hover:bg-black dark:hover:text-black hover:text-white transition dark:hover:bg-white`}
                                        onClick={() => toggleActive(item.id)}
                                        aria-expanded={activeId === item.id}
                                        aria-controls={`accordion-body-${item.id}`}
                                    >
                                        <span className='px-2 text-left'>{item.ask}</span>
                                        <svg
                                            className={`w-4 h-4 shrink-0 transform transition-transform ${
                                                activeId === item.id ? "rotate-180" : "rotate-0"
                                            }`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 8l4 4 4-4"
                                            />
                                        </svg>
                                    </button>
                                </h2>
                                <div
                                    id={`accordion-body-${item.id}`}
                                    className={`${
                                        activeId === item.id ? "block" : "hidden"
                                    } p-5 border border-t-0 border-black dark:border-gray-700 dark:bg-gray-900`}
                                    aria-labelledby={`accordion-heading-${item.id}`}
                                >
                                    <p className="text-black dark:text-gray-400">{item.answer}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Faq;