import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, CheckCircle2, PhoneCall, Sparkles, MapPin, DollarSign } from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import AppointmentForm from '../components/AppointmentForm/AppointmentForm';
import { siteData } from '../data/siteData';
import './BookAppointment.css';

export default function BookAppointment() {
  return (
    <div className="appointment-page">
      <PageBanner
        title="Book an Appointment"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Book an Appointment", path: "/book-an-appointment" }
        ]}
      />

      {/* Main Appointment Section */}
      <section className="appointment-main-section section-padding">
        <div className="container">
          <div className="appointment-split-grid">
            {/* Left: Value Points */}
            <div className="appointment-info-column">
              <span className="section-badge-subtitle">Home Healthcare</span>
              <h2 className="section-main-title">Get Quality Care at Your Doorstep</h2>
              <p className="appointment-lead-p">
                Skip the hospital queues and experience expert medical care from the comfort of your home. At <strong>{siteData.name}</strong>, we bring professional healthcare services straight to you— <strong>anywhere across India</strong> . Whether you need skilled <strong>nursing</strong> , <strong>lab tests</strong> , <strong>medicine delivery</strong> , or <strong>vaccinations</strong> , our trained team is ready to assist you with safety, compassion, and reliability.
              </p>

              {/* Why Choose Us Points */}
              <div className="appointment-benefits-box">
                <h4 className="benefits-title">Why Choose Us?</h4>
                <div className="benefits-list">
                  <div className="benefit-row">
                    <CheckCircle2 size={18} className="benefit-icon" />
                    <span>Trained & Verified Medical Professionals</span>
                  </div>
                  <div className="benefit-row">
                    <CheckCircle2 size={18} className="benefit-icon" />
                    <span>Fast Service with Flexible Scheduling</span>
                  </div>
                  <div className="benefit-row">
                    <CheckCircle2 size={18} className="benefit-icon" />
                    <span>Safe & Hygienic Home Visits</span>
                  </div>
                  <div className="benefit-row">
                    <CheckCircle2 size={18} className="benefit-icon" />
                    <span>PAN India Coverage</span>
                  </div>
                  <div className="benefit-row">
                    <CheckCircle2 size={18} className="benefit-icon" />
                    <span>Affordable & Transparent Pricing</span>
                  </div>
                </div>
              </div>

              {/* Quick Call Box */}
              <div className="appointment-quick-call-card card">
                <PhoneCall size={28} className="quick-call-icon" />
                <div>
                  <span className="quick-call-lbl">Call us anytime at</span>
                  <a href={siteData.contact.phoneHref} className="quick-call-val">
                    {siteData.contact.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Appointment Form */}
            <div className="appointment-form-column">
              <div className="form-card-wrapper card">
                <h3 className="form-card-title">Book an Appointment</h3>
                <p className="form-card-subtitle">
                  Schedule a visit from our expert team for nursing services, diagnostics, pharmacy needs, or vaccinations—anywhere across India.
                </p>
                <AppointmentForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="appointment-cta-section section-padding-sm bg-primary text-center">
        <div className="container">
          <div className="appointment-cta-box">
            <span className="cta-mini-tag text-white">Your Health, Our Priority</span>
            <h2 className="text-white cta-title-lg">
              At Skandan Home Carre Cclinic, we understand that true healing begins at home. That’s why we focus not just on treatment, but on comfort, trust, and continuity of care— anywhere in India .
            </h2>
            <div className="appointment-cta-actions">
              <Link to="/contact-us" className="btn btn-secondary btn-lg">
                Contact us
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
