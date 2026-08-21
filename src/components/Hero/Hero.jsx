import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, PhoneCall, ShieldCheck, HeartPulse, Sparkles, CheckCircle2 } from 'lucide-react';
import Hero3DCanvas from '../Hero3D/Hero3DCanvas';
import MagneticButton from '../MagneticButton/MagneticButton';
import { siteData } from '../../data/siteData';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-bg-overlay"></div>
      
      <div className="container hero-container">
        <div className="hero-grid-layout">
          {/* Left: Choreographed Text Content */}
          <div className="hero-content">
            <div className="hero-badge hero-seq-1">
              <span className="live-status-pulse"></span>
              <span>24/7 Clinical Care • Hyderabad & Across India</span>
            </div>

            <h1 className="hero-title hero-seq-2">
              Hospital-Grade Clinical Care, <span className="hero-text-accent">At Your Home.</span>
            </h1>

            <p className="hero-subtitle hero-seq-3">
              Delivering verified ICU bedside nursing, on-call physician visits, personalized physical rehabilitation, and doorstep diagnostics tailored for complete recovery and family peace of mind.
            </p>

            <div className="hero-buttons hero-seq-4">
              <MagneticButton maxDistance={4}>
                <Link to="/book-an-appointment" className="btn btn-primary btn-hero btn-hero-primary">
                  <Calendar size={18} />
                  <span>Book an Appointment</span>
                </Link>
              </MagneticButton>

              <MagneticButton maxDistance={4}>
                <a href={siteData.contact.phoneHref} className="btn btn-outline-white btn-hero">
                  <PhoneCall size={18} />
                  <span>Call {siteData.contact.phone}</span>
                </a>
              </MagneticButton>
            </div>

            {/* Key Highlights Under Hero */}
            <div className="hero-highlights hero-seq-5">
              <div className="highlight-item">
                <ShieldCheck size={18} className="highlight-icon" />
                <span>100% Background-Verified Staff</span>
              </div>
              <div className="highlight-item">
                <HeartPulse size={18} className="highlight-icon" />
                <span>Doctor-Supervised Protocols</span>
              </div>
            </div>
          </div>

          {/* Right: 3D WebGL Healthcare Canvas */}
          <div className="hero-visual-column">
            <Hero3DCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
