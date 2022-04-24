import React from "react";
import carosuel from "./carosuel.module.css";
import main from "./images/main.png";

function Carosuel() {
  return (
    <div className={carosuel.child}>
      <img className={carosuel.main} src={main} alt="main" />
    </div>
  );
}

export default Carosuel;
