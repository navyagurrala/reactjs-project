import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
 
    const navigate=useNavigate()

    const handlenav=()=>{
        navigate("/posthomescreen")
    }



    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        setError('');
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (username !== storedUsername || password !== storedPassword) {
            setError('Invalid username or password');
            return;
        }

        alert('Login successful!');
    };

    return (
        <div className="login-container" style={{
            backgroundColor: 'black', // Background color
            border: '1px solid #ccc', // Border
            borderRadius: '5px', // Border radius
            padding: '20px', // Padding
            width: '800px', // Width
            margin: '0 auto', // Center horizontally
            marginTop: '200px', // Center vertically
        }}>
            <h2 style={{color:"white",fontSize:40}}>LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange} style={{marginBottom:10}}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange} style={{marginBottom:20}}
                />
                {error && <p className="error-message">{error}</p>}
                <button onClick={handlenav} type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

export default Login;
