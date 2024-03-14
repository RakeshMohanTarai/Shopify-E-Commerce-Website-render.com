import React, { useState } from 'react';
import './CSS/LoginSignUp.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  // const [passwordStrength, setPasswordStrength] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // checkPasswordStrength(value);
  };

  // const checkPasswordStrength = (password) => {
  //   const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

  //   if (password === "") {
  //     setPasswordStrength("");
  //   } else if (strongRegex.test(password)) {
  //     setPasswordStrength("Strong");
  //   } else {
  //     setPasswordStrength("Use at least 8 characters, including uppercase and lowercase letters, numbers, and special characters.");
  //   }
  // };

  // const generateStrongPassword = () => {
  //   const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  //   const numericChars = "0123456789";
  //   const specialChars = "!@#$%^&*";
    
  //   const allChars = uppercaseChars + lowercaseChars + numericChars + specialChars;
  //   const passwordLength = 8; // Minimum password length
    
  //   let password = '';
  //   let categories = [uppercaseChars, lowercaseChars, numericChars, specialChars];
    
  //   // Ensure at least one character from each category
  //   for (const category of categories) {
  //       const randomChar = category[Math.floor(Math.random() * category.length)];
  //       password += randomChar;
  //   }
    
  //   // Generate remaining characters randomly
  //   for (let i = categories.length; i < passwordLength; i++) {
  //       const randomIndex = Math.floor(Math.random() * allChars.length);
  //       password += allChars[randomIndex];
  //   }
    
  //   // Shuffle the password characters to make it more random
  //   password = password.split('').sort(() => Math.random() - 0.5).join('');
    
  //   // Update form data and password strength
  //   setFormData({ ...formData, password, confirmPassword: password });
  //   checkPasswordStrength(password);
  // };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const signup = async () => {
    try {
      // console.log("Signup Function Executed", formData);
  
      if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
        alert("Please fill up all the input fields.");
        return;
      }
  
      if (!isValidEmail(formData.email)) {
        alert("Please input a valid email address.");
        return;
      }
  
      if (formData.password !== formData.confirmPassword) {
        alert("Password and confirm password do not match");
        return;
      }
  
      // if (passwordStrength !== "Strong") {
      //   alert("Password is not strong enough. " + passwordStrength);
      //   return;
      // }
  
      // Check if the checkbox is checked
      const checkboxChecked = document.getElementById('checkbox').checked;
      if (!checkboxChecked) {
        alert("Please agree to the terms of use & privacy policy.");
        return;
      }
  
      const response = await fetch('https://rakeshmohantarai-shopify-backend-e.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Failed to sign up');
      }
  
      const responseData = await response.json();
  
      if (responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        navigate('/login');
      } else {
        if (responseData.error === 'email_exists') {
          alert("An account with this email address already exists.");
        } else {
          alert("An error occurred during signup. Please try again later.");
        }
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("An account with this email address already exists.");
    }
  };
  
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      signup();
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input 
            name='username' 
            value={formData.username} 
            onChange={changeHandler} 
            onKeyPress={(e) => {
              const charCode = e.charCode;
              if (charCode !== 32 && !(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {
                e.preventDefault();
              }
            }} 
            type="text" 
            placeholder='Your Name' 
            required 
          />
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' required />
          <div className="password-input-container">
            <input
              name='password'
              value={formData.password}
              onChange={changeHandler}
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              required
            />
            <img
              src={showPassword ? 'https://cdn-icons-png.flaticon.com/128/5618/5618479.png' : 'https://cdn-icons-png.flaticon.com/128/4643/4643964.png'}
              alt={showPassword ? "Hide Password" : "Show Password"}
              className="password-toggle-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <div className="password-input-container">
            <input
              name='confirmPassword'
              value={formData.confirmPassword}
              onChange={changeHandler}
              type={showPassword ? "text" : "password"}
              placeholder='Confirm Password'
              onKeyPress={handleKeyPress}
              required
            />
            <img
              src={showPassword ? 'https://cdn-icons-png.flaticon.com/128/5618/5618479.png' : 'https://cdn-icons-png.flaticon.com/128/4643/4643964.png'}
              alt={showPassword ? "Hide Password" : "Show Password"}
              className="password-toggle-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
        </div>
        {/* <button className="generate-strong-password" onClick={generateStrongPassword}>Generate Strong Password</button> */}
        <button onClick={signup}>Register</button>
        <p className="loginsignup-login">Already have an account?
          <Link to='/login' style={{ textDecoration: 'none' }}> <span> Login </span> </Link>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='checkbox' id='checkbox' required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  );
};
