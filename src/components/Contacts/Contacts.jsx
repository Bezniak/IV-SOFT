import {FaInstagram, FaLinkedin, FaTelegramPlane, FaWhatsapp} from "react-icons/fa";
import Form from "../FormContainer/Form.jsx";
import {FaEnvelope, FaFacebook, FaPhone} from "react-icons/fa6";
import {useTranslation} from "react-i18next";
import {motion} from "framer-motion";
import Brief from "../Brief/Brief.jsx";

const fadeInUp = {
    hidden: {opacity: 0, y: 20},
    visible: {opacity: 1, y: 0}
};

const staggerContainer = {
    hidden: {opacity: 1},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const Contacts = () => {
    const {t} = useTranslation();

    return (
        <motion.div
            className='dark:bg-gray-900 dark:text-white'
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={staggerContainer}
        >
            <div className='md:container mx-auto md:pt-40 xs:pt-32 md:pb-40 xs:pb-20 md:px-12 xs:p-4 md:p-0'>
                <motion.h1
                    className='md:text-5xl xs:text-4xl md:text-left xs:text-center mb-20 font-bold'
                    variants={fadeInUp}
                >
                    {t("contactsPage.mainTitle")}
                </motion.h1>
                <div className='flex md:flex-row xs:flex-col justify-start items-start gap-24'>
                    <motion.div className='flex-1' variants={fadeInUp}>
                        <h1 className='text-3xl mb-6'>
                            {t('contactsPage.contactsTitle')}
                        </h1>
                        <p className='text-lg'>
                            {t('contactsPage.contactsDescription')}
                        </p>
                        <motion.div variants={fadeInUp}>
                            <Form/>
                        </motion.div>
                    </motion.div>
                    <motion.div className='flex-1 flex flex-col gap-10' variants={staggerContainer}>
                        <motion.div variants={fadeInUp}>
                            <h2 className='text-3xl mb-6'>
                                {t('fill_brief')}
                            </h2>
                            <div className='text-orange-500 uppercase'>
                                <Brief/>
                            </div>
                            <p className='mt-6'>
                                {t('calculate_budget')}
                            </p>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <h2 className='text-3xl mb-6'>
                                {t('contacts')}
                            </h2>
                            <ul>
                                <li className='flex items-center mb-4'>
                                    <FaPhone className='text-lg mr-3 text-orange-500'/>
                                    <a href="tel:+375295210417" className='text-lg'>
                                        +375 (29) 521-04-17
                                    </a>
                                </li>
                                <li className='flex items-center mb-4'>
                                    <FaEnvelope className='text-lg mr-3 text-orange-500'/>
                                    <a
                                        href="mailto:ivsoft.ask@gmail.com"
                                        className='text-lg'
                                    >
                                        ivsoft.ask@gmail.com
                                    </a>
                                </li>
                                <li className='flex items-center mb-4'>
                                    <FaTelegramPlane className='text-lg mr-3 text-orange-500'/>
                                    <a
                                        href="https://t.me/ivan.bezniak"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-lg'
                                    >
                                        {t("telegram")}
                                    </a>
                                </li>
                                <li className='flex items-center mb-4'>
                                    <FaWhatsapp className='text-lg mr-3 text-orange-500'/>
                                    <a
                                        href="https://wa.me/375295210417"
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        className='text-lg'
                                    >
                                        {t("whats_app")}
                                    </a>
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div className='w-full' variants={fadeInUp}>
                            <h2 className='text-3xl mb-6'>
                                {t('address')}
                            </h2>
                            <p className='text-lg'>
                                {t("address_desc")}
                            </p>
                        </motion.div>
                        <motion.div variants={fadeInUp}>
                            <h2 className='text-3xl mb-6'>
                                {t('socialMedia')}
                            </h2>
                            <div className='flex gap-8'>
                                <a href="https://www.instagram.com/ivan_bezniak/"
                                   target='_blank'
                                   className='border w-fit p-4 rounded-full border-black dark:border-white'
                                >
                                    <FaInstagram className='text-2xl text-orange-500'/>
                                </a>
                                <a href="https://www.facebook.com/vanja.besnjak/"
                                   target='_blank'
                                   className='border w-fit p-4 rounded-full border-black dark:border-white'
                                >
                                    <FaFacebook className='text-2xl text-orange-500'/>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/ivan-bezniak-2634a11a0/"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='border w-fit p-4 rounded-full border-black dark:border-white'
                                >
                                    <FaLinkedin className='text-2xl text-orange-500'/>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contacts;
