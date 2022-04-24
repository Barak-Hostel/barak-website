import React from "react";
import carosuel from "./carosuel.module.css";
import main from "./images/main.svg";

function Carosuel() {
  return (
    <div className={carosuel.child}>
      <img className={carosuel.main} src={main} alt="" />
    </div>
  );
}

export default Carosuel;
