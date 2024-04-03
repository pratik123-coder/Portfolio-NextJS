import React from "react";
import "./socials.css"; 

const Socials = () => {
  return (
    <div className="st-social-group wow fadeInLeft">
      <div className="st-social-link">
        <a href="#" className="st-social-btn active">
          <span className="st-social-icon"><i className="fab fa-dribbble"></i></span>
          <span className="st-icon-name">Dribbble</span>
        </a>
        <a href="#" className="st-social-btn">
          <span className="st-social-icon"><i className="fab fa-behance"></i></span>
          <span className="st-icon-name">Behance</span>
        </a>
        <a href="#" className="st-social-btn">
          <span className="st-social-icon"><i className="fab fa-twitter"></i></span>
          <span className="st-icon-name">Twitter</span>
        </a>
        <a href="#" className="st-social-btn">
          <span className="st-social-icon"><i className="fab fa-linkedin"></i></span>
          <span className="st-icon-name">LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Socials;
