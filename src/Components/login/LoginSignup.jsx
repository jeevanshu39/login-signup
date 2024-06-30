import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import email_icon from '../Assets/email.png';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';

export const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSliderChange = (value) => {
    setAction(value);
  };

  const handleSubmit = () => {
    navigate('/greeting', { state: { name, type: action } });
  };

  return (
    <div className='container'>
      <div className='slider'>
        <div className={`slider-option ${action === "Login" ? "active" : ""}`} onClick={() => handleSliderChange("Login")}>
          Login
        </div>
        <div className={`slider-option ${action === "Sign Up" ? "active" : ""}`} onClick={() => handleSliderChange("Sign Up")}>
          Sign Up
        </div>
      </div>
      <div className='header'>
        <div className='text'>
          {action}
        </div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        {action === "Login" ? null : (
          <div className='input'>
            <img src={user_icon} alt="User Icon" />
            <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        )}
        <div className='input'>
          <img src={email_icon} alt="Email Icon" />
          <input type="email" placeholder='Email ID' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='input'>
          <img src={password_icon} alt="Password Icon" />
          <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <div className="forget-password">Lost Password? <span>Click here</span></div>
      <div className="submit-container">
        <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleSubmit}>
          {action === "Login" ? "Login" : "Sign Up"}
        </div>
      </div>
    </div>
  );
};
