import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Phone, CheckCircle, ShieldCheck } from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import { aboutData } from '../data/aboutData';
import { siteData } from '../data/siteData';
import leaderImg from '../assets/images/health-visitor-and-senior-man-during-home-visit-.jpg';
import './AboutUs.css';

export default function KMahindra() {
  const data = aboutData.kMahindra;

  return (
    <div className="about-subpage leader-page">
      <PageBanner
        title={data.name}
        subtitle={data.role}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About us", path: "/about-us" },
          { label: data.name, path: "/about-us/k-mahindra" }
        ]}
      />

      <section className="leader-bio-section section-padding">
        <div className="container">
          <div className="about-main-grid">
            {/* Left: Bio Content */}
            <div className="about-main-content">
              <span className="section-badge-subtitle">Leadership & Strategy</span>
              <h2 className="section-main-title">{data.name}</h2>
              <p className="about-lead-p">{data.bioLead}</p>

              {data.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}

              <div className="about-features-list" style={{ marginTop: '28px' }}>
                <div className="about-feature-item">
                  <ShieldCheck size={20} className="feat-check-icon" />
                  <span>{data.credentials}</span>
                </div>
                <div className="about-feature-item">
                  <Briefcase size={20} className="feat-check-icon" />
                  <span>Established Skandan Home Carre operational framework in Hyderabad since 2021</span>
                </div>
              </div>

              <div className="about-cta-wrap" style={{ marginTop: '32px' }}>
                <Link to="/contact-us" className="btn btn-primary">
                  Connect with Leadership
                </Link>
                <a href={siteData.contact.phoneHref} className="btn btn-secondary">
                  <Phone size={15} />
                  Call Us
                </a>
              </div>
            </div>

            {/* Right: Media / Visuals Card */}
            <div className="about-visuals-stack">
              <img
                src={leaderImg}
                alt={data.name}
                className="visual-img-1"
                style={{ height: '440px', objectFit: 'cover' }}
              />
              <div className="experience-tag-floating">
                <span className="exp-yr">2021</span>
                <span className="exp-lbl">FOUNDING LEADER</span>
              </div>
            </div>
          </div>

          {/* Strategic Focus Pillars */}
          <div className="section-padding-sm" style={{ paddingBottom: 0 }}>
            <div style={{ textAlign: 'center', marginBottom: '35px' }}>
              <span className="section-badge-subtitle">Strategic Priorities</span>
              <h2 className="section-main-title" style={{ fontSize: '32px' }}>Core Leadership Pillars</h2>
            </div>

            <div className="vision-mission-cards" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {data.keyPillars.map((pillar, idx) => (
                <div key={idx} className="vm-card card">
                  <div className="vm-icon-box vision-box">
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
