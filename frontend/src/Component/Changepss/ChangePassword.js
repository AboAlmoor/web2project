import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ChangePassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/changePassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }),
            });

            const result = await response.json();

            if (response.ok) {
                console.log('Password changed successfully:', result);
                navigate('/');
            } else {
                console.error('Error:', result.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='CenteredContainer'>
            <div className="container-change-password">
                <h1 className='header-change-password'>Change Password</h1>
                <hr />
                <form onSubmit={handleSubmit}>
                    <label className='label-change-password' htmlFor="password">New Password</label>
                    <input
                        type="password"
                        className="input-change-password"
                        name="password"
                        placeholder="New Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label className='label-change-password' htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        className="input-change-password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    <button className='button-change-password' type="submit">Change Password</button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
