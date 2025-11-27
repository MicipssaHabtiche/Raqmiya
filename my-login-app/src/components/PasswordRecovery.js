import React, { useState } from 'react';
import './PasswordRecovery.css';
import { useNavigate } from 'react-router-dom';


function PasswordRecovery() {

const [email, setEmail] = useState('');
const navigate = useNavigate();


const handleContinue = (e) => {
  e.preventDefault();          // stops the form from reloading the page
  if (email) {                 // if the user entered an email
    navigate('/code-verification'); // go to the 5-digit code page
  } else {
    alert('Please enter your email'); // show alert if email is empty
  }
};
   return (
    <div className="recovery-container">
      <h1 className="raqmiya-text">RAQMIYA</h1>
      <h2>Password Recovery</h2>
      <p className="text3">Enter your registered email to receive reset instructions.</p>

      <form onSubmit={handleContinue} className="recovery-form">
        <div className="form-group">
          <label htmlFor="recovery-email">Email</label>
          <input
            type="email"
            id="recovery-email"
            placeholder="Please enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-buttons">
          <button type="button" onClick={() => window.history.back()}>
            Back
          </button>
          <button type="submit">Continue</button>
        </div>
      </form>
    </div>
  );
}

export default PasswordRecovery;
