import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgetPassword.css';

const FindAccount = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const find = await fetch('http://localhost:4000/ForgotPassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const result = await find.json({});

            if (find.ok) {
                navigate('/email-verification'); 
            } else {
                console.error('Error:', result.message);
            }

        } catch (error) {
            console.error('Error', error);
        }
    };


    const handleCancel = () => {
        navigate('/');
        console.log('Cancel button clicked');
    };

    return (
        <div className='CenteredContainer'>
            <div className="ContainerForgetPassword">
                <h1 className='FindAacountHeader1'>Find your account</h1>
                <hr />
                <p className='ParagraphForgetPassword'>Please enter your email address to search for your account.</p>
                <form onSubmit={handleSubmit}>
                    <label className='ForgetPasswordLabel' htmlFor="email" ></label>
                    <input
                        type="email"
                        className="InputEmailForgetPassword"
                        name="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className='ButtonSearchForgetPassword' type="submit">Search</button>
                    <button className='ButtonCancelForgetPassword' type="button" onClick={handleCancel}>Cancel</button>
                </form>
                <Link to='/ForgotPassword' />
            </div>
        </div>
    );
};
export default FindAccount;