import React from "react";
import carosuel from "./carosuel.module.css";
import image1 from "./arrow.svg";
import image2 from "./main.svg";
function Carosuel() {
  return (
    <div className={carosuel.child}>
      <img className={carosuel.main} src={image2} alt="" />
    </div>
  );
}

export default Carosuel;
