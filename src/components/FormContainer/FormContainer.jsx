import React from 'react';
import {useTranslation} from "react-i18next";
import Form from "./Form.jsx";

const FormContainer = () => {
    const {t} = useTranslation();


    return (
        <div className='dark:bg-gray-900'>
            <div className='md:container mx-auto xs:pt-10 pb-24'>
                <h2 className='text-center md:text-4xl xs:text-2xl uppercase mb-14 mt-20 dark:text-white'>
                    {t("home_page.form_title")}
                </h2>
                <div className='flex md:flex-row xs:flex-col items-center gap-10'>
                    <div className="md:w-6/12 xs:w-full rounded-lg">
                        <img className="rounded" src="/conclusion.jpg" alt="conclusion"/>
                    </div>
                    <div className='md:w-6/12 xs:w-full'>
                        <Form/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormContainer;