import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";
import {useAuth} from "../../context/AuthContext.jsx";
import {useTranslation} from "react-i18next";
import useLanguage from "../../hooks/useLanguage.js";


// Import flag images
import LanguageSelector from "./LanguageSelector.jsx";
import {FaMoon} from "react-icons/fa";
import {IoSunnySharp} from "react-icons/io5";


const Navbar = () => {
    const {theme, toggleTheme, locale, changeLocale} = useAuth();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [isSitesDropdownOpen, setIsSitesDropdownOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const {currentLanguage, changeLanguage} = useLanguage();
    const {t} = useTranslation();


    // Закрытие меню при клике вне меню или прокрутке
    useEffect(() => {
        const handleClickOutside = (event) => {
            const mobileMenu = document.getElementById('mobile-dropdown');
            const sites = document.getElementById('sites-dropdown');
            const services = document.getElementById('services-dropdown');
            const languageMenu = document.getElementById('languageDropdown');

            if (mobileMenu && !mobileMenu.contains(event.target) && !event.target.closest('.mobile-toggle') && isMobileMenuOpen) {
                setIsMobileMenuOpen(false);
            }
            if (sites && !sites.contains(event.target) && !event.target.closest('.sites-toggle') && isSitesDropdownOpen) {
                setIsSitesDropdownOpen(false);
            }
            if (services && !services.contains(event.target) && !event.target.closest('.services-toggle') && isServicesDropdownOpen) {
                setIsServicesDropdownOpen(false);
            }
            if (languageMenu && !languageMenu.contains(event.target) && !event.target.closest('.language-toggle') && isLanguageDropdownOpen) {
                setIsLanguageDropdownOpen(false);
            }

        };

        const handleScroll = () => {
            if (isMobileMenuOpen || isSitesDropdownOpen || isServicesDropdownOpen || isLanguageDropdownOpen) {
                setIsMobileMenuOpen(false)
                setIsSitesDropdownOpen(false);
                setIsServicesDropdownOpen(false);
                setIsLanguageDropdownOpen(false);
            }
        };

        // Добавляем слушатели событий
        document.addEventListener('click', handleClickOutside);
        window.addEventListener('scroll', handleScroll);

        // Убираем слушатели при размонтировании компонента
        return () => {
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isMobileMenuOpen, isServicesDropdownOpen, isLanguageDropdownOpen, isSitesDropdownOpen]);


    return (
        <nav className="absolute z-50 top-0 left-1/2 transform -translate-x-1/2 bg-transparent border-gray-200 w-full">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

                <div className='flex gap-6'>
                    <button data-collapse-toggle="navbar-dropdown" type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mobile-toggle"
                            aria-controls="navbar-dropdown" aria-expanded="false"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 17 14">
                            <path stroke="gray" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>

                    <NavLink to={ROUTES.HOME} className="flex flex-col items-center justify-center">
                        <div
                            className="self-center md:text-4xl xs:text-lg font-semibold whitespace-nowrap text-black dark:text-white border dark:border-none rounded px-3 py-1 bg-white dark:bg-transparent border-black dark:border-white">
                            IV-SOFT
                        </div>
                    </NavLink>
                </div>

                <div className='md:hidden xs:flex gap-6'>
                    <LanguageSelector
                        currentLanguage={currentLanguage}
                        changeLanguage={changeLanguage}
                        isOpen={isLanguageDropdownOpen}
                        toggleOpen={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                    />
                    <button
                        onClick={toggleTheme}
                        className="text-white hover:text-gray-700 dark:text-gray-300 dark:hover:text-white focus:outline-none"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <IoSunnySharp size={28} color="black"/> : <FaMoon size={24}/>}
                    </button>
                </div>

                <div className={`$ ${isMobileMenuOpen ? 'block' : 'hidden'} w-full  md:block md:w-auto md:bg-transparent xs:bg-white md:dark:bg-transparent xs:dark:bg-gray-900`}
                     id="mobile-dropdown"
                >
                    <ul className="flex flex-col font-medium p-4 md:p-0 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        <li>
                            <NavLink to={ROUTES.HOME}
                                     className="block py-2 px-3 md:p-0 dark:text-white text-black rounded bg-transparent transition"
                                     aria-current="page">
                                {t("home")}
                            </NavLink>
                        </li>

                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                    className="flex items-center justify-between w-full py-2 px-3 dark:text-white transition text-black rounded  md:border-0 md:p-0 md:w-auto sites-toggle"
                                    onClick={() => setIsSitesDropdownOpen(!isSitesDropdownOpen)}
                            >
                                {t('website_development')}
                                <svg
                                    className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>

                            {/*Sites Dropdown menu*/}
                            <div id="sites-dropdown"
                                 className={`z-10 ${isSitesDropdownOpen ? '' : 'hidden'} absolute mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow md:w-fit xs:w-10/12 dark:bg-gray-700 dark:divide-gray-600`}
                            >
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400 dark:bg-gray-900"
                                    aria-labelledby="dropdownLargeButton">
                                    <li onClick={() => setIsSitesDropdownOpen(!isSitesDropdownOpen)}>
                                        <NavLink to={ROUTES.BUSINESS_CARD_WEBSITE}
                                                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            {t("business_card_website")}
                                        </NavLink>
                                    </li>
                                    <li onClick={() => setIsSitesDropdownOpen(!isSitesDropdownOpen)}>
                                        <NavLink to={ROUTES.LANDING}
                                                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            {t("landing")}
                                        </NavLink>
                                    </li>
                                    <li onClick={() => setIsSitesDropdownOpen(!isSitesDropdownOpen)}>
                                        <NavLink to={ROUTES.CORPORATE_WEBSITE}
                                                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            {t("corporate_website")}
                                        </NavLink>
                                    </li>
                                    <li onClick={() => setIsSitesDropdownOpen(!isSitesDropdownOpen)}>
                                        <NavLink to={ROUTES.CATALOG_SITE}
                                                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            {t("catalog_site")}
                                        </NavLink>
                                    </li>
                                    <li onClick={() => setIsSitesDropdownOpen(!isSitesDropdownOpen)}>
                                        <NavLink to={ROUTES.ONLINE_STORE}
                                                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            {t("online_store")}
                                        </NavLink>
                                    </li>
                                    <li onClick={() => setIsSitesDropdownOpen(!isSitesDropdownOpen)}>
                                        <NavLink to={ROUTES.ONLINE_SCHOOL_WEBSITES}
                                                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            {t("online_school_websites")}
                                        </NavLink>
                                    </li>
                                    <li onClick={() => setIsSitesDropdownOpen(!isSitesDropdownOpen)}>
                                        <NavLink to={ROUTES.QUIZ_SITE}
                                                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            {t("quiz_site")}
                                        </NavLink>
                                    </li>
                                    <li onClick={() => setIsSitesDropdownOpen(!isSitesDropdownOpen)}>
                                        <NavLink to={ROUTES.WEDDING_INVITATION_WEBSITE}
                                                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            {t("wedding_invitation_website")}
                                        </NavLink>
                                    </li>
                                    <li onClick={() => setIsSitesDropdownOpen(!isSitesDropdownOpen)}>
                                        <NavLink to={ROUTES.WEBSITE_FOR_GOVERNMENT_ORGANIZATIONS}
                                                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            {t("websites_for_government_organizations")}
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>
                        </li>


                        <li>
                            <button id="dropdownNavbarLink-2" data-dropdown-toggle="dropdownNavbar"
                                    className="flex items-center justify-between w-full py-2 px-3 dark:text-white text-black rounded hover:bg-transparent md:border-0 transition md:p-0 md:w-auto services-toggle"
                                    onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                            >
                                {t('services')}
                                <svg
                                    className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="none" viewBox="0 0 10 6"
                                >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                          strokeWidth="2" d="m1 1 4 4 4-4"
                                    />
                                </svg>
                            </button>

                            {/*Services Dropdown menu*/}
                            <div id="services-dropdown"
                                 className={`z-10 ${isServicesDropdownOpen ? '' : 'hidden'} absolute mt-2 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow md:w-fit xs:w-10/12 dark:bg-gray-700 dark:divide-gray-600 services-toggle`}
                            >
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400 dark:bg-gray-900"
                                    aria-labelledby="dropdownLargeButton">
                                    <li onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}>
                                        <NavLink to={ROUTES.BUSINESS_CARD_WEBSITE}
                                                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            {t("website_support")}
                                        </NavLink>
                                    </li>
                                    <li onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}>
                                        <NavLink to={ROUTES.LANDING}
                                                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            {t("SMM")}
                                        </NavLink>
                                    </li>
                                    <li onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}>
                                        <NavLink to={ROUTES.CORPORATE_WEBSITE}
                                                 className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            {t("localization_and_translation")}
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </li>


                        <li>
                            <NavLink to={ROUTES.PORTFOLIO}
                                     className="block py-2 px-3 rounded md:border-0 md:p-0 dark:text-white text-black transition"
                            >
                                {t("portfolio")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES.PRICES}
                                     className="block py-2 px-3 rounded md:border-0 md:p-0 dark:text-white text-black transition"
                            >
                                {t("prices")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES.FAQ}
                                     className="block py-2 px-3 rounded md:border-0 md:p-0 dark:text-white text-black transition"
                            >
                                {t("Faq")}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ROUTES.CONTACTS}
                                     className="block py-2 px-3 rounded md:border-0 md:p-0 dark:text-white text-black transition"
                            >
                                {t("contacts")}
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className='gap-10 xs:hidden md:flex'>
                    <LanguageSelector
                        currentLanguage={currentLanguage}
                        changeLanguage={changeLanguage}
                        isOpen={isLanguageDropdownOpen}
                        toggleOpen={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                    />

                    <button
                        onClick={toggleTheme}
                        className="text-dark hover:text-gray-700 dark:text-gray-300 dark:hover:text-white focus:outline-none"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <IoSunnySharp size={28} color="yellow"/> : <FaMoon size={24}/>}
                    </button>

                </div>

            </div>
        </nav>

    );
};

export default Navbar;