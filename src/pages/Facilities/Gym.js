import Gym from "./gym.module.css";
import { Link } from "react-router-dom";

const gym = () => {
    return (
        <div className={Gym.content}>
            <h1 className={Gym.header}>Gym and Sports</h1>
            <p>
                Barak is the 7th hostel in the IITG fraternity and derives its
                name from the River Barak which is a major river in
                north-eastern India and is a part of the Surma-Meghna River
                System. It rises in the Manipur hills and enters the plains near
                Lakhipur. The two time General Championship Winner hostel brings
                a cheerful environment to all its boarders.
            </p>
            <Link to="/slot-booking">
                <button className={Gym.bookButtom}>BOOK YOUR SLOT</button>
            </Link>
        </div>
    );
};

export default gym;
