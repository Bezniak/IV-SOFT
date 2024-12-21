import React from 'react';
import {useTranslation} from "react-i18next";

const OurServiceHomePage = () => {
    const {t} = useTranslation();

    return (
        <div>
            <div className='pt-20 pb-20' style={{backgroundColor: "#d1d1d3"}}>
                <h2 className='uppercase text-4xl text-center mt-16'>
                    {t("home_page.our_service")}
                </h2>
                <img
                    src="/kand1.png"
                    alt="line"
                    className='mx-auto mt-6'
                />
                <p className='md:container mx-auto text-center mt-10 tracking-wider'>
                    {t("home_page.our_service_desc")}
                </p>
            </div>
            <div className='flex md:flex-row xs:flex-col flex-wrap dark:bg-gray-800'>
                <div className='md:container mx-auto w-full flex flex-1 flex-wrap justify-center items-start md:gap-8'>
                    {[
                        {
                            title: t("home_page.web_design"),
                            description: t("home_page.web_design_desc")
                        },
                        {
                            title: t("home_page.seo"),
                            description: t("home_page.seo_desc")
                        },
                        {
                            title: t("home_page.web_development"),
                            description: t("home_page.web_development_desc")
                        },
                        {
                            title: t("home_page.responsive_design"),
                            description: t("home_page.responsive_design_dsc")
                        }
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="md:mt-10 md:w-2/5 xs:w-full flex flex-col items-center md:flex-row md:max-w-xl dark:bg-gray-800"
                        >
                            <div className="flex flex-col justify-between p-4 leading-normal flex-grow">
                                <h5 className="mb-2 text-lg font-bold uppercase tracking-tight text-gray-900 dark:text-white">
                                    {service.title}
                                </h5>
                                <hr className='w-1/3 text-black mb-2'/>
                                <hr className='w-1/4 text-black mb-2'/>
                                <p className="mb-3 text-justify dark:text-gray-400">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <img src="/ourService.jpg" alt="ourService"/>
            </div>
        </div>
    );
};

export default OurServiceHomePage;
