import tv from "./tvroom.module.css";


const Tv = () => {
    return (
        <div className={tv.content}>
            <h1 className={tv.header}>TV Room</h1>
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

export default Tv;
