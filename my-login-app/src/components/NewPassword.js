import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewPassword.css';

function NewPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (newPassword.length < 4) {
      setError('Password must be at least 4 characters');
      return;
    }

    setError('');
    setShowSuccessModal(true); // show modal
  };

  return (
    <div className="login-container">
      <h1>RAQMIYA</h1>
      <h1>New Password</h1>
      <p style={{ color: 'white', marginBottom: '30px', textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
        Please enter your new Password here
      </p>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="newPassword">New Password</label>
          <input
            type={showNewPassword ? 'text' : 'password'}
            id="newPassword"
            name="newPassword"
            placeholder="Please enter your new Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={error ? 'input-error' : ''}
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowNewPassword(!showNewPassword)}
          >
            &#128065;
          </span>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Please confirm your new Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={error ? 'input-error' : ''}
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            &#128065;
          </span>
        </div>

        {error && <p className="error-text">{error}</p>}

        <div className="form-group">
          <button type="submit">Confirm</button>
        </div>

        <div className="forgot-password" style={{ textAlign: 'center', marginTop: '10px' }}>
          <a href="/login">Back</a>
        </div>
      </form>

      {/* Modal should be outside the <form> */}
      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Password has been changed successfully!</h3>
            <button
              onClick={() => window.location.href = '/'}
              className="modal-back-btn"
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewPassword;
