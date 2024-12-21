import React from 'react';
import Slider from "../components/Slider/Slider.jsx";
import Welcome from "../components/Welcome/Welcome.jsx";
import OurServiceHomePage from "../components/OurServiceHomePage/OurServiceHomePage.jsx";
import Technologies from "../components/Technologies/Technologies.jsx";
import OurMission from "../components/OurMission/OurMission.jsx";

const Home = () => {
    return (
        <div className=''>
            <Slider/>
            <Welcome/>
            <OurServiceHomePage/>
            <Technologies/>
            <OurMission/>
        </div>
    );
};

export default Home;