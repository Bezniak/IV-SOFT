import {useTranslation} from "react-i18next";
import {motion} from 'framer-motion';

const OurHelp = () => {
    const {t} = useTranslation();

    // Animation configuration for scaling and fading in
    const fadeInScale = {
        hidden: {opacity: 0, scale: 0.8},
        visible: {opacity: 1, scale: 1, transition: {duration: 0.6, ease: "easeOut"}},
    };

    return (
        <div className='dark:bg-gray-900'>
            <div className='md:container mx-auto pt-20'>
                <motion.h2
                    className='text-center text-3xl mb-12 dark:text-white'
                    variants={fadeInScale}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
                >
                    {t("home_page.help_title")}
                </motion.h2>
                <div className='flex flex-wrap justify-center'>
                    <motion.div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <img src="/gal1.jpg" alt="gal1"/>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-gray-200 dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <div className="p-5">
                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {t("home_page.hosting_help_title")}
                            </h5>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">
                                {t("home_page.hosting_help_desc")}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <img src="/gal2.jpg" alt="gal2"/>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-gray-200 dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <div className="p-5">
                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {t("home_page.take_into_account")}
                            </h5>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">
                                {t("home_page.take_into_account_desc")}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-gray-200 dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <div className="p-5">
                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {t("home_page.seo_settings_title")}
                            </h5>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">
                                {t("home_page.seo_settings_desc")}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <img src="/gal3.jpg" alt="gal3"/>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-gray-200 dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <div className="p-5">
                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {t("home_page.register_title")}
                            </h5>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">
                                {t("home_page.register_desc")}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <img src="/gal4.jpg" alt="gal4"/>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <img src="/illustrators.jpg" alt="illustrators" className='h-full object-cover'/>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-gray-200 dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <div className="p-5">
                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {t("home_page.fast_loading")}
                            </h5>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">
                                {t("home_page.fast_loading_desc")}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <img src="/flat-lay-workstation.jpg" alt="flat-lay-workstation"
                             className='h-full object-cover'/>
                    </motion.div>

                    <motion.div
                        className="max-w-sm bg-gray-200 dark:bg-gray-800 dark:border-gray-700"
                        variants={fadeInScale}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}
                    >
                        <div className="p-5">
                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {t("home_page.certificate")}
                            </h5>
                            <p className="mb-3 text-gray-700 dark:text-gray-400">
                                {t("home_page.certificate_desc")}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default OurHelp;
