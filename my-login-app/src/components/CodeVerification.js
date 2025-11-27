import React, { useState } from 'react';
import './CodeVerification.css';
import { useNavigate } from 'react-router-dom';

function CodeVerification() {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    if (code.length === 5) {
      navigate('/new-password'); // ← Change this line
    } else {
      alert('Please enter a 5-digit code');
    }
  };

  return (
    <div className="verification-container">
      <h1> RAQMIYA </h1>
      <h2>Password Recovery</h2>
      <p>Please enter the 5-digit code to verify your identity.</p>

      <form onSubmit={handleContinue} className="verification-form">
        <input
          type="text"
          maxLength="5"
          placeholder="Enter the code here"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />

        <div className="form-buttons">
          <button type="button" onClick={() => window.history.back()}>Back</button>
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
}

export default CodeVerification;
