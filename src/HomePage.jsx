import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="logo">Vision Board</div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/features">Features</Link>
          <Link to="/about">About Us</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/signup" className="nav-button">
            Get Started
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Design Your Dreams</h1>
          <p>Transform your aspirations into reality with Vision Board.</p>
          <Link to="/signup">
            <button className="cta-button">Start Now</button>
          </Link>
        </div>
        <div className="hero-image">
          <img src="/assets/vision-board-hero.png" alt="Vision Board Hero" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <img src="/assets/icons/goal.png" alt="Set Goals" />
            <h3>Set Goals</h3>
            <p>Define your dreams with clarity and purpose.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/icons/track-progress.png" alt="Track Progress" />
            <h3>Track Progress</h3>
            <p>Monitor your journey and celebrate achievements.</p>
          </div>
          <div className="feature-card">
            <img src="/assets/icons/customize.png" alt="Customize" />
            <h3>Customize</h3>
            <p>Personalize your vision board to match your style.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Users Say</h2>
        <div className="testimonial">
          <p>"This platform helped me stay focused and achieve my goals!"</p>
          <h4>- Emily R.</h4>
        </div>
        <div className="testimonial">
          <p>"I love the customization options—it’s so inspiring!"</p>
          <h4>- Sarah T.</h4>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>© 2025 Vision Board. All Rights Reserved.</p>
          <div className="social-icons">
            <a href="#"><img src="/assets/icons/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="/assets/icons/twitter.png" alt="Twitter" /></a>
            <a href="#"><img src="/assets/icons/instagram.png" alt="Instagram" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
