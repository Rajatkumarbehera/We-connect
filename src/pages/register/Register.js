import React from "react";
import { Link } from "react-router-dom";
import './Register.css';

const Register = () => {
    return (
        <div className="register-right">
            <div className="register-box">
                <h2>Register</h2>
                <input type="text" className="register-input" placeholder="Name" />
                <input type="email" className="register-input" placeholder="Email" />
                <input type="password" className="register-input" placeholder="Password" />
                <input type="password" className="register-input" placeholder="Confirm password" />
                <div className="register-checkbox">
                    <input type="checkbox" /> 
                    <span className="checkbox-message">I would accept all terms and conditions.</span>
                </div>
                <button className="register-button">Sign Up</button>
                <p className="login-text">Already have an account ?
                    <Link to="/login" style={{textDecoration: "none"}}> 
                        <span className="login-button">Sign In</span>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default Register;
