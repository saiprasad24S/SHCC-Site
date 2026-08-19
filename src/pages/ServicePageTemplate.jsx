import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, PhoneCall, Calendar, ShieldCheck, HeartHandshake, FileText } from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import AppointmentForm from '../components/AppointmentForm/AppointmentForm';
import { siteData } from '../data/siteData';
import './ServicePage.css';

export default function ServicePageTemplate({ service }) {
  if (!service) return null;

  return (
    <div className="single-service-page">
      {/* 1. Page Banner */}
      <PageBanner
        title={service.pageTitle || service.title}
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
              <span className="section-badge-subtitle">{service.title}</span>
              <h2 className="section-main-title">{service.subtitle}</h2>
              <p className="lead-desc">{service.fullDescription}</p>

              <div className="service-quick-cta">
                <a href="#book-form" className="btn btn-primary btn-lg">
                  <Calendar size={16} />
                  Book an Appointment
                </a>
                <a href={siteData.contact.phoneHref} className="btn btn-outline btn-lg">
                  <PhoneCall size={16} />
                  Call {siteData.contact.phone}
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
              subtitle="Scope of Care"
              title={service.offeringsSectionTitle || `Our Comprehensive ${service.title} Include`}
              description={service.offeringsSectionDesc || ""}
            />

            <div className="offerings-grid">
              {service.offerings.map((off, index) => (
                <div key={index} className="offering-card card">
                  <div className="offering-icon-wrap">
                    <HeartHandshake size={26} />
                  </div>
                  <h3 className="offering-title">{off.title}</h3>
                  <p className="offering-desc">{off.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 4. Advanced / Critical Care Section (Nursing) */}
      {service.advancedOfferings && (
        <section className="service-advanced-section section-padding">
          <div className="container">
            <SectionHeading
              subtitle="Specialized Support"
              title={service.advancedSectionTitle || "Advanced and Critical Care Services"}
              description="High-dependency medical care provided by ICU-trained clinical nurses at home."
            />

            <div className="offerings-grid">
              {service.advancedOfferings.map((off, index) => (
                <div key={index} className="offering-card card">
                  <div className="offering-icon-wrap">
                    <ShieldCheck size={26} />
                  </div>
                  <h3 className="offering-title">{off.title}</h3>
                  <p className="offering-desc">{off.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Diagnostic How It Works & Radiology (Diagnostics) */}
      {service.howItWorksSteps && (
        <section className="service-how-it-works-section section-padding-sm bg-light">
          <div className="container">
            <SectionHeading
              subtitle="Process"
              title={service.howItWorksTitle || "How it works"}
              description="Quick, hygienic home sample collection with certified technicians."
            />

            <div className="how-it-works-grid">
              {service.howItWorksSteps.map((step, idx) => (
                <div key={idx} className="how-step-card card">
                  <div className="how-step-badge">{idx + 1}</div>
                  <h4 className="how-step-title">{step}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.radiologyOfferings && (
        <section className="service-radiology-section section-padding">
          <div className="container">
            <SectionHeading
              subtitle="Doorstep Imaging"
              title={service.radiologyTitle || "Radiology Assistance at Home"}
              description={service.radiologyDesc || ""}
            />

            <div className="offerings-grid">
              {service.radiologyOfferings.map((off, index) => (
                <div key={index} className="offering-card card">
                  <div className="offering-icon-wrap">
                    <FileText size={26} />
                  </div>
                  <h3 className="offering-title">{off.title}</h3>
                  <p className="offering-desc">{off.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Medical Equipment Rent & Purchase (Pharmacy) */}
      {service.equipmentList && (
        <section className="service-equipment-section section-padding-sm bg-light">
          <div className="container">
            <SectionHeading
              subtitle="Rental & Sales"
              title={service.equipmentSectionTitle || "Medical Equipment – Rent & Purchase"}
              description={service.equipmentSectionDesc || ""}
            />

            <div className="equipment-tags-grid">
              {service.equipmentList.map((eq, idx) => (
                <div key={idx} className="equipment-tag-card card">
                  <CheckCircle2 size={18} className="eq-check-icon" />
                  <span>{eq}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Vaccines Groups & Travel Immunization (Vaccination) */}
      {service.vaccineGroups && (
        <section className="service-vaccines-section section-padding-sm bg-light">
          <div className="container">
            <SectionHeading
              subtitle="All Age Groups"
              title={service.vaccinesSectionTitle || "Adult & Baby Vaccinations at Home"}
              description={service.vaccinesSectionDesc || ""}
            />

            <div className="equipment-tags-grid">
              {service.vaccineGroups.map((vg, idx) => (
                <div key={idx} className="equipment-tag-card card">
                  <CheckCircle2 size={18} className="eq-check-icon" />
                  <span>{vg}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.travelOfferings && (
        <section className="service-travel-section section-padding">
          <div className="container">
            <SectionHeading
              subtitle="International Guidelines"
              title={service.travelSectionTitle || "Travel Immunization Services"}
              description={service.travelSectionDesc || ""}
            />

            <div className="offerings-grid">
              {service.travelOfferings.map((off, index) => (
                <div key={index} className="offering-card card">
                  <div className="offering-icon-wrap">
                    <ShieldCheck size={26} />
                  </div>
                  <h3 className="offering-title">{off.title}</h3>
                  <p className="offering-desc">{off.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Why Choose Skandan's [Service] */}
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

      {/* 9. Bottom CTA Section */}
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
                {service.ctaButtonText || `Call +91 96609 66369`}
              </a>
              <Link to="/book-an-appointment" className="btn btn-outline-white btn-lg">
                <Calendar size={18} />
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Book This Service Directly Form */}
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
                  {siteData.contact.phone}
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
