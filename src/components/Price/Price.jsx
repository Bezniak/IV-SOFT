import React from 'react';
import {useTranslation} from "react-i18next";
import {ROUTES} from "../../config/routes.js";
import {NavLink} from "react-router-dom";
import {handleClick} from "../../common/helpers.js";
import { motion } from "framer-motion";

const Price = () => {
    const {t} = useTranslation();


    const data = [
        {
            id: 1,
            site_name: t("landing"),
            small_desc: t("landing_site.small_desc_price"),
            desc: [
                t("landing_site.additionInfo_1"),
                t("landing_site.additionInfo_2"),
                t("landing_site.additionInfo_3"),
                t("landing_site.additionInfo_4"),
                t("landing_site.additionInfo_5"),
                t("landing_site.additionInfo_6"),
                t("landing_site.additionInfo_7"),
                t("landing_site.additionInfo_8"),
            ],
            // link: `${'sites' + ROUTES.LANDING}`,
            link: `/sites${ROUTES.LANDING}`,
            isPopular: false,
            price: t("landing_site.price")
        },
        {
            id: 2,
            site_name: t("business_card_website"),
            small_desc: t("businessCardWebsite.small_desc_price"),
            desc: [
                t("businessCardWebsite.additionInfo_1"),
                t("businessCardWebsite.additionInfo_2"),
                t("businessCardWebsite.additionInfo_3"),
                t("businessCardWebsite.additionInfo_4"),
                t("businessCardWebsite.additionInfo_5"),
                t("businessCardWebsite.additionInfo_6"),
                t("businessCardWebsite.additionInfo_7"),
                t("businessCardWebsite.additionInfo_8"),
            ],
            link: `/sites${ROUTES.BUSINESS_CARD_WEBSITE}`,
            isPopular: true,
            price: t("businessCardWebsite.price")
        },
        {
            id: 3,
            site_name: t("corporate_website"),
            small_desc: t("corporate-website.small_desc_price"),
            desc: [
                t("corporate-website.additionInfo_1"),
                t("corporate-website.additionInfo_2"),
                t("corporate-website.additionInfo_3"),
                t("corporate-website.additionInfo_4"),
                t("corporate-website.additionInfo_5"),
                t("corporate-website.additionInfo_6"),
                t("corporate-website.additionInfo_7"),
                t("corporate-website.additionInfo_8"),
                t("corporate-website.additionInfo_9"),
            ],
            link: `/sites${ROUTES.BUSINESS_CARD_WEBSITE}`,
            isPopular: false,
            price: t("corporate-website.price")
        },
        {
            id: 4,
            site_name: t("catalog_site"),
            small_desc: "Сайт с каталогом товаров или услуг. Подходит для небольших магазинов или компаний, предлагающих до 100 позиций.",
            desc: [
                t("catalog-site.additionInfo_1"),
                t("catalog-site.additionInfo_2"),
                t("catalog-site.additionInfo_3"),
                t("catalog-site.additionInfo_4"),
                t("catalog-site.additionInfo_5"),
                t("catalog-site.additionInfo_6"),
                t("catalog-site.additionInfo_7"),
                t("catalog-site.additionInfo_8"),
            ],
            link: `/sites${ROUTES.CATALOG_SITE}`,
            isPopular: false,
            price: t("catalog-site.price")
        },
        {
            id: 5,
            site_name: t("online_store"),
            small_desc: t("online-store.small_desc_price"),
            desc: [
                t("online-store.additionInfo_1"),
                t("online-store.additionInfo_2"),
                t("online-store.additionInfo_3"),
                t("online-store.additionInfo_4"),
                t("online-store.additionInfo_5"),
                t("online-store.additionInfo_6"),
                t("online-store.additionInfo_7"),
                t("online-store.additionInfo_8"),
            ],
            link: `/sites${ROUTES.ONLINE_STORE}`,
            isPopular: false,
            price: t("online-store.price")
        },
        {
            id: 6,
            site_name: t("online_school_websites"),
            small_desc: t("online-school-websites.small_desc_price"),
            desc: [
                t("online-school-websites.additionInfo_1"),
                t("online-school-websites.additionInfo_2"),
                t("online-school-websites.additionInfo_3"),
                t("online-school-websites.additionInfo_4"),
                t("online-school-websites.additionInfo_5"),
                t("online-school-websites.additionInfo_6"),
                t("online-school-websites.additionInfo_7"),
                t("online-school-websites.additionInfo_8"),
            ],
            link: `/sites${ROUTES.ONLINE_SCHOOL_WEBSITES}`,
            isPopular: false,
            price: t("online-school-websites.price")
        },
        {
            id: 7,
            site_name: t("quiz_site"),
            small_desc: t("quiz-site.small_desc_price"),
            desc: [
                t("quiz-site.additionInfo_1"),
                t("quiz-site.additionInfo_2"),
                t("quiz-site.additionInfo_3"),
                t("quiz-site.additionInfo_4"),
                t("quiz-site.additionInfo_5"),
                t("quiz-site.additionInfo_6"),
                t("quiz-site.additionInfo_7"),
            ],
            link: `/sites${ROUTES.QUIZ_SITE}`,
            isPopular: false,
            price: t("quiz-site.price")
        },
        {
            id: 8,
            site_name: t("wedding_invitation_website"),
            small_desc: t("wedding-invitation-website.small_desc_price"),
            desc: [
                t("wedding-invitation-website.additionInfo_1"),
                t("wedding-invitation-website.additionInfo_2"),
                t("wedding-invitation-website.additionInfo_3"),
                t("wedding-invitation-website.additionInfo_4"),
                t("wedding-invitation-website.additionInfo_5"),
                t("wedding-invitation-website.additionInfo_6"),
            ],
            link: `/sites${ROUTES.WEDDING_INVITATION_WEBSITE}`,
            isPopular: false,
            price: t("wedding-invitation-website.price")
        },
        {
            id: 9,
            site_name: t("websites_for_government_organizations"),
            small_desc: t("websites_for_government.small_desc_price"),
            desc: [
                t("websites_for_government.additionInfo_1"),
                t("websites_for_government.additionInfo_2"),
                t("websites_for_government.additionInfo_3"),
                t("websites_for_government.additionInfo_4"),
                t("websites_for_government.additionInfo_5"),
                t("websites_for_government.additionInfo_6"),
                t("websites_for_government.additionInfo_7"),
                t("websites_for_government.additionInfo_8"),
                t("websites_for_government.additionInfo_9"),
            ],
            link: `/sites${ROUTES.WEBSITE_FOR_GOVERNMENT_ORGANIZATIONS}`,
            isPopular: false,
            price: t("websites_for_government.price")
        },
        {
            id: 10,
            site_name: t("website_support"),
            small_desc: t("website-support.small_desc_price"),
            desc: [
                t("website-support.additionInfo_1"),
                t("website-support.additionInfo_2"),
                t("website-support.additionInfo_3"),
                t("website-support.additionInfo_4"),
                t("website-support.additionInfo_5"),
            ],
            link: `/service${ROUTES.WEBSITE_SUPPORT}`,
            isPopular: false,
            price: t("website-support.price")
        },
        {
            id: 11,
            site_name: t("SMM_service"),
            small_desc: t("SMM.small_desc_price"),
            desc: [
                t("SMM.additionInfo_1"),
                t("SMM.additionInfo_2"),
                t("SMM.additionInfo_3"),
                t("SMM.additionInfo_4"),
                t("SMM.additionInfo_5"),
            ],
            link: `/service${ROUTES.SMM}`,
            isPopular: true,
            price: t("SMM.price")
        },
        {
            id: 12,
            site_name: t("localization_and_translation"),
            small_desc: t("localization-translation.small_desc_price"),
            desc: [
                t("localization-translation.additionInfo_1"),
                t("localization-translation.additionInfo_2"),
                t("localization-translation.additionInfo_3"),
                t("localization-translation.additionInfo_4"),
                t("localization-translation.additionInfo_5"),
            ],
            link: `/service${ROUTES.LOCALIZATION_SUPPORT}`,
            isPopular: false,
            price: t("localization-translation.price")
        }
    ];

    // Настройки анимации
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };


    return (
        <div className='dark:bg-gray-900 dark:text-white'>
            <div className='md:container md:pt-48 xs:pt-32 pb-20 mx-auto'>
                <div className='mx-auto flex flex-col md:gap-8 xs:gap-4 md:w-3/4 xs:w-full xs:p-4 text-justify'>
                    <h1 className='text-3xl uppercase font-bold'>
                        {t("priceTitle")}
                    </h1>
                    <p className='text-lg'>
                        {t("priceDesc_1")}
                    </p>
                    <p className='text-lg md:mb-16 xs:mb-6'>
                        {t("priceDesc_2")}
                    </p>
                </div>
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {data.map((item) => (
                        <motion.div
                            key={item.id}
                            className={`relative ${
                                item.isPopular
                                    ? 'bg-gray-900 dark:bg-gray-800 border border-gray-700 dark:border-gray-900 shadow-lg text-white'
                                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white'
                            } rounded-lg p-12 flex flex-col`}
                            variants={itemVariants}
                        >
                            {item.isPopular && (
                                <div
                                    className="absolute top-3 right-3 bg-orange-500 text-white text-xs uppercase px-3 py-1 rounded-md">
                                    {t("popular")}
                                </div>
                            )}
                            <h5 className="text-2xl font-bold mb-4">{item.site_name}</h5>
                            <p className="text-2xl font-semibold mb-5 text-orange-500">{item.price}</p>
                            <p className="text-base mb-7 text-justify">{item.small_desc}</p>
                            <ul className="mb-7 space-y-4 text-base">
                                {item.desc.map((desc, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <span className="mr-4 text-orange-500">✔</span> {desc}
                                    </li>
                                ))}
                            </ul>
                            <NavLink
                                to={item.link}
                                className={`inline-block px-6 py-4 mt-auto rounded-lg uppercase text-center ${
                                    item.isPopular
                                        ? 'text-black bg-white hover:bg-gray-700 transition'
                                        : 'text-white bg-black hover:bg-gray-700 transition'
                                }`}
                                onClick={handleClick}
                            >
                                {t("more_details")}
                            </NavLink>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Price;