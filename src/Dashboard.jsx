import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import TemplateSelection from "./TemplateSelection";
import CanvasBoard from "./CanvasBoard";
import "./Dashboard.css"; // Import the CSS file for styling

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login"); // Redirect to login if not logged in
      } else {
        setUser(user);
      }
    });
    return () => unsubscribe();
  }, [navigate]);
  

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to Your Vision Board, {user ? user.email : "User"}!</h1>
        <div className="dashboard-actions">
          <button className="logout-button" onClick={() => auth.signOut()}>
            Logout
          </button>
        </div>
      </header>

      <div className="vision-board-container">
        <TemplateSelection /> {/* Template selection component */}
        <CanvasBoard /> {/* Canvas to create the vision board */}
      </div>
    </div>
  );
};

export default Dashboard;
