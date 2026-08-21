import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, PhoneCall, Calendar, ShieldCheck, HeartHandshake, FileText, ArrowRight, UserCheck } from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import AppointmentForm from '../components/AppointmentForm/AppointmentForm';
import ServiceIcon from '../components/ServiceIcon/ServiceIcon';
import TiltCard from '../components/InteractiveCard/TiltCard';
import MagneticButton from '../components/MagneticButton/MagneticButton';
import { siteData } from '../data/siteData';
import './ServicePage.css';

export default function ServicePageTemplate({ service }) {
  if (!service) return null;

  return (
    <div className="single-service-page">
      {/* 1. Page Banner */}
      <PageBanner
        title={service.pageTitle || service.title}
        subtitle={service.subtitle}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: service.title }
        ]}
      />

      {/* 2. Overview & Hero Intro Section */}
      <section className="service-intro-section section-padding">
        <div className="container">
          <div className="service-intro-grid">
            <div className="service-intro-content">
              <span className="section-badge-subtitle">{service.categoryName}</span>
              <h2 className="section-main-title">{service.title}</h2>
              <p className="lead-desc">{service.fullDescription}</p>

              <div className="service-quick-cta">
                <MagneticButton maxDistance={4}>
                  <a href="#book-form" className="btn btn-primary btn-lg">
                    <Calendar size={18} />
                    <span>Book an Appointment</span>
                  </a>
                </MagneticButton>

                <MagneticButton maxDistance={4}>
                  <a href={siteData.contact.phoneHref} className="btn btn-outline btn-lg">
                    <PhoneCall size={18} />
                    <span>Call {siteData.contact.phone}</span>
                  </a>
                </MagneticButton>
              </div>
            </div>

            <div className="service-intro-media">
              <div className="service-media-card card">
                <img
                  src={service.heroImage || service.coverImage}
                  alt={service.title}
                  className="service-hero-img"
                />
                <div className="service-media-badge-tag">
                  <ShieldCheck size={15} />
                  <span>Certified Clinical Protocol</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Primary Offerings Section */}
      {service.offerings && service.offerings.length > 0 && (
        <section className="service-offerings-section section-padding bg-light">
          <div className="container">
            <SectionHeading
              badge="Clinical Capabilities"
              title={service.offeringsSectionTitle || `What We Provide`}
              description="Standardized clinical procedures performed by certified healthcare specialists under strict medical protocols."
              alignment="center"
            />

            <div className="offerings-grid">
              {service.offerings.map((off, index) => (
                <TiltCard key={index} maxRotation={4} scale={1.015} className="offering-card card">
                  <div className="offering-icon-wrap">
                    <ServiceIcon name={service.iconName} size={24} />
                  </div>
                  <h3 className="offering-title">{off.title}</h3>
                  <p className="offering-desc">{off.desc}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Who Is It For Section */}
      {service.whoIsItFor && service.whoIsItFor.length > 0 && (
        <section className="service-who-section section-padding">
          <div className="container">
            <SectionHeading
              badge="Eligibility & Care Profiles"
              title={service.whoIsItForTitle || "Who Is This Service For?"}
              description="Tailored care regimens designed for specific patient recovery stages and medical circumstances."
              alignment="center"
            />

            <div className="who-is-it-for-grid">
              {service.whoIsItFor.map((item, idx) => (
                <TiltCard key={idx} maxRotation={3} scale={1.01} className="who-item-card card">
                  <div className="who-icon-pill">
                    <UserCheck size={22} />
                  </div>
                  <p className="who-item-text">{item}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. How It Works Section */}
      {service.howItWorks && service.howItWorks.length > 0 && (
        <section className="service-how-it-works-section section-padding bg-light">
          <div className="container">
            <SectionHeading
              badge="Structured Care Journey"
              title="How It Works"
              description="A seamless 4-step clinical workflow ensuring swift dispatch and supervised medical care."
              alignment="center"
            />

            <div className="service-steps-flow-grid">
              {service.howItWorks.map((step, idx) => (
                <TiltCard key={idx} maxRotation={4} scale={1.02} className="service-flow-step-card card">
                  <span className="flow-step-num">{step.step}</span>
                  <h4 className="flow-step-title">{step.title}</h4>
                  <p className="flow-step-desc">{step.desc}</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Why Choose Skandan's [Service] */}
      {service.whyChoosePoints && service.whyChoosePoints.length > 0 && (
        <section className="service-why-section section-padding">
          <div className="container">
            <div className="service-why-grid">
              <div className="service-why-content">
                <span className="section-badge-subtitle">Quality Standards</span>
                <h2 className="section-main-title">{service.whyChooseTitle || `Why Choose Skandan for ${service.title}?`}</h2>
                
                <div className="service-why-points-list">
                  {service.whyChoosePoints.map((pt, i) => (
                    <div key={i} className="service-why-point-item">
                      <div className="point-icon-box">
                        <ShieldCheck size={20} />
                      </div>
                      <p className="point-text">{pt}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="service-why-box-card card">
                <div className="why-box-header">
                  <div className="why-box-icon">
                    <HeartHandshake size={28} />
                  </div>
                  <div>
                    <h4 className="why-box-title">Doctor-Coordinated Care</h4>
                    <span className="why-box-sub">Supervised by Medical Officers</span>
                  </div>
                </div>
                <p className="why-box-desc">
                  Every home treatment plan is synchronized with your treating physician. We provide daily vitals records, clinical notes, and emergency escalation support.
                </p>
                <div className="why-box-highlights">
                  <div className="highlight-tag"><ShieldCheck size={14} /> 100% Verified Staff</div>
                  <div className="highlight-tag"><FileText size={14} /> Daily Nursing Charts</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. Appointment Booking Section */}
      <section id="book-form" className="service-booking-section section-padding bg-light">
        <div className="container">
          <div className="service-booking-wrapper">
            <div className="booking-header text-center">
              <span className="section-badge-subtitle">Schedule Care Visit</span>
              <h2 className="section-main-title">{service.ctaTitle || `Book ${service.title}`}</h2>
              <p className="booking-lead-p">
                {service.ctaSubtitle || `Fill out the form below or call +91 96609 66369 for immediate care coordinator support.`}
              </p>
            </div>

            <div className="service-booking-form-box card">
              <AppointmentForm defaultService={service.title} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
