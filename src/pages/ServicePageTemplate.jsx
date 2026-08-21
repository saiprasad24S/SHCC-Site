import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, PhoneCall, Calendar, ShieldCheck, HeartHandshake, FileText, ArrowRight, UserCheck } from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import AppointmentForm from '../components/AppointmentForm/AppointmentForm';
import ServiceIcon from '../components/ServiceIcon/ServiceIcon';
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
                <a href="#book-form" className="btn btn-primary btn-lg">
                  <Calendar size={18} />
                  <span>Book an Appointment</span>
                </a>
                <a href={siteData.contact.phoneHref} className="btn btn-outline btn-lg">
                  <PhoneCall size={18} />
                  <span>Call {siteData.contact.phone}</span>
                </a>
              </div>
            </div>

            <div className="service-intro-media">
              <div className="service-media-card card">
                <img
                  src={service.heroImage}
                  alt={service.title}
                  className="service-hero-img"
                />
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
                <div key={index} className="offering-card card">
                  <div className="offering-icon-wrap">
                    <ServiceIcon name={service.iconName} size={24} />
                  </div>
                  <h3 className="offering-title">{off.title}</h3>
                  <p className="offering-desc">{off.desc}</p>
                </div>
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
                <div key={idx} className="who-item-card card">
                  <div className="who-icon-pill">
                    <UserCheck size={22} />
                  </div>
                  <p className="who-item-text">{item}</p>
                </div>
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
                <div key={idx} className="service-flow-step-card card">
                  <span className="flow-step-num">{step.step}</span>
                  <h4 className="flow-step-title">{step.title}</h4>
                  <p className="flow-step-desc">{step.desc}</p>
                </div>
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
              <div className="service-why-media">
                <img
                  src={service.coverImage || service.heroImage}
                  alt={`Why Choose Skandan for ${service.title}`}
                  className="service-feature-img card"
                />
              </div>

              <div className="service-why-content">
                <span className="section-badge-subtitle">Quality Assurance</span>
                <h2 className="section-main-title">
                  {service.whyChooseTitle || `Why Choose Skandan's ${service.title}?`}
                </h2>

                <div className="service-benefits-list">
                  {service.whyChoosePoints.map((point, idx) => (
                    <div key={idx} className="benefit-list-item">
                      <CheckCircle2 size={20} className="benefit-check" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <div className="why-call-box">
                  <ShieldCheck size={26} color="#004E9E" />
                  <div>
                    <strong>100% Background Verified & Medically Certified</strong>
                    <p>All healthcare personnel carry institutional ID and clinical credentials.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 7. Bottom CTA Section */}
      <section className="service-bottom-cta-section section-padding-sm bg-primary text-center">
        <div className="container">
          <div className="service-bottom-cta-box">
            <h2 className="text-white cta-title-lg">
              {service.ctaTitle || `Need Professional ${service.title}?`}
            </h2>
            <p className="text-white cta-desc-lead">
              {service.ctaSubtitle || `Call us now at +91 96609 66369 to book a visit at your convenience.`}
            </p>
            <div className="service-cta-actions">
              <a href={siteData.contact.phoneHref} className="btn btn-secondary btn-lg">
                <PhoneCall size={18} />
                <span>{service.ctaButtonText || `Call +91 96609 66369`}</span>
              </a>
              <a href="#book-form" className="btn btn-outline-white btn-lg">
                <Calendar size={18} />
                <span>Book an Appointment</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Book This Service Directly Form */}
      <section id="book-form" className="service-booking-section section-padding bg-light">
        <div className="container">
          <div className="booking-split-wrap">
            <div className="booking-info-pane">
              <span className="section-badge-subtitle">Direct Scheduling</span>
              <h2 className="section-main-title">Book {service.title} Today</h2>
              <p>
                Submit the appointment request below and our clinical care coordinator will call you within minutes to confirm the appointment, discuss medical requirements, and match the ideal clinician.
              </p>

              <div className="booking-perks">
                <div className="perk-item">
                  <div className="perk-dot"></div>
                  <span>Instant phone confirmation</span>
                </div>
                <div className="perk-item">
                  <div className="perk-dot"></div>
                  <span>Flexible hourly, shift, or live-in options</span>
                </div>
                <div className="perk-item">
                  <div className="perk-dot"></div>
                  <span>Physician-supervised recovery tracking</span>
                </div>
              </div>

              <div className="emergency-call-card card">
                <h4>Need Immediate Assistance?</h4>
                <p>Call our care coordinator directly:</p>
                <a href={siteData.contact.phoneHref} className="emergency-call-btn">
                  <PhoneCall size={18} />
                  <span>{siteData.contact.phone}</span>
                </a>
              </div>
            </div>

            <div className="booking-form-pane">
              <div className="form-card-wrapper card">
                <h3 className="form-card-title">Schedule Service</h3>
                <p className="form-card-subtitle">Fill in your details for home care coordination.</p>
                <AppointmentForm defaultService={service.title} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
