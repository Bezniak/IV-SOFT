import React from 'react';
import {useTranslation} from "react-i18next";

const Careers = () => {
    const {t} = useTranslation();

    return (
        <div className='dark:bg-gray-900 dark:text-white'>
            <div>
                <img
                    src="/hiring_mobile.png"
                    alt="pp mobile"
                    className='h-screen w-full object-cover object-center sm:block md:hidden'
                />
                {/* Изображение для планшетов */}
                <img
                    src="/hiring_mobile.png"
                    alt="pp tablet"
                    className='h-screen w-full object-cover object-center hidden md:block lg:hidden'
                />
                {/* Изображение для десктопов */}
                <img
                    src="/hiring.jpg"
                    alt="pp desktop"
                    className='h-screen w-full object-cover object-center hidden lg:block'
                />
            </div>

            <div className='md:container mx-auto xs:p-4 md:pt-20 md:pb-12'>
                <h1 className='text-3xl mb-5 xs:text-center md:text-left'>
                    {t("career.title")}
                </h1>
                <p className='text-lg leading-10 text-justify'>
                    {t("career.desc")}
                </p>
                <p className='text-lg leading-10 text-justify'>
                    {t("career.desc_2")}
                </p>
            </div>
k
            <img
                className="h-1/3 min-w-full object-cover object-center transition-all duration-300 rounded-lg blur-sm hover:blur-none"
                src="/job.jpg"
                alt="image description"
            />

            <p className='text-lg leading-10 md:container md:pt-20 md:pb-20 mx-auto xs:p-4 text-justify '>
                {t("career.leave_email")}
                <a
                    href="mailto:ivsoft.ask@gmail.com?subject=Career"
                    className="text-blue-500 underline ml-1 hover:text-yellow-300 transition dark:text-yellow-300"
                >
                    ivsoft.ask@gmail.com
                </a>
                {t("career.leave_email_2")}
            </p>
        </div>
    );
};

export default Careers;
