import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, PhoneCall, Calendar, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import { servicesData } from '../data/servicesData';
import { siteData } from '../data/siteData';
import './ServicesList.css';

export default function ServicesList() {
  return (
    <div className="services-list-page">
      <PageBanner
        title="Services"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" }
        ]}
      />

      {/* Services Grid Section */}
      <section className="services-overview-section section-padding">
        <div className="container">
          <SectionHeading
            subtitle="Home Health Services"
            title="Comprehensive Healthcare at Your Doorstep"
            description="Explore our specialized clinical and support services, each delivered with hospital-grade protocols, compassion, and complete dedication to your family's health."
          />

          <div className="services-overview-grid">
            {servicesData.map((srv) => (
              <div key={srv.id} className="service-overview-card card">
                <div className="srv-card-media">
                  <img src={srv.coverImage || srv.heroImage} alt={srv.title} className="srv-card-img" />
                  <span className="srv-card-badge">{srv.title}</span>
                </div>

                <div className="srv-card-content">
                  <h3 className="srv-card-title">{srv.title}</h3>
                  <p className="srv-card-tagline">{srv.subtitle}</p>
                  <p className="srv-card-desc">{srv.shortDescription}</p>

                  <div className="srv-card-offerings-preview">
                    <span className="preview-label">Key Offerings:</span>
                    <ul className="preview-list">
                      {srv.offerings.slice(0, 3).map((off, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={13} color="#004E9E" />
                          <span>{off.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="srv-card-actions">
                    <Link to={`/services/${srv.slug}`} className="btn btn-outline btn-sm">
                      <span>Discover more</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link to="/book-an-appointment" className="btn btn-primary btn-sm">
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="services-cta-section bg-primary text-center section-padding-sm">
        <div className="container">
          <h2 className="services-cta-title">Need Immediate Medical Assistance at Home?</h2>
          <p className="services-cta-desc">
            Book a skilled nurse or medical service now with just a call. Our care team is available 24/7.
          </p>
          <div className="services-cta-buttons">
            <Link to="/book-an-appointment" className="btn btn-secondary btn-lg">
              <Calendar size={18} />
              Book an Appointment
            </Link>
            <a href={siteData.contact.phoneHref} className="btn btn-outline-white btn-lg">
              <PhoneCall size={18} />
              Call {siteData.contact.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
