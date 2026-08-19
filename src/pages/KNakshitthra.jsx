import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, Phone, CheckCircle, Award, UserCheck } from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import { aboutData } from '../data/aboutData';
import { siteData } from '../data/siteData';
import nurseLeaderImg from '../assets/images/senior-woman-talking-to-caring-nurse-at-waiting-room.jpg';
import './AboutUs.css';

export default function KNakshitthra() {
  const data = aboutData.kNakshitthra;

  return (
    <div className="about-subpage leader-page">
      <PageBanner
        title={data.name}
        subtitle={data.role}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About us", path: "/about-us" },
          { label: data.name, path: "/about-us/k-nakshitthra" }
        ]}
      />

      <section className="leader-bio-section section-padding">
        <div className="container">
          <div className="about-main-grid">
            {/* Left: Bio Content */}
            <div className="about-main-content">
              <span className="section-badge-subtitle">Clinical Excellence & Nursing</span>
              <h2 className="section-main-title">{data.name}</h2>
              <p className="about-lead-p">{data.bioLead}</p>

              {data.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}

              <div className="about-features-list" style={{ marginTop: '28px' }}>
                <div className="about-feature-item">
                  <UserCheck size={20} className="feat-check-icon" />
                  <span>{data.credentials}</span>
                </div>
                <div className="about-feature-item">
                  <Heart size={20} className="feat-check-icon" />
                  <span>Champion of dignified geriatric, ICU bedside, and palliative home nursing</span>
                </div>
              </div>

              <div className="about-cta-wrap" style={{ marginTop: '32px' }}>
                <Link to="/book-an-appointment" className="btn btn-primary">
                  Book Home Care
                </Link>
                <a href={siteData.contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right: Media Card */}
            <div className="about-visuals-stack">
              <img
                src={nurseLeaderImg}
                alt={data.name}
                className="visual-img-1"
                style={{ height: '440px', objectFit: 'cover' }}
              />
              <div className="experience-tag-floating" style={{ backgroundColor: 'var(--secondary-color)' }}>
                <span className="exp-yr">CARE</span>
                <span className="exp-lbl">PATIENT ADVOCACY</span>
              </div>
            </div>
          </div>

          {/* Clinical Pillars */}
          <div className="section-padding-sm" style={{ paddingBottom: 0 }}>
            <div style={{ textAlign: 'center', marginBottom: '35px' }}>
              <span className="section-badge-subtitle">Patient Care Principles</span>
              <h2 className="section-main-title" style={{ fontSize: '32px' }}>Clinical Excellence Pillars</h2>
            </div>

            <div className="vision-mission-cards" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {data.keyPillars.map((pillar, idx) => (
                <div key={idx} className="vm-card card">
                  <div className="vm-icon-box mission-box">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <h3 className="vm-title">{pillar.title}</h3>
                    <p className="vm-text">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
