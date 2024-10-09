import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignupPage() {
    const [emailError, setEmailError] = useState('');
    const [email, setEmail] = useState('');
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) {
        return "Please enter a valid email address.";
      }
      return null; // No error
    };
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword]   
 = useState('');
  const [centreId, setCentreId] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const   
 validatePassword = (password) => {
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const   
 hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasNumericChar   
 = /\d/.test(password);

    if (password.length < minLength) {
      return "Password must be at least " + minLength + " characters long.";
    }
    if (!hasUpperCase) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!hasLowerCase) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!hasSpecialChar) {
      return "Password must contain at least one special character.";   

    }
    if (!hasNumericChar) {
      return "Password must contain at least one numeric character.";
    }
    return null; // No error
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      return "Passwords do not match. Try again!";
    }
    return null; // No error
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const passwordErr = validatePassword(password);
    const confirmPasswordErr = validateConfirmPassword(password, confirmPassword);

    setPasswordError(passwordErr);
    setConfirmPasswordError(confirmPasswordErr);

    if (passwordErr || confirmPasswordErr) {
      return; // Prevent form submission if there are errors
    }

    // Handle signup logic here if no errors
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Centre ID:', centreId);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative overflow-hidden">
        <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-400 rounded-full blur-xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 w-48 h-48 bg-blue-500 rounded-full blur-xl opacity-50"></div>

        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">De-Addiction Centre Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                // Call validateEmail with the updated value from e.target.value
                setEmailError(validateEmail(e.target.value)); 
              }}
              required
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full   
 border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError(validatePassword(e.target.value));
              }}
              required
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"   

              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2   
 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                // Validate on change to update dynamically
                setConfirmPasswordError(validateConfirmPassword(password, e.target.value));
              }}
              required
            />
            {confirmPasswordError && <p className="text-red-500 text-sm mt-1">{confirmPasswordError}</p>}
          </div>
          <div>
            <label htmlFor="centreId" className="block text-gray-700 font-medium mb-2">
              Centre ID
            </label>
            <input
              type="text"
              id="centreId"
              className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={centreId}
              onChange={(e) => setCentreId(e.target.value)}
              required
            />
          </div>
          <div className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-2 rounded-md hover:from-blue-600 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-200"
          >
            Sign Up
          </button>

          <p className="mt-5 mb-3 text-center text-gray-600" style={{ color: '#27374D' }}>
            &copy; Gov Auth Platform
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;