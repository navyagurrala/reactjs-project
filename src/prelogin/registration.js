import React, { useState } from 'react';
import './Registration.css';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate=useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handlenavigate=()=>{
        navigate("/login")
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        setUsernameError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username.trim()) {
            setUsernameError('Username is required');
            return;
        }

        if (!password.trim()) {
            setPasswordError('Password is required');
            return;
        }

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Registration successful!');
    };

    return (
        <div className="registration-container" style={{
            // backgroundImage: 'url(https://i.imgur.com/yu02r5K.jpg)',
            backgroundColor:"black",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            }}>
            <h1 style={{color:"white"}}>Registration</h1>
            <form onSubmit={handleSubmit} style={{padding:20}}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange} style={{marginBottom:20}}
                />
                {usernameError && <p className="error-message">{usernameError}</p>}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange} style={{marginBottom:20}}
                />
                {passwordError && <p className="error-message">{passwordError}</p>}
                <button onClick={handlenavigate} type="submit" className="register-button">Register</button>
            </form>
            <p style={{color:"white",fontSize:20}}>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    );
};
export default Registration;
