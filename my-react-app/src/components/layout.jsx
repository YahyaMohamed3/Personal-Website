
import React from "react";
import Ticker from "./tape";
import "./styles.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="layout">
        <div className="column left"></div>
        <div className="column middle">{children}</div>
        <div className="column right"></div>
      </div>
      
      {/* Footer with exact same structure as layout */}
      <div className="footer">
        <div className="column left"></div>
        <div className="column middle">
          <div className="footer-row footer-row-top"></div>
          <div className="footer-row footer-row-ticker"><Ticker /></div>
          <div className="footer-row footer-row-bottom"></div>
        </div>
        <div className="column right"></div>
      </div>
    </>
  );
}