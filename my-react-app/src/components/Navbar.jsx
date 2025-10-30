import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleString("en-US", {
        day: "2-digit",
        month: "short",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      setCurrentTime(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 60000); // update every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          ◆ Yahya
        </Link>
      </div>

      <div className="navbar-center">
        <Link to="/" className="navbar-link">Home</Link>
        <span className="navbar-separator">,</span>
        <Link to="/info" className="navbar-link">Info</Link>
        <span className="navbar-separator">,</span>
        <Link to="/work" className="navbar-link">Work</Link>
        <span className="navbar-separator">,</span>
        <Link to="/contact" className="navbar-link">Contact</Link>
      </div>

      <div className="navbar-right">
        <span className="navbar-time">{currentTime}</span>
      </div>
    </nav>
  );
}
