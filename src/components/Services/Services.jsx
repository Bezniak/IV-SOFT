import React from 'react';
import {useTranslation} from "react-i18next";
import {NavLink, useParams} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";
import {GiCheckMark} from "react-icons/gi";
import {IoMdCheckmark} from "react-icons/io";

const Services = () => {
    const {id} = useParams(); // Получаем параметр из URL
    const {t} = useTranslation(); // Получаем функцию t для перевода

    // Объект с полным контентом для каждого типа сайта
    const content = {
        'website-support': {
            title: t('website-support.name'),
            img: '/support.png',
            description: t('website-support.what_it_is'),
            websiteSupportTitle: t("website-support.service_include_title"),
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
            support_important: t("website-support.support_important"),
            backgroundImage: '/support_bg.jpg',
            benefits_desc: [
                t("website-support.be_available"),
                t("website-support.safety_requirements"),
                t("website-support.respond_to_customer"),
                t("website-support.work_quickly"),
            ],
        },
        'SMM': {
            title: t('SMM.name'),
            img: '/SMM.jpg',
            description: t('SMM.what_it_is'),
            websiteSupportTitle: t("SMM.service_include_title"),
            service_include: [
                {
                    image: '/strategy.jpg',
                    title: t("SMM.technical_support"),
                    desc: [t("SMM.desc_1"), t("SMM.desc_2"), t("SMM.desc_3"),
                    ]
                },
                {
                    image: '/content.jpg',
                    title: t("SMM.content_support"),
                    desc: [t("SMM.content_desc_1"), t("SMM.content_desc_2"), t("SMM.content_desc_3"),
                    ]
                },
                {
                    image: '/posts.jpg',
                    title: t("SMM.site_security_title"),
                    desc: [t("SMM.security_desc_1"), t("SMM.security_desc_2"), t("SMM.security_desc_3"),
                    ]
                },
                {
                    image: '/audience.jpg',
                    title: t("SMM.analytics"),
                    desc: [t("SMM.analytics_desc_1"), t("SMM.analytics_desc_2"), t("SMM.analytics_desc_3"),
                    ]
                },
                {
                    image: '/result.jpg',
                    title: t("SMM.redesign_update"),
                    desc: [t("SMM.redesign_desc_1"), t("SMM.redesign_desc_2"), t("SMM.redesign_desc_3"),
                    ]
                },
                {
                    image: '/integrations.jpg',
                    title: t("SMM.integration_automation"),
                    desc: [t("SMM.integration_automation_desc_1"), t("SMM.integration_automation_desc_2"), t("SMM.integration_automation_desc_3"),
                    ]
                }
            ],
            support_important: t("SMM.support_important"),
            backgroundImage: '/bg_smm.png',
            benefits_desc: [
                t("SMM.be_available"),
                t("SMM.safety_requirements"),
                t("SMM.respond_to_customer"),
                t("SMM.work_quickly"),
            ],
        },
        'localization-translation': {
            title: t('localization-translation.name'),
            img: '/translate.jpg',
            description: t('localization-translation.what_it_is'),
            websiteSupportTitle: t("localization-translation.service_include_title"),
            service_include: [
                {
                    image: '/translator.jpg',
                    title: t("localization-translation.technical_support"),
                    desc: [t("localization-translation.desc_1"), t("localization-translation.desc_2"), t("localization-translation.desc_3"),
                    ]
                },
                {
                    image: '/localisation.jpg',
                    title: t("localization-translation.content_support"),
                    desc: [t("localization-translation.content_desc_1"), t("localization-translation.content_desc_2"), t("localization-translation.content_desc_3"),
                    ]
                },
                {
                    image: '/localisation_map.jpg',
                    title: t("localization-translation.site_security_title"),
                    desc: [t("localization-translation.security_desc_1"), t("localization-translation.security_desc_2"), t("localization-translation.security_desc_3"),
                    ]
                },
                {
                    image: '/quality.jpg',
                    title: t("localization-translation.analytics"),
                    desc: [t("localization-translation.analytics_desc_1"), t("localization-translation.analytics_desc_2"), t("localization-translation.analytics_desc_3"),
                    ]
                },
                {
                    image: '/copyright.jpg',
                    title: t("localization-translation.redesign_update"),
                    desc: [t("localization-translation.redesign_desc_1"), t("localization-translation.redesign_desc_2"), t("localization-translation.redesign_desc_3"),
                    ]
                },
                {
                    image: '/multilanguage.jpg',
                    title: t("localization-translation.integration_automation"),
                    desc: [t("localization-translation.integration_automation_desc_1"), t("localization-translation.integration_automation_desc_2"), t("localization-translation.integration_automation_desc_3"),
                    ]
                }
            ],
            support_important: t("localization-translation.support_important"),
            backgroundImage: '/bg_translate.jpg',
            benefits_desc: [
                t("localization-translation.be_available"),
                t("localization-translation.safety_requirements"),
                t("localization-translation.respond_to_customer"),
                t("localization-translation.work_quickly"),
            ],
        },
    };

    // Функция для рендеринга контента в зависимости от типа сайта
    const renderContent = () => {
        const siteContent = content[id];
        if (siteContent) {
            return (
                <div className='dark:bg-gray-900'>
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
                        <h1 className='pb-10 text-3xl dark:text-white'>{siteContent.websiteSupportTitle}</h1>
                        <div className='flex gap-20 flex-wrap justify-center'>
                            {siteContent.service_include.map((item, index) => (
                                <div
                                    className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                                    key={index}
                                >
                                    <img className="rounded-t-lg w-full h-64 object-cover" src={item.image} alt=""/>

                                    <div className="p-5 dark:text-white">
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


                    <div
                        className='h-dvh pt-20 pb-20 flex flex-col justify-center items-center'
                        style={{
                            backgroundImage: `url(${siteContent.backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            padding: '20px',
                        }}
                    >
                        <h2 className='text-2xl mb-5 text-white font-bold'>
                            {siteContent.support_important}
                        </h2>
                        <ul>
                            {siteContent.benefits_desc.map((item, i) => (
                                <div
                                    key={i}
                                    className='flex items-center gap-3 text-lg text-white md:container mx-auto'
                                >
                                    <IoMdCheckmark className='mb-10 text-yellow-300'/>
                                    <li className='mb-10'>{item}</li>
                                </div>
                            ))}
                        </ul>
                    </div>


                    <div className='h-screen flex flex-col justify-center items-center md:container mx-auto'>
                        <p className="text-2xl text-center leading-10 dark:text-white">
                            {t("brief.fill_brief")}
                        </p>
                        <div className='mt-20'>
                            <NavLink to={ROUTES.BRIEF}
                                     className='xs:w-full text-center border border-black py-3 px-6 rounded hover:bg-black hover:text-white transition dark:hover:bg-white dark:hover:text-black dark:border-white dark:text-white'>
                                {t("brief.brief_button")}
                            </NavLink>
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