import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Ticker() {
  // one group of items, duplicated for a seamless loop
  const items = Array.from({ length: 8 }, () => "Let's Talk");

  return (
    <div className="ticker" aria-label="Scrolling links">
      <div className="ticker__inner">
        <div className="ticker__group">
          {items.map((txt, i) => (
            <Link to="/contact" key={`a-${i}`} className="ticker__item">
              <span>{txt}</span>
            </Link>
          ))}
        </div>

        {/* duplicate — hidden from screen readers for accessibility */}
        <div className="ticker__group" aria-hidden="true">
          {items.map((txt, i) => (
            <Link to="/contact" key={`b-${i}`} className="ticker__item">
              <span>{txt}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
