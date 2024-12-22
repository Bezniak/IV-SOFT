import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from "react-i18next";
import axios from 'axios';

const Form = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (data) => {
        const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID; // Замените на ваш chat ID
        const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN; // Замените на ваш токен
        const telegramApiUrl = `https://api.telegram.org/bot${token}`;

        const message = `
<b>${t("name")}:</b> ${data.name}
<b>${t("phone")}:</b> ${data.phone}
<b>${t("email")}:</b> ${data.email}
<b>${t("message")}:</b> ${data.message || 'Без сообщения'}
        `;

        try {
            await axios.post(`${telegramApiUrl}/sendMessage`, {
                chat_id: chatId,
                text: message,
                parse_mode: "HTML",
            });

            alert(t("form_sent_successfully"));
            reset();
        } catch (error) {
            console.error("Error sending data to Telegram:", error);
            alert(t("form_send_error"));
        }
    };

    return (
        <div className="md:w-6/12 xs:w-full mx-auto p-4 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Поле имени */}
                <div>
                    <input
                        id="name"
                        type="text"
                        {...register('name', { required: t("name_required") })}
                        className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
                        placeholder={t('name')}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>

                {/* Поле телефона */}
                <div>
                    <input
                        id="phone"
                        type="tel"
                        {...register('phone', {
                            required: t("phone_required"),
                            pattern: {
                                value: /^\+?\d{1,3}(\s?|\(\d{1,4}\))?([\s.-]?\d{1,4}){2,}$/,
                                message: t("enter_valid_phone_number"),
                            }
                        })}
                        className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
                        placeholder={t('phone')}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                </div>

                {/* Поле email */}
                <div>
                    <input
                        id="email"
                        type="email"
                        {...register('email', {
                            required: t("email_required"),
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: t("enter_valid_email"),
                            }
                        })}
                        className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
                        placeholder={t("email")}
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>

                {/* Поле сообщения */}
                <div>
                    <textarea
                        id="message"
                        {...register('message')}
                        rows="4"
                        className="mt-1 p-2 w-full border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
                        placeholder={t("message")}
                    />
                </div>

                {/* Кнопка отправки */}
                <div className="text-right">
                    <button
                        type="submit"
                        className="md:w-1/3 xs:w-fit py-3 px-5 md:mt-10 bg-black uppercase dark:bg-white text-white font-semibold rounded-md hover:bg-gray-700 dark:hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white dark:text-black"
                    >
                        {t("discuss_product")}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;