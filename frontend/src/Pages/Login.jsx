import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();
  
  const { setIsLoggedIn } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      login();
    }
  };

  const login = async () => {
    if (!formData.email || !formData.password) {
      alert("Please fill in both email and password fields.");
      return;
    }

    let responseData;
    try {
      const response = await fetch('https://rakeshmohantarai-shopify-backend-e.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      responseData = await response.json();

      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        setIsLoggedIn(true);
        navigate('/');
      } else {
        if (responseData.errors === "Email not found") {
          alert("Please input a registered email address.");
        } else if (responseData.errors === "Incorrect Password") {
          alert("Incorrect password.");
        } else {
          alert("Invalid email or password");
        }
      }
    } catch (error) {
      alert("An error occurred during login. Please try again later.");
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container login-contain">
        <h1>Login</h1>
        <div className="loginsignup-fields">
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' required />
          <div className="password-input-container">
            <input name='password' value={formData.password} onChange={changeHandler} onKeyPress={handleKeyPress} type={showPassword ? "text" : "password"} placeholder='Password' required />
            <img className="position-fixing" src={showPassword ? "https://cdn-icons-png.flaticon.com/128/4643/4643964.png" : "https://cdn-icons-png.flaticon.com/128/5618/5618479.png"} alt={showPassword ? "Hide Password" : "Show Password"} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} onClick={togglePasswordVisibility} />
          </div>
        </div>
        <button onClick={login}>Login</button>
        <p className="loginsignup-login">Don't have an account?
          <Link to='/signup' style={{ textDecoration: 'none' }}> <span> Sign Up </span> </Link>
        </p>
      </div>
    </div>
  );
}
