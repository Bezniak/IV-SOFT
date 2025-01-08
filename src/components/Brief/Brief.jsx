import React from 'react';
import {useTranslation} from "react-i18next";
import {Controller, useForm} from "react-hook-form";

const Brief = () => {
    const {t} = useTranslation(); // Получаем функцию t для перевода
    const { register, handleSubmit, control, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
    }

    return (
        <div className='dark:bg-gray-900'>
            <div className='md:container mx-auto flex flex-col items-center justify-center pt-36 dark:text-white'>
                <h1 className='text-3xl font-bold'>
                    {t("brief.brief_button")}
                </h1>
                <p className='text-lg pt-10 pb-3 text-center'>
                    {t("brief.brief_rule_1")}
                </p>
                <p className='text-lg font-bold text-center'>
                    {t("brief.brief_rule_2")}
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4 md:w-1/2 pt-20'>
                    <div
                        className='rounded-full border py-3 px-12 text-2xl font-bold text-white bg-black w-1/2 text-center uppercase dark:text-black dark:bg-white'>
                        {t("brief.marketing")}
                    </div>

                    <div className='md:w-1/2'>
                        <label htmlFor="companyName" className="block font-medium">
                            {t("brief.companyName")}
                        </label>
                        <input
                            id="companyName"
                            type="text"
                            {...register('companyName')}
                            className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
                        />
                        <p className='text-xs'>
                            {t("brief.company_name_desc")}
                        </p>
                        {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName.message}</p>}
                    </div>

                    <div className='md:w-1/2'>
                        <label htmlFor="business_direction" className="block font-medium">
                            {t("brief.business_direction")}
                        </label>
                        <input
                            id="business_direction"
                            type="text"
                            {...register('business_direction')}
                            className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
                        />
                        <p className='text-xs'>
                            {t("brief.business_direction_desc")}
                        </p>
                        {errors.business_direction && <p className="text-red-500 text-sm">{errors.business_direction.message}</p>}
                    </div>

                    <div className='md:w-1/2'>
                        <label htmlFor="goal_desc" className="block font-medium">
                            {t("brief.goal")}
                        </label>
                        <input
                            id="goal_desc"
                            type="text"
                            {...register('goal_desc')}
                            className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
                        />
                        <p className='text-xs'>
                            {t("brief.goal_desc")}
                        </p>
                        {errors.goal_desc && <p className="text-red-500 text-sm">{errors.goal_desc.message}</p>}
                    </div>

                    <div className='md:w-1/2'>
                        <label htmlFor="competitors" className="block font-medium">
                            {t("brief.competitors")}
                        </label>
                        <input
                            id="competitors"
                            type="text"
                            {...register('competitors')}
                            className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
                        />
                        <p className='text-xs'>
                            {t("brief.competitors_desc")}
                        </p>
                        {errors.competitors && <p className="text-red-500 text-sm">{errors.competitors.message}</p>}
                    </div>


                    <div className='md:w-1/2'>
                       <p>
                           {t("brief.target_audience")}
                       </p>

                        <Controller
                            name="gender"
                            control={control}
                            defaultValue={[]}
                            render={({ field }) => (
                                <div className="flex flex-col space-y-2">
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            value="Male"
                                            {...field}
                                            className="form-checkbox w-6 h-6 border border-gray-400 checked:bg-black"
                                        />
                                        <span>Мужской</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            value="Female"
                                            {...field}
                                            className="form-checkbox w-6 h-6 border border-gray-400 checked:bg-black"
                                        />
                                        <span>Женский</span>
                                    </label>
                                    <label className="flex items-center space-x-2">
                                        <input
                                            type="checkbox"
                                            value="All"
                                            {...field}
                                            className="form-checkbox w-6 h-6 border border-gray-400 checked:bg-black"
                                        />
                                        <span>Для всех</span>
                                    </label>
                                </div>
                            )}
                        />

                    </div>
                </form>

            </div>
        </div>
    );
};

export default Brief;