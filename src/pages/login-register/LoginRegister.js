import { Diversity3 } from "@mui/icons-material";
import React from "react";
import Login from "../login/Login";
import Register from "../register/Register";
import './LoginRegister.css';

const LoginRegister = () => {

    const pathName = window.location.pathname;
    console.log(pathName);

    return (
        <div className="login-register">
            <div className="login-register-wrapper">
                <div className="login-register-left">
                    <div className="login-register-logo">
                        <Diversity3 style={{fontSize: "40px", color: "#1775ee"}} />
                        <h3 className="login-register-text">We.Connect</h3>
                    </div>
                    <span className="login-register-desc">Connect with friends and the world around you on We.Connect</span>
                </div>

                {pathName?.includes("/login") ? <Login /> : <Register />}
            </div>
        </div>
    )
}

export default LoginRegister;
