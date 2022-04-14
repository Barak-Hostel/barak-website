import React from "react";
import Achievements from "./Achievements/Achievements";
import About from "./About us/About.js";
import Hmc from "./HmcSlider/hmcSlider.js";
const Home = () => {
    return (
        <React.Fragment>
            <div
                style={{
                    width: "100%",
                    height: "60px",
                }}
            ></div>
            <About />
            <Achievements />
            <Hmc />
        </React.Fragment>
    );
};

export default Home;
