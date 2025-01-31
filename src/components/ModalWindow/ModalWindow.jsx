import React, { useEffect } from 'react';
import Form from "../FormContainer/Form.jsx";
import { useTranslation } from "react-i18next";

const ModalWindow = ({ onClose, isModalWindowVisible }) => {
    const { t } = useTranslation();

    // Добавление/удаление класса для отключения скролла
    useEffect(() => {
        if (isModalWindowVisible) {
            document.body.style.overflow = 'hidden'; // Отключаем скролл
        } else {
            document.body.style.overflow = ''; // Восстанавливаем скролл
        }

        // Очистка при размонтировании компонента
        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalWindowVisible]);

    const handleBackgroundClick = (event) => {
        if (event.target.id === "modal-background") {
            onClose();
        }
    };

    return (
        <div className='z-50 dark:bg-gray-900'>
            <button
                className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                type="button"
                onClick={onClose}
            >
                Toggle modal
            </button>

            {isModalWindowVisible && (
                <div
                    id="modal-background"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70"
                    onClick={handleBackgroundClick}
                >
                    <div
                        className="relative p-4 md:w-1/2"
                        onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике внутри модального окна
                    >
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div
                                className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {t("fill_out_the_form")}
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    onClick={onClose}
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <Form />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ModalWindow;
