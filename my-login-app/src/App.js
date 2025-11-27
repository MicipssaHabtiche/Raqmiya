import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'; // Make sure this path is correct
import PasswordRecovery from './components/PasswordRecovery';
import CodeVerification from './components/CodeVerification';
import NewPassword from './components/NewPassword';// new page



function App() {
  return (
    <Router>
   <Routes>
  <Route path="/" element={<Login />} />
  <Route path="/password-recovery" element={<PasswordRecovery />} />
  <Route path="/code-verification" element={<CodeVerification />} />
  <Route path="/new-password" element={<NewPassword />} />
</Routes>

    </Router>
  );
}

export default App;

