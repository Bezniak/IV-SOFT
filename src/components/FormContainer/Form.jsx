import {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useTranslation} from "react-i18next";
import axios from 'axios';
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../config/routes.js";
import {handleClick} from "../../common/helpers.js";

const Form = () => {
    const {t} = useTranslation();
    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const [status, setStatus] = useState(null); // null, "success", "error"
    const [consentGiven, setConsentGiven] = useState(false);

    const onSubmit = async (data) => {
        const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
        const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
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
            setStatus("success");
            reset();
            setConsentGiven(false); // Сбрасываем чекбокс
        } catch (error) {
            console.error("Error sending data to Telegram:", error);
            setStatus("error");
        }
    };

    return (
        <div className="md:w-full xs:w-full mx-auto p-4 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {status === "success" ? (
                <div className="p-4 bg-green-100 text-green-800 rounded-md">
                    <p>{t("form_sent_successfully")}</p>
                </div>
            ) : status === "error" ? (
                <div className="p-4 bg-red-100 text-red-800 rounded-md">
                    <p>{t("form_send_error")}</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Поле имени */}
                    <div>
                        <input
                            id="name"
                            type="text"
                            {...register('name', {required: t("name_required")})}
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
                            className="mt-1 p-2 w-full border resize-none border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:border-black dark:focus:ring-white dark:focus:border-white"
                            placeholder={t("message")}
                        />
                    </div>

                    {/* Чекбокс согласия */}
                    <div className="flex items-center space-x-2">
                        <input
                            id="consent"
                            type="checkbox"
                            checked={consentGiven}
                            onChange={(e) => setConsentGiven(e.target.checked)}
                            className="w-6 h-6 mr-3 text-black dark:text-orange-500 focus:ring-black dark:focus:ring-orange-500 border-gray-300 rounded"
                        />
                        <label htmlFor="consent" className="text-sm hover:text-orange-500 transition">
                            <NavLink to={ROUTES.PRIVACY_POLICY} onClick={handleClick}>
                                {t("consent_text")}
                            </NavLink>
                        </label>
                    </div>

                    {/* Кнопка отправки */}
                    <div className="text-right">
                        <button
                            type="submit"
                            disabled={!consentGiven}
                            className={`md:w-fit xs:w-fit py-3 px-5 md:mt-10 bg-black uppercase dark:bg-white text-white font-semibold rounded-md hover:bg-gray-700 dark:hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white dark:text-black ${!consentGiven ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {t("discuss_product")}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Form;
