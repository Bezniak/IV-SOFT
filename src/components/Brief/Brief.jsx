import {useTranslation} from "react-i18next";
import {useAuth} from "../../context/AuthContext.jsx";

const Brief = () => {
    const {locale} = useAuth();
    const {t} = useTranslation();

    const formLink = locale === 'en'
        ? "https://forms.yandex.ru/u/6790dfd590fa7b5b421c164c/"
        : "https://forms.yandex.ru/u/67800e14d0468829221ac619/";

    return (
        <a
            href={formLink}
            target="_blank"
            rel="noopener noreferrer"
            className='xs:w-full text-center border border-black py-3 px-6 rounded hover:bg-black hover:text-white transition dark:hover:bg-white dark:hover:text-black dark:border-white dark:text-white'
        >
            {t("brief.brief_button")}
        </a>
    );
};

export default Brief;
