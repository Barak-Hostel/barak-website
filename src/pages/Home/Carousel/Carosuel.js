import React from "react";
import carosuel from "./carosuel.module.css";
import image1 from "./arrow.svg";
import image2 from "./main.svg";
function Carosuel() {
  return (
    <>
      <div className={carosuel.child}>
        <img className={carosuel.main} src={image2} alt="" />
        <div className={carosuel.child_2}>
          <img className={carosuel.arrow} src={image1} alt="" />
        </div>
      </div>
    </>
  );
}

export default Carosuel;
