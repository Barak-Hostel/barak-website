import React from "react";
import Nav from "./navbar.module.css";
import Logo from "./LOGO1.png";
import Logo2 from "./LOGO2.png";
import { useState } from "react";

const Header = () => {
    const [fg, setfg] = useState(0);
    return (
        <div className={Nav.NavBar}>
            <div className={Nav.Title}>
                {" "}
                <img src={Logo2} alt="" />
                <img src={Logo} alt="" className={Nav.Logo1} />{" "}
            </div>
            <ul className={fg === 0 ? Nav.NavLinks : Nav.NavLinks2}>
                <li>
                    {" "}
                    <a href="/">Home</a>
                </li>
                <li>
                    {" "}
                    <a href="/">Facilities</a>
                </li>
                <li>
                    {" "}
                    <a href="/">Gallery</a>
                </li>
                <li>
                    {" "}
                    <a href="/">Hostel map</a>
                </li>
                <li>
                    {" "}
                    <a href="/">Contact</a>
                </li>
                <li className={Nav.Login2}>
                    <a href="/">Login</a>
                </li>
            </ul>
            <div className={Nav.Login}>
                <a href="/">Login</a>
            </div>

            <div
                className={Nav.burger}
                onClick={() => {
                    if (fg == 0) {
                        setfg(1);
                    } else {
                        setfg(0);
                    }
                }}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Header;
