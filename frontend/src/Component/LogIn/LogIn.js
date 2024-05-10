import React, { useState } from 'react';
import './LogIn.css';

import { Link } from 'react-router-dom';

const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
        const passwordIcon = document.getElementById('togglePassword');
        if (showPassword) {
            passwordIcon.classList.remove('visible');
        } else {
            passwordIcon.classList.add('visible');
        }
    };

    return (
        <div className='CenteredContainer'>
            <div className="ContainerLogIn">
                <h1 className='LogInHeaderOne'>LOGIN</h1>
                <h3 className='HeaderThreeLogIn'>Welcome Back To Secrets Of Cities</h3>
                <form className='FormLogIn'>
                    <label className='LabelLogIn' htmlFor="username">Username</label>
                    <input type="text" className="InputUsernameLogIn" name="username" placeholder="Username" required />

                    <div className="passwordContainerLogIn">
                        <label className='LabelLogIn' htmlFor="password">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="InputPasswordLogIn"
                            name="password"
                            placeholder="password"
                            required
                        />
                        <svg id="togglePassword" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill passwordIconLogIn" viewBox="0 0 16 16" onClick={togglePassword}>
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                        </svg>
                    </div>

                    <input className='InputSubmitLogIn' type="submit" value="Log In" />
                    <div className="LogInLinks">
                        <Link to='/CreateAcount'>Create Account</Link>
                        <span className='span-space'> | </span>
                        <Link to='/ForgetPassword'>Forgot Password</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;