import React from "react";
import { Link } from "react-router-dom";
import './Login.css';

const Login = () => {
    return (
        <div className="login-right">
            <div className="login-box">
                <h2>Login</h2>
                <input type="email" className="login-input" placeholder="Email" />
                <input type="password" className="login-input" placeholder="Password" />
                <span className="password-forgot">Forgot Password?</span>
                <button className="login-btn">Log In</button>
                <p className="register-text">Not have an account ?
                    <Link to="/register" style={{textDecoration: "none"}}> 
                        <span className="register-btn">Sign Up</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Login;
