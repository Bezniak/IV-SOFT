import React from 'react';
import { useTranslation } from "react-i18next";

const OurMission = () => {
    const { t } = useTranslation();

    return (
        <div className="relative flex items-center">
            <div className="flex-1">
                <img src="mission.jpg" alt="mission" className="w-full" />
            </div>
            <div className="flex-1 relative">
                <h1 className="mb-20 text-2xl uppercase md:ml-20">{t("home_page.mission")}</h1>
                <h2 className="text-4xl absolute -left-20 top-0 z-10 p-2">{t("home_page.mission_title")}</h2>
                <p className="mt-16">{t("home_page.mission_desc")}</p>
            </div>
        </div>
    );
};

export default OurMission;
