import React from 'react';
import {useTranslation} from "react-i18next";
import {NavLink, useParams} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";
import {GiCheckMark} from "react-icons/gi";

const Services = () => {
    const {id} = useParams(); // Получаем параметр из URL
    const {t} = useTranslation(); // Получаем функцию t для перевода

    // Объект с полным контентом для каждого типа сайта
    const content = {
        'website-support': {
            title: t('website-support.name'),
            img: '/support.png',
            description: t('website-support.what_it_is'),
            websiteSupportTitle: t("website-support.service_include.title"),
            service_include: [
                {
                    image: '/tecknic_support.jpg',
                    title: t("website-support.technical_support"),
                    desc: [t("website-support.desc_1"), t("website-support.desc_2"), t("website-support.desc_3"),
                    ]
                },
                {
                    image: '/content_support.jpg',
                    title: t("website-support.content_support"),
                    desc: [t("website-support.content_desc_1"), t("website-support.content_desc_2"), t("website-support.content_desc_3"),
                    ]
                },
                {
                    image: '/protected.jpg',
                    title: t("website-support.site_security_title"),
                    desc: [t("website-support.security_desc_1"), t("website-support.security_desc_2"), t("website-support.security_desc_3"),
                    ]
                },
                {
                    image: '/analitics.jpg',
                    title: t("website-support.analytics"),
                    desc: [t("website-support.analytics_desc_1"), t("website-support.analytics_desc_2"), t("website-support.analytics_desc_3"),
                    ]
                },
                {
                    image: '/redesign.jpg',
                    title: t("website-support.redesign_update"),
                    desc: [t("website-support.redesign_desc_1"), t("website-support.redesign_desc_2"), t("website-support.redesign_desc_3"),
                    ]
                },
                {
                    image: '/integration.jpg',
                    title: t("website-support.integration_automation"),
                    desc: [t("website-support.integration_automation_desc_1"), t("website-support.integration_automation_desc_2"), t("website-support.integration_automation_desc_3"),
                    ]
                }
            ],
            "": ""
        },
    };

    // Функция для рендеринга контента в зависимости от типа сайта
    const renderContent = () => {
        const siteContent = content[id];
        if (siteContent) {
            return (
                <div>
                    <div className='flex md:h-screen xs:flex-col md:flex-row items-center justify-center'>
                        <div className='md:order-1 xs:order-2 md:w-1/2 xs:w-full xs:p-4 md:p-10'>
                            <h1 className='text-2xl mb-10 font-bold uppercase dark:text-white xs:mt-10 xs:text-center'>{siteContent.title}</h1>
                            <p className='leading-10 text-justify dark:text-white'>{siteContent.description}</p>
                            <div
                                className='md:mt-20 xs:mt-10 xs:mb-10 flex md:flex-row xs:flex-col items-center md:gap-12 xs:gap-6 dark:text-white'>
                                <NavLink to={ROUTES.PRICES}
                                         className='xs:w-full text-center border border-black py-3 px-6 rounded hover:bg-black hover:text-white transition dark:hover:bg-white dark:hover:text-black dark:border-white'>
                                    {t("find_out_the_cost")}
                                </NavLink>
                                <button
                                    className='xs:w-full text-center border border-black py-3 px-6 rounded hover:bg-black hover:text-white transition dark:hover:bg-white dark:hover:text-black dark:border-white'>
                                    {t("get_consultation")}
                                </button>
                            </div>
                        </div>
                        <div className='md:order-2 xs:order-1 md:w-1/2 w-full h-full'>
                            <img
                                className="h-full w-full object-cover"
                                src={siteContent.img}
                                alt={`image of ${siteContent.title}`}/>
                        </div>
                    </div>

                    <div className='md:container mx-auto pt-20 pb-20'>
                        <h1 className='pb-10 text-3xl'>{siteContent.websiteSupportTitle}</h1>
                        <div className='flex gap-20 flex-wrap justify-center'>
                            {siteContent.service_include.map((item, index) => (
                                <div
                                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                                    key={index}
                                >
                                    <img className="rounded-t-lg w-full h-64 object-cover" src={item.image} alt=""/>

                                    <div className="p-5">
                                        <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {item.title}
                                        </h5>
                                        {
                                            item.desc.map((item, index) => (
                                                <ul key={index} className='flex items-center justify-start gap-3 pb-4'>
                                                    <GiCheckMark className='top-2'/>
                                                    <li>{item}</li>
                                                </ul>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            );
        }
        return <div>{t('choose-site-type')}</div>; // Перевод для отсутствующего контента
    };

    return (
        <div>
            {renderContent()}
        </div>
    );
};

export default Services;