import {useTranslation} from "react-i18next";
import {TiTick} from "react-icons/ti";
import {motion} from 'framer-motion';

const Portfolio = () => {
    const {t} = useTranslation();

    const fadeInUp = {
        initial: {opacity: 0, y: 50},
        animate: {opacity: 1, y: 0, transition: {duration: 0.6}}
    };

    const stagger = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div className='dark:bg-gray-900 dark:text-white'>
            <motion.div
                className='pt-40 md:pb-40 xs:pb-20 md:container mx-auto xs:px-4'
                initial="initial"
                animate="animate"
                exit="exit"
                variants={stagger}
            >
                <motion.h1
                    className='text-4xl mb-10 md:text-left xs:text-center'
                    variants={fadeInUp}
                >
                    {t("portfolioPage.title")}
                </motion.h1>
                <motion.p
                    className='text-lg mb-10 md:text-left xs:text-justify'
                    variants={fadeInUp}
                >
                    {t("portfolioPage.desc")}
                </motion.p>

                <motion.div className='mb-20' variants={stagger}>
                    <motion.h2
                        className='text-3xl mb-3'
                        variants={fadeInUp}
                    >
                        {t("portfolioPage.productTitle_1")}
                    </motion.h2>
                    <motion.a
                        href="https://nv-massage.by/"
                        target='_blank'
                        className='text-lg text-orange-500 mb-10 block'
                        variants={fadeInUp}
                    >
                        https://nv-massage.by
                    </motion.a>
                    <motion.h2
                        className='text-2xl mb-3'
                        variants={fadeInUp}
                    >
                        {t("portfolioPage.functionality")}
                    </motion.h2>
                    <motion.ul className='flex flex-col mb-10' variants={stagger}>
                        {[...Array(5)].map((_, index) => (
                            <motion.li
                                key={index}
                                className='flex items-center p-3'
                                variants={fadeInUp}
                            >
                                <TiTick className='mr-2 text-3xl text-orange-500'/>
                                {t(`portfolioPage.func_${index + 1}`)}
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        variants={stagger}
                    >
                        {[...Array(4)].map((_, colIndex) => (
                            <motion.div
                                key={colIndex}
                                className="grid gap-4"
                                variants={stagger}
                            >
                                {[...Array(3)].map((_, rowIndex) => (
                                    <motion.div
                                        key={rowIndex}
                                        variants={fadeInUp}
                                    >
                                        <img
                                            className="h-auto max-w-full rounded-lg"
                                            src={`/nv_${colIndex * 3 + rowIndex + 1}.jpg`}
                                            alt=""
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div variants={stagger}>
                    <motion.h2
                        className='text-3xl mb-3'
                        variants={fadeInUp}
                    >
                        {t("portfolioPage.productTitle_2")}
                    </motion.h2>
                    <motion.a
                        href="https://asalodafood.by/"
                        target='_blank'
                        className='text-lg text-orange-500 mb-10 block'
                        variants={fadeInUp}
                    >
                        https://asalodafood.by
                    </motion.a>
                    <motion.h2
                        className='text-2xl mb-3'
                        variants={fadeInUp}
                    >
                        {t("portfolioPage.functionality")}
                    </motion.h2>
                    <motion.ul className='flex flex-col mb-10' variants={stagger}>
                        {[...Array(6)].map((_, index) => (
                            <motion.li
                                key={index}
                                className='flex items-center p-3'
                                variants={fadeInUp}
                            >
                                <TiTick className='mr-2 text-3xl text-orange-500'/>
                                {t(`portfolioPage.func_2_${index + 1}`)}
                            </motion.li>
                        ))}
                    </motion.ul>
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-4"
                        variants={stagger}
                    >
                        {[...Array(4)].map((_, colIndex) => (
                            <motion.div
                                key={colIndex}
                                className="grid gap-4"
                                variants={stagger}
                            >
                                {[...Array(3)].map((_, rowIndex) => (
                                    <motion.div
                                        key={rowIndex}
                                        variants={fadeInUp}
                                    >
                                        <img
                                            className="h-auto max-w-full rounded-lg"
                                            src={`/af_${colIndex * 3 + rowIndex + 1}.jpg`}
                                            alt=""
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Portfolio;
