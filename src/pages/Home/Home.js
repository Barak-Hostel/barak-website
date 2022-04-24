import React from "react";
import "./Homefont.css";
import Carosuel from "./Carousel/Carosuel";
import Achievements from "./Achievements/Achievements";
import About from "./About us/About.js";
import Events from "./Events/Events";
import Hmc from "./HmcSlider/hmcSlider.js";
import Alumni from "./Alumni/Alumni";

const Home = () => {
  return (
    <React.Fragment>
      {/* <div style={{ width: "100%", height: "60px" }}></div> */}
      <Carosuel />
      <About />
      <Events />
      <Hmc />
      <Achievements />
      <Alumni />
    </React.Fragment>
  );
};

export default Home;
