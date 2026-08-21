import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, PhoneCall, Calendar, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import ServiceIcon from '../components/ServiceIcon/ServiceIcon';
import { servicesData, serviceCategories } from '../data/servicesData';
import { siteData } from '../data/siteData';
import './ServicesList.css';

export default function ServicesList() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.categoryKey === activeCategory);

  return (
    <div className="services-list-page">
      <PageBanner
        title="Our Healthcare Services"
        subtitle="Complete, compassionate clinical care, bedside nursing, and diagnostic solutions delivered directly to your home."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" }
        ]}
      />

      {/* Services Grid Section */}
      <section className="services-overview-section section-padding">
        <div className="container">
          <SectionHeading
            badge="Healthcare Divisions"
            title="Complete Healthcare, Delivered With Care"
            description="Explore our specialized clinical and support services, each delivered with hospital-grade protocols, compassion, and complete dedication to your family's health."
            alignment="center"
          />

          {/* Category Filter Tab Bar */}
          <div className="services-category-tabs-wrap">
            <div className="services-category-tabs" role="tablist">
              {serviceCategories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    className={`category-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.key)}
                    role="tab"
                    aria-selected={isActive}
                  >
                    <ServiceIcon name={cat.icon} size={17} className="tab-icon" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="services-overview-grid">
            {filteredServices.map((srv) => (
              <div key={srv.id} className="service-overview-card card">
                <div className="srv-card-media">
                  <img src={srv.coverImage || srv.heroImage} alt={srv.title} className="srv-card-img" />
                  <span className="srv-card-badge">{srv.categoryName}</span>
                  {srv.isFeatured && <span className="srv-featured-badge">Featured</span>}
                </div>

                <div className="srv-card-content">
                  <div className="srv-card-icon-title">
                    <div className="srv-icon-box">
                      <ServiceIcon name={srv.iconName} size={22} />
                    </div>
                    <h3 className="srv-card-title">{srv.title}</h3>
                  </div>

                  <p className="srv-card-desc">{srv.shortDescription}</p>

                  <div className="srv-card-offerings-preview">
                    <span className="preview-label">Key Capabilities:</span>
                    <ul className="preview-list">
                      {srv.offerings.slice(0, 3).map((off, idx) => (
                        <li key={idx}>
                          <CheckCircle2 size={15} className="check-bullet-icon" />
                          <span>{off.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="srv-card-actions">
                    <Link to={`/services/${srv.slug}`} className="btn btn-outline btn-sm">
                      <span>View Details</span>
                      <ArrowRight size={14} />
                    </Link>
                    <Link to="/book-an-appointment" className="btn btn-primary btn-sm">
                      <span>Book Service</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="services-cta-section text-center">
        <div className="container">
          <span className="section-badge-subtitle" style={{ color: '#ffb8d4', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)' }}>
            24/7 Clinical Support
          </span>
          <h2 className="services-cta-title">Need Immediate Medical Assistance at Home?</h2>
          <p className="services-cta-desc">
            Book a skilled nurse, doctor, or diagnostic test now with just a call. Our care team is available 24/7.
          </p>
          <div className="services-cta-buttons">
            <Link to="/book-an-appointment" className="btn btn-secondary btn-lg">
              <Calendar size={18} />
              <span>Book an Appointment</span>
            </Link>
            <a href={siteData.contact.phoneHref} className="btn btn-outline-white btn-lg">
              <PhoneCall size={18} />
              <span>Call {siteData.contact.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
