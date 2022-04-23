import React from "react";
import './Homefont.css'
import Achievements from "./Achievements/Achievements";
import About from "./About us/About.js";
import Hmc from "./HmcSlider/hmcSlider.js";
import Alumni from "./Alumni/Alumni";
const Home = () => {
    return (
        <React.Fragment>
            <div style={{ width: "100%", height: "60px" }}></div>
            <About />
            <Hmc />
            <Achievements />
            <Alumni/>
        </React.Fragment>
    );
};

export default Home;
