import React from 'react';
import Slider from "../components/Slider/Slider.jsx";
import Welcome from "../components/Welcome/Welcome.jsx";
import OurServiceHomePage from "../components/OurServiceHomePage/OurServiceHomePage.jsx";
import Technologies from "../components/Technologies/Technologies.jsx";
import OurMission from "../components/OurMission/OurMission.jsx";
import OurHelp from "../components/OurHelp/OurHelp.jsx";
import FormContainer from "../components/FormContainer/FormContainer.jsx";

const Home = () => {
    return (
        <div className=''>
            <Slider/>
            <Welcome/>
            <OurServiceHomePage/>
            <Technologies/>
            <OurMission/>
            <OurHelp/>
            <FormContainer/>
        </div>
    );
};

export default Home;