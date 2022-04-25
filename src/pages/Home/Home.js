import React from "react";
import "./Homefont.css";
import Carosuel from "./Carousel/Carosuel";
import Achievements from "./Achievements/Achievements";
import About from "./About us/About.js";
import Events from "./Events/Events";
import Hmc from "./HmcSlider/hmcSlider.js";
import Alumni from "./Alumni/Alumni";
import ScrollToTop from "react-scroll-up";
import scrolluparrow from "./scrolluparrow.jpg"

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
    <ScrollToTop showUnder={560} duration={500} 
    style={
      {
        position: 'fixed',
      bottom: 50,
      right: 15,
      cursor: 'pointer',
      transitionDuration: '0.5s',
      transitionTimingFunction: 'linear',
      transitionDelay: '0s',
     }
    }
    >
      <div style={
        {
          color:"white",
          backgroundColor:"white",
          boxShadow:"0px 0px 27px 10px rgb(219, 216, 216)",
          width:"48px",
          height:"48px",
          zIndex:"1",
          borderRadius:"4px",  
        }
      }>
      <img style={{zIndex:"2"}} src={scrolluparrow}/>
      </div>
    </ScrollToTop>
    </React.Fragment>
  );
};

export default Home;
