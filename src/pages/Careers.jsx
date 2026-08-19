import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, CheckCircle2, Calendar, PhoneCall, Sparkles } from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import CareerForm from '../components/CareerForm/CareerForm';
import { careersData } from '../data/eventsData';
import { siteData } from '../data/siteData';
import './Careers.css';

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState('Staff Nurse');

  return (
    <div className="careers-page">
      <PageBanner
        title="Careers"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Careers", path: "/careers" }
        ]}
      />

      {/* Intro & What We Offer */}
      <section className="careers-intro-section section-padding">
        <div className="container">
          <SectionHeading
            subtitle="Work With Us"
            title={careersData.title}
            description={careersData.description}
          />

          <div className="career-offer-grid">
            <div className="career-offer-card card">
              <h3 className="career-offer-title">What We Offer</h3>
              <ul className="career-offer-list">
                {careersData.whatWeOffer.map((item, idx) => (
                  <li key={idx} className="career-offer-item">
                    <CheckCircle2 size={18} className="offer-check-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="career-email-box">
                <Mail size={20} className="career-mail-icon" />
                <div>
                  <span className="email-prompt-lbl">Email your Resume</span>
                  <a href={careersData.contactNote.emailHref} className="email-prompt-val">
                    {careersData.contactNote.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Application Form */}
            <div id="apply-now" className="career-form-card card">
              <div className="career-form-header">
                <span className="section-badge-subtitle">Join Our Team</span>
                <h3 className="career-form-title">{careersData.formIntro.title}</h3>
                <p className="career-form-subtext">{careersData.formIntro.subtitle}</p>
              </div>
              <CareerForm defaultRole={selectedRole} />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="careers-cta-section section-padding-sm bg-primary text-center">
        <div className="container">
          <div className="careers-cta-box">
            <span className="cta-mini-tag text-white">Join Our Mission</span>
            <h2 className="text-white cta-title-lg">
              {careersData.bottomCta.title}
            </h2>
            <p className="text-white cta-desc-lead">
              {careersData.bottomCta.description}
            </p>
            <div className="careers-cta-actions">
              <Link to={careersData.bottomCta.buttonHref} className="btn btn-secondary btn-lg">
                <Calendar size={18} />
                {careersData.bottomCta.buttonText}
              </Link>
              <a href={siteData.contact.phoneHref} className="btn btn-outline-white btn-lg">
                <PhoneCall size={18} />
                Call {siteData.contact.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
