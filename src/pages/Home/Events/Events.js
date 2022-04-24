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
          <img src={heading} alt="heading" className="img1" />
        </div>
        <div className={events["column1"]}>
          <div className={events["subheading"]}>
            Inter Hostel FootBall Tournament
          </div>
          <div className={events["description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            fugiat maiores quas animi dolorem enim explicabo, tempore voluptas
            mollitia laboriosam rem, culpa, rerum non soluta nesciunt in.
            Perferendis, vel quae.
          </div>
        </div>
      </div>

      <div className={events["row2"]}>
        {images.map((img, index) => (
          <div className="column2" key={index}>
            <img src={img} alt={alts[index]} className="img2" />
          </div>
        ))}

        {/* <div className="column2">
            <img src="./images/chess.svg" alt="chess" className="img2" />
          </div>

          <div className="column2">
            <img src="./images/music.svg" alt="music" className="img2" />
          </div> */}
      </div>
    </div>
  );
};

export default Events;
