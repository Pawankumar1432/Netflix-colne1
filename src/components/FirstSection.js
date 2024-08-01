import React from 'react';
import '../styles/styles.css';

const GlobeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    className="globe-icon"
  >
    <path d="M12 4.5c-3.312 0-6 2.688-6 6s2.688 6 6 6 6-2.688 6-6-2.688-6-6-6zm0-2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm0 12.5c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
  </svg>
);

export default function FirstSection() {
  return (
    
    <div className="first-section">
      <div className="main">
        <nav className="navbar">
          <span className="navbar-logo">
            <img
              width="53"
              src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
              alt="Netflix Logo"
            />
          </span>
        
    
      
        <div className="nav__item">
          <button className="signin__button"  >  Sigin</button>
          
        </div>
    
        </nav>
        
        <div className="box"></div>
        <div className="hero">
          <span>Unlimited movies, TV shows, and more</span>
          <span>Watch anywhere. Cancel anytime.</span>
          <span>Ready to watch? Enter your email to create or restart your membership.</span>
          <div className="hero-buttons">
            <input type="email" placeholder="Email Address" className="email-input" />
            <button className="btn btn-red">Get Started {'>'}</button>
          </div>
        </div>
      </div>
    </div>

  );
}
