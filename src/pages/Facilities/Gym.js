import Gym from "./gym.module.css";
import backgroundImage from "./gymImage.png";
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
            <button className={Gym.bookButtom}>
                {" "}
                <Link to="/"> BOOK YOUR SLOT </Link>
            </button>
        </div>
    );
};

export default gym;