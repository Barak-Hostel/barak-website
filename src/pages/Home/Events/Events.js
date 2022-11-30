import React from "react";
import events from "./Events.module.css";
import tt from "./images/tt.svg";
import chess from "./images/chess.svg";
import music from "./images/music.svg";
import heading from "./images/heading.svg";
const Events = () => {
  const images = [tt, chess, music];
  const alts = ["tt", "chess", "music"];
  return (
    <div className={events["main-container"]}>
      <div className={events["heading"]}>Events</div>
      <div className={events["row1"]}>
        <div className={events["column1"]}>
          <img src={heading} alt="heading" className={events["img1"]} />
        </div>
        <div className={events["column1"]}>
          <div className={events["subheading"]}>
            Barak FootBall League
          </div>
          <div className={events["description"]}>
            Barak football league is an initiative that was started to provide relief from the monotonous routine of academics during
            their midterm breaks, wherein teams participate and compete against each other to win the Intra-Hostel Football cup.
            It serves as a perfect medium to bridge the gap between boarders. 
          </div>
        </div>
      </div>

      <div className={events["row2"]}>
        {images.map((img, index) => (
          <div className={events["column2"]} key={index}>
            <img src={img} alt={alts[index]} className={events["img2"]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
