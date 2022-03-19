import Mess from "./mess.module.css";

const mess = () => {
    return (
        <div className={Mess.content}>
            <h1 className={Mess.header}>Barak Mess</h1>
            <p>
                Barak is the 7th hostel in the IITG fraternity and derives its
                name from the River Barak which is a major river in
                north-eastern India and is a part of the Surma-Meghna River
                System. It rises in the Manipur hills and enters the plains near
                Lakhipur. The two time General Championship Winner hostel brings
                a cheerful environment to all its boarders.
            </p>
            <div className={Mess.buton}>
                <div className={Mess.bookButtom}>
                    {" "}
                    <a href="/"> MESS MENU</a>
                </div>
                <div className={Mess.bookButtom}>
                    {" "}
                    <a href="/"> FEEDBACK</a>
                </div>
            </div>
        </div>
    );
};

export default mess;
