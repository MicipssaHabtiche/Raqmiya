import React, { useState } from 'react';

import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const correctEmail = 'admin@example.com';  // example email
  const correctPassword = '1234';           // example password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === correctEmail && password === correctPassword) {
      setError(false);
      alert('Login successful!');
    } else {
      setError(true);
    }
  };

  return (
    <div className="login-container">
      <h1>RAQMIYA</h1>
      <h1>Welcome back, Admin!</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Please enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={error ? 'input-error' : ''}
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            &#128065;
          </span>
        </div>

        {error && <p className="error-text">Your password or email is incorrect</p>}

        <div className="forgot-password">
  <a href="/password-recovery">Forget your password?</a>
</div>


        <div className="form-group">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
