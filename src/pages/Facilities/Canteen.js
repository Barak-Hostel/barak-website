import Canteen from "./canteen.module.css";

const cnt = () => {
    return (
        <div className={Canteen.content}>
            <h1 className={Canteen.header}>Canteen</h1>
            <p>
                Barak is the 7th hostel in the IITG fraternity and derives its
                name from the River Barak which is a major river in
                north-eastern India and is a part of the Surma-Meghna River
                System. It rises in the Manipur hills and enters the plains near
                Lakhipur. The two time General Championship Winner hostel brings
                a cheerful environment to all its boarders.
            </p>
        </div>
    );
};

export default cnt;
