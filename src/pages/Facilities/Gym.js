import Gym from "./gym.module.css";
import { Link } from "react-router-dom";

const gym = () => {
    return (
        <div className={Gym.content}>
            <h1 className={Gym.header}>Gym and Sports</h1>
            <p>
                Barak Hostel has all the necessary equipment wherein the
                students can visit the sports room and play the sports of their
                choice or hit the gym in their leisure time. In this competitive
                environment, keeping your health in check is necessary. Hence,
                we have a legacy of maintaining a sports culture wherein each
                boarder should at least play one sport, benefitting individuals
                in general and the hostel in particular.
            </p>
            <Link to="/slot-booking">
                <button className={Gym.bookButtom}>BOOK YOUR SLOT</button>
            </Link>
        </div>
    );
};

export default gym;
