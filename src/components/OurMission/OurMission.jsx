import React from 'react';
import { useTranslation } from "react-i18next";

const OurMission = () => {
    const { t } = useTranslation();

    return (
        <div className="relative flex flex-col items-center xs:space-y-4 md:flex-row dark:bg-gray-800 dark:border-gray-700">
            <div className="relative xs:w-full md:w-1/2">
                {/* Фоновое изображение */}
                <img
                    src="/mission.jpg"
                    alt="mission"
                    className="w-full xs:h-56 md:h-auto object-cover xs:rounded-lg md:rounded-none"
                />
                {/* Блок с текстом и затемнением */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-60 text-white px-4 py-2 xs:text-sm md:text-lg rounded">
                        <div className="xs:text-2xl md:text-4xl font-bold">
                            {t("home_page.mission")}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 relative text-center xs:px-4">
                <h2 className="xs:text-3xl md:text-6xl xs:my-4 md:my-0 md:absolute md:-left-20 top-0 z-10 dark:md:bg-black dark:text-white dark:md:opacity-60">
                    {t("home_page.mission_title")}
                </h2>
                <p className="text-left xs:mt-6 md:mt-52 xs:text-sm md:text-base xs:w-full md:w-3/4 mx-auto dark:text-white tracking-wider">
                    {t("home_page.mission_desc")}
                </p>
                <button className='md:mt-20 xs:mt-10 mb-10 border py-2 px-4 border-black rounded hover:bg-black hover:text-white transition dark:border-white dark:text-white'>
                    {t("home_page.leave_message")}
                </button>
            </div>
        </div>
    );
};

export default OurMission;
