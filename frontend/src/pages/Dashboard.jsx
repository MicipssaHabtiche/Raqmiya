import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import adminImage from "../assets/raqmiya.png"; 
import feedbackIcon from "../assets/images/feedback.png";
import totalProductsIcon from "../assets/images/totalproducts.png";
import totalOrdersIcon from "../assets/images/totalorders.png";
import lightBulbIcon from "../assets/images/light-bulb.png";
import gamingBg from "../assets/gaming-bg.png";







const Dashboard = () => {
  const navigate = useNavigate();
  
  const [notifications] = useState([
    { id: 1, message: "Wohoo, a customer just placed a new order." },
    { id: 2, message: "Wohoo, a customer just placed a new order." },
    { id: 3, message: "Wohoo, a customer just placed a new order." }
  ]);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="admin-profile">
          <div className="admin-avatar">
            <img src={adminImage} alt="Admin" />
          </div>
          <h3 className="admin-name">Admin.Raqmiya</h3>
        </div>

        <nav className="sidebar-nav">
          <button className="nav-item active">
            <span className="icon">⊞</span>
            Dashboard
          </button>
          <button className="nav-item" onClick={() => navigate('/products')}>
            <span className="icon">🛒</span>
            Products
          </button>
          <button className="nav-item">
            <span className="icon">✏️</span>
            Feedback
          </button>
          <button className="nav-item">
            <span className="icon">👥</span>
            Clients
          </button>
          <button className="nav-item">
            <span className="icon">📦</span>
            Orders
          </button>
          <button className="nav-item logout">
            <span className="icon">⎋</span>
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div
  className="welcome-banner"
  style={{
    backgroundImage: `url(${gamingBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  <h1>
    Welcome Back To <span className="highlight">Your Dashboard</span> Admin!
  </h1>
  <p>
    Hey Admin, good to see you! Welcome back to your dashboard. Here, you can
    explore the latest insights and stay on top of everything happening in your
    system.
  </p>
</div>


        {/* Statistics Section */}
        <div className="statistics-section">
          <h2>Some Statistics</h2>
          <div className="stats-grid">
            <div className="stat-card turquoise">
              <div className="stat-content">
                <h3>Total Feedback number</h3>
                <p className="stat-number">55</p>
              </div>
              <div className="stat-icon-container">
               <img src={feedbackIcon} alt="Feedback" className="stat-icon-img" />



              </div>
            </div>

            <div className="stat-card yellow">
              <div className="stat-content">
                <h3>Total Products number</h3>
                <p className="stat-number">07</p>
              </div>
              <div className="stat-icon-container">
               <img src={totalProductsIcon} alt="Products" className="stat-icon-img" />
              </div>
            </div>

            <div className="stat-card blue">
              <div className="stat-content">
                <h3>Total orders number</h3>
                <p className="stat-number">55</p>
              </div>
              <div className="stat-icon-container">
               <img src={totalOrdersIcon} alt="Orders" className="stat-icon-img" />
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="notifications-section">
          <h2>Latest Notifications</h2>
          <div className="notifications-list">
            {notifications.map((notif) => (
              <div key={notif.id} className="notification-item">
                <div className="notification-icon">
  <img src={lightBulbIcon} alt="Notification" className="icon-bulb" />
</div>

                <p className="notification-text">{notif.message}</p>
                <a href="#" className="discover-link">Discover More</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;