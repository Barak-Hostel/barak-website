import React from "react";
import Achievements from "./Achievements/Achievements";
import About from "./About us/About.js";
import Hmc from "./HmcSlider/hmcSlider.js";
const Home = () => {
    return (
        <React.Fragment>
            <About />
            <Achievements />
            <Hmc />
        </React.Fragment>
    );
};

export default Home;
