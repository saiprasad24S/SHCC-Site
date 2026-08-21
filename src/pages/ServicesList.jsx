import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  CheckCircle2,
  PhoneCall,
  Calendar,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import ServiceIcon from '../components/ServiceIcon/ServiceIcon';
import TiltCard from '../components/InteractiveCard/TiltCard';
import MagneticButton from '../components/MagneticButton/MagneticButton';
import { servicesData, serviceCategories } from '../data/servicesData';
import { siteData } from '../data/siteData';
import './ServicesList.css';

export default function ServicesList() {
  const location = useLocation();

  // Active category filter state
  const [activeCategory, setActiveCategory] = useState('all');

  // Currently focused service (default to first service)
  const [selectedServiceId, setSelectedServiceId] = useState('critical-nursing-care');

  // Sync selected service if URL changes or location state exists
  useEffect(() => {
    if (location.pathname.startsWith('/services/')) {
      const slug = location.pathname.replace('/services/', '').toLowerCase();
      const match = servicesData.find(s => s.slug === slug || s.id === slug);
      if (match) {
        setSelectedServiceId(match.id);
        setActiveCategory(match.categoryKey);
      }
    }
  }, [location.pathname]);

  const activeService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.categoryKey === activeCategory);

  return (
    <div className="services-list-page">
      <PageBanner
        title="Our Healthcare Services"
        subtitle="Specialized home nursing, physician consultations, physical rehabilitation, and doorstep diagnostics across Hyderabad."
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" }
        ]}
      />

      {/* =========================================================================
          SPECIALIZED CLINICAL SERVICES HUB
      ========================================================================= */}
      <section className="services-explorer-section section-padding">
        <div className="container">
          <SectionHeading
            badge="Healthcare Divisions"
            title="Explore Healthcare Solutions"
            description="Select any specialized clinical service below to view its clinical overview, key capabilities, and customized home care regimens."
            alignment="center"
          />

          {/* Category Navigation Pills */}
          <div className="services-category-tabs-wrap">
            <div className="services-category-tabs" role="tablist">
              {serviceCategories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    className={`category-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => {
                      setActiveCategory(cat.key);
                      if (cat.key !== 'all') {
                        const firstInCat = servicesData.find(s => s.categoryKey === cat.key);
                        if (firstInCat) setSelectedServiceId(firstInCat.id);
                      }
                    }}
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

          {/* Main Clinical Hub Layout (2 Columns) */}
          <div className="services-hub-layout">
            {/* Left Column: Service Selector List */}
            <div className="services-selector-column">
              <div className="selector-list-header">
                <span className="selector-count-tag">
                  {filteredServices.length} {filteredServices.length === 1 ? 'Service' : 'Services'} Available
                </span>
              </div>

              <div className="services-selector-list" role="tablist" aria-orientation="vertical">
                {filteredServices.map((srv) => {
                  const isSelected = srv.id === selectedServiceId;
                  return (
                    <button
                      key={srv.id}
                      className={`service-select-item ${isSelected ? 'active' : ''}`}
                      onClick={() => setSelectedServiceId(srv.id)}
                      role="tab"
                      aria-selected={isSelected}
                    >
                      <div className="select-item-icon-box">
                        <ServiceIcon name={srv.iconName} size={20} />
                      </div>
                      <div className="select-item-text">
                        <h4 className="select-item-title">{srv.title}</h4>
                        <span className="select-item-category">{srv.categoryName}</span>
                      </div>
                      <div className="select-active-indicator" aria-hidden="true">
                        <ChevronRight size={18} />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Clinical Showcase + Active Service Info */}
            <div className="services-3d-stage-column">
              {/* Clinical Showcase Image Card */}
              <div className="active-service-showcase-media">
                <img
                  key={activeService.id}
                  src={activeService.heroImage || activeService.coverImage}
                  alt={activeService.title}
                  className="showcase-main-photo"
                />
                <div className="showcase-photo-overlay"></div>
                <div className="showcase-floating-badges">
                  <span className="showcase-cat-badge">{activeService.categoryName}</span>
                  <span className="showcase-verified-badge">
                    <ShieldCheck size={14} /> Certified Protocol
                  </span>
                </div>
                <div className="showcase-photo-caption">
                  <h3 className="showcase-caption-title">{activeService.title}</h3>
                  <span className="showcase-caption-sub">Hospital-Standard Home Care</span>
                </div>
              </div>

              {/* Synchronized Service Details Card */}
              <div className="active-service-card card">
                <div className="active-service-header">
                  <div className="active-cat-badge">{activeService.categoryName}</div>
                  <span className="active-status-tag">
                    <ShieldCheck size={14} /> Hospital-Grade Protocol
                  </span>
                </div>

                <h3 className="active-service-title">{activeService.title}</h3>
                <p className="active-service-desc">{activeService.subtitle || activeService.shortDescription}</p>

                {/* Key Capabilities Checklist */}
                <div className="active-offerings-preview">
                  <span className="offerings-label">Clinical Highlights & Procedures:</span>
                  <div className="offerings-grid">
                    {activeService.offerings.slice(0, 3).map((offering, idx) => (
                      <div key={idx} className="offering-chip">
                        <CheckCircle2 size={16} className="offering-check" />
                        <span>{offering.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="active-service-actions">
                  <MagneticButton maxDistance={4}>
                    <Link to="/book-an-appointment" className="btn btn-primary btn-md">
                      <Calendar size={17} />
                      <span>Book an Appointment</span>
                    </Link>
                  </MagneticButton>

                  <MagneticButton maxDistance={4}>
                    <a
                      href={siteData.contact.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-md"
                    >
                      <MessageSquare size={17} />
                      <span>WhatsApp Coordinator</span>
                    </a>
                  </MagneticButton>

                  <Link to={`/services/${activeService.slug}`} className="btn btn-outline btn-md">
                    <span>Full Clinical Details</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FULL SERVICES CATALOG (TILT CARDS GRID)
      ========================================================================= */}
      <section className="services-catalog-section section-padding bg-light">
        <div className="container">
          <SectionHeading
            badge="Comprehensive Catalog"
            title="All Healthcare Services at a Glance"
            description="Explore our full range of certified home healthcare disciplines delivered by licensed nurses, therapists, and physicians."
            alignment="center"
          />

          <div className="services-overview-grid">
            {filteredServices.map((srv) => (
              <div key={srv.id} className="reveal-on-scroll">
                <TiltCard maxRotation={4} scale={1.015} className="service-overview-card card">
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
                      <button
                        type="button"
                        className="btn btn-outline btn-sm"
                        onClick={() => {
                          setSelectedServiceId(srv.id);
                          window.scrollTo({ top: 380, behavior: 'smooth' });
                        }}
                      >
                        <span>Focus Service</span>
                      </button>
                      <Link to={`/services/${srv.slug}`} className="btn btn-primary btn-sm">
                        <span>Details</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
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
            <MagneticButton maxDistance={4}>
              <Link to="/book-an-appointment" className="btn btn-secondary btn-lg">
                <Calendar size={18} />
                <span>Book an Appointment</span>
              </Link>
            </MagneticButton>

            <MagneticButton maxDistance={4}>
              <a href={siteData.contact.phoneHref} className="btn btn-outline-white btn-lg">
                <PhoneCall size={18} />
                <span>Call {siteData.contact.phone}</span>
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
