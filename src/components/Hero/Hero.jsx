import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, PhoneCall, ShieldCheck, HeartPulse, Sparkles } from 'lucide-react';
import { siteData } from '../../data/siteData';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <Sparkles size={14} className="hero-badge-icon" />
            <span>Specialized In-Home Health Care</span>
          </div>

          <h1 className="hero-title">
            Compassionate Home Health Care at Your Doorstep
          </h1>

          <p className="hero-subtitle">
            Delivering trusted medical and senior care services to homes across all over India. From hospital-grade nursing to senior companion care, recover in comfort.
          </p>

          <div className="hero-buttons">
            <Link to="/book-an-appointment" className="btn btn-primary btn-hero btn-hero-primary">
              <Calendar size={16} />
              <span>Book an Appointment</span>
            </Link>
            <Link to="/contact-us" className="btn btn-outline-white btn-hero">
              <PhoneCall size={16} />
              <span>Contact us</span>
            </Link>
          </div>

          {/* Key Highlights Under Hero */}
          <div className="hero-highlights">
            <div className="highlight-item">
              <ShieldCheck size={18} className="highlight-icon" />
              <span>Certified Nurses & Caregivers</span>
            </div>
            <div className="highlight-item">
              <HeartPulse size={18} className="highlight-icon" />
              <span>24/7 Available Home Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
