import React from 'react';
import {NavLink, useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {IoMdCheckmark} from "react-icons/io";
import {ROUTES} from "../../config/routes.js"; // Импортируем useTranslation

const Websites = () => {
    const {id} = useParams(); // Получаем параметр из URL
    const {t} = useTranslation(); // Получаем функцию t для перевода

    // Объект с полным контентом для каждого типа сайта
    const content = {
        'business-card-website': {
            title: t('businessCardWebsite.name'),
            description: t('businessCardWebsite.what_it_is'),
            img: '/disness-card.jpg',
            backgroundImage: '/benefit_bg.jpg',
            benefits_title: t("businessCardWebsite.benefits_title"),
            benefits_desc: [
                t("businessCardWebsite.benefits_1"),
                t("businessCardWebsite.benefits_2"),
                t("businessCardWebsite.benefits_3"),
                t("businessCardWebsite.benefits_4"),
                t("businessCardWebsite.benefits_5"),
            ],
            what_includes_title: t("businessCardWebsite.include_title"),
            includes_item: [
                t("businessCardWebsite.desc_1"),
                t("businessCardWebsite.desc_2"),
                t("businessCardWebsite.desc_3"),
                t("businessCardWebsite.desc_4"),
                t("businessCardWebsite.desc_5"),
            ],
            site_example_img: "/business_site_example.jpg",
            why_need_title: t("businessCardWebsite.need_title"),
            need_desc: [
                t("businessCardWebsite.need_desc_1"),
                t("businessCardWebsite.need_desc_2"),
                t("businessCardWebsite.need_desc_3"),
                t("businessCardWebsite.need_desc_4"),
            ],
            conclusion: t("businessCardWebsite.conclusion")
        },
        'landing': {
            title: t('landing'),
            description: t('landing_site.what_it_is'),
            img: '/landing.jpg',
            backgroundImage: '/landing_bg.jpg',
            benefits_title: t("landing_site.benefits_title"),
            benefits_desc: [
                t("landing_site.benefits_1"),
                t("landing_site.benefits_3"),
                t("landing_site.benefits_2"),
                t("landing_site.benefits_4"),
            ],
            what_includes_title: t("landing_site.include_title"),
            includes_item: [
                t("landing_site.desc_1"),
                t("landing_site.desc_2"),
                t("landing_site.desc_3"),
                t("landing_site.desc_4"),
                t("landing_site.desc_5"),
            ],
            site_example_img: "/langing_ex.jpg",
            why_need_title: t("landing_site.need_title"),
            need_desc: [
                t("landing_site.need_desc_1"),
                t("landing_site.need_desc_2"),
                t("landing_site.need_desc_3"),
                t("landing_site.need_desc_4"),
            ],
            conclusion: t("landing_site.conclusion")
        },
    };

    // Функция для рендеринга контента в зависимости от типа сайта
    const renderContent = () => {
        const siteContent = content[id];
        if (siteContent) {
            return (
                <div className="dark:bg-gray-900">
                    <div className='flex md:h-screen xs:flex-col md:flex-row items-center justify-center'>
                        <div className='md:order-1 xs:order-2 md:w-1/2 xs:w-full xs:p-4 md:p-10'>
                            <h1 className='text-2xl mb-10 font-bold uppercase dark:text-white xs:mt-10 xs:text-center'>{siteContent.title}</h1>
                            <p className='leading-10 text-justify dark:text-white'>{siteContent.description}</p>
                            <div className='md:mt-20 xs:mt-10 xs:mb-10 flex md:flex-row xs:flex-col items-center md:gap-12 xs:gap-6 dark:text-white'>
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
                                className="h-full w-full object-cover object-centertransition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                                src={siteContent.img}
                                alt={`image of ${siteContent.title}`}/>
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
                        <h2 className='text-2xl mb-5 text-white font-bold'>{siteContent.benefits_title}</h2>
                        <ul>
                            {siteContent.benefits_desc.map((item, i) => (
                                <div
                                    key={i}
                                    className='flex items-center gap-3 text-lg text-white'
                                >
                                    <IoMdCheckmark className='mb-10 text-yellow-300'/>
                                    <li className='mb-10'>{item}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className='flex md:flex-row xs:flex-col mb-10'>
                        <div className='md:w-1/2 xs:w-full pt-16 pl-4 dark:text-white'>
                            <h2 className='text-2xl pl-8 pb-4 font-bold'>
                                {siteContent.what_includes_title}
                            </h2>
                            <ul className='p-4'>
                                {siteContent.includes_item.map((item, i) => (
                                    <div
                                        key={i}
                                        className='flex items-center gap-3 text-lg'
                                    >
                                        <IoMdCheckmark className='mb-10 text-yellow-300'/>
                                        <li className='mb-10'>{item}</li>
                                    </div>
                                ))}
                            </ul>
                            <h2 className='text-2xl pl-8 pb-4 font-bold'>
                                {siteContent.why_need_title}
                            </h2>
                            <ul className='p-4'>
                                {siteContent.need_desc.map((item, i) => (
                                    <div
                                        key={i}
                                        className='flex items-center gap-3 text-lg'
                                    >
                                        <IoMdCheckmark className='mb-10 text-yellow-300'/>
                                        <li className='mb-10'>{item}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                        <figure
                            className="relative md:w-1/2 xs:w-full transition-all duration-300 cursor-pointer filter">
                            <a href="#">
                                <img src={siteContent.site_example_img}
                                     alt="image description"/>
                            </a>
                            <figcaption className="absolute bg-yellow-300 w-full text-center py-3 text-lg bottom-6">
                                <p>{t("example_text")}</p>
                            </figcaption>
                        </figure>
                    </div>
                    <div className='md:pb-20 md:pt-8 xs:pb-10'>
                        <p className='md:container xs:p-4 mx-auto leading-10 text-lg text-justify dark:text-white'>
                            {siteContent.conclusion}
                        </p>
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

export default Websites;
