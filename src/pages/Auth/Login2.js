import React, { useState } from "react";
import login from "./Login2.module.css";

function Login2() {
    const handleSubmit = (e) => {
        // e.prevent.default()
        setdisplay(DisplaySecond);
    };

    const DisplayFirst = () => {
        return (
            <div className={login.textcontainer}>
                <p className={login.heading}>Login</p>

                <form
                    className={login.form}
                    method="POST"
                    action=""
                    onSubmit={handleSubmit}
                >
                    <input
                        name="username"
                        className={login.inputbox}
                        type="text"
                        placeholder="Username"
                        required
                    ></input>
                    <input
                        name="password"
                        className={login.inputbox}
                        type="password"
                        placeholder="Password"
                        required
                    ></input>
                    <div className={login.bottom}>
                        <div className={login.remember}>
                            <input
                                className={login.checkbox}
                                type="checkbox"
                                value="#"
                                id="remember"
                            ></input>
                            <label for="remember">Remember me</label>
                        </div>
                        <div className={login.forgotpass}>
                            <u>Forgot password?</u>
                        </div>
                    </div>
                    <div className={login.redirectRegister}>
                        <a href="/register">Don't have an account? Register here</a>
                    </div>
                    <button
                        type="submit"
                        // onClick={handledefault}
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    };

    const DisplaySecond = () => {
        return (
            <>
                <p className={login.confirmedup}>Booking confirmed</p>
                <p className={login.confirmeddown}>
                    Your booking confirmation has been sent to your email.
                </p>
            </>
        );
    };

    const [display, setdisplay] = useState(DisplayFirst);

    return (
        <div className={login.fullcontainer}>
            <div className={login.leftcontainer}></div>
            <div className={login.rightcontainer}>{display}</div>
        </div>
    );
}

export default Login2;
