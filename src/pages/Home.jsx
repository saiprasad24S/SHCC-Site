import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Users,
  Clock,
  ArrowRight,
  PhoneCall,
  CheckCircle,
  Calendar,
  Sparkles,
  HeartHandshake,
  Activity,
  ChevronRight,
  Stethoscope,
  HeartPulse,
  Syringe,
  Microscope,
  Scan,
  Pill,
  Baby,
  GraduationCap,
  Building2,
  Moon,
  Package,
  Check,
  UserCheck,
  Heart
} from 'lucide-react';
import Hero from '../components/Hero/Hero';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import TestimonialCarousel from '../components/Testimonial/TestimonialCarousel';
import ServiceIcon from '../components/ServiceIcon/ServiceIcon';
import TiltCard from '../components/InteractiveCard/TiltCard';
import MagneticButton from '../components/MagneticButton/MagneticButton';
import AnimatedCounter from '../components/AnimatedCounter/AnimatedCounter';
import { servicesData, getFeaturedServices } from '../data/servicesData';
import { siteData } from '../data/siteData';

// Image imports
import whyChooseImg from '../assets/images/senior-woman-talking-to-caring-nurse-at-waiting-room.jpg';

import './Home.css';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');

  // Reliable single-trigger IntersectionObserver for smooth scroll entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08
      }
    );

    const animElements = document.querySelectorAll('.reveal-on-scroll');
    animElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('in-view');
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [activeCategory]);

  const featuredServices = getFeaturedServices();

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter(s => s.categoryKey === activeCategory);

  return (
    <div className="home-page">
      {/* 1. Hero Section with 3D Canvas */}
      <Hero />

      {/* 2. Quick Value Proposition Trust Bar */}
      <section className="quick-trust-bar">
        <div className="container">
          <div className="trust-metrics-grid">
            <div className="trust-metric-item">
              <div className="metric-icon-box">
                <HeartPulse size={24} />
              </div>
              <div className="metric-text-box">
                <h4>ICU-Trained Nurses</h4>
                <p>12/24-Hr Bedside Critical Care</p>
              </div>
            </div>

            <div className="trust-metric-item">
              <div className="metric-icon-box">
                <Stethoscope size={24} />
              </div>
              <div className="metric-text-box">
                <h4>Doctors On Call</h4>
                <p>Doorstep Clinical Consultations</p>
              </div>
            </div>

            <div className="trust-metric-item">
              <div className="metric-icon-box">
                <ShieldCheck size={24} />
              </div>
              <div className="metric-text-box">
                <h4>100% Verified Staff</h4>
                <p>Certified, Background-Checked</p>
              </div>
            </div>

            <div className="trust-metric-item">
              <div className="metric-icon-box">
                <Microscope size={24} />
              </div>
              <div className="metric-text-box">
                <h4>Doorstep Diagnostics</h4>
                <p>ECG, X-Ray & NABL Blood Tests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Flagship Services Spotlight */}
      <section className="featured-services-section section-padding">
        <div className="container">
          <SectionHeading
            badge="Flagship Healthcare"
            title="Featured Clinical Services"
            description="Our primary healthcare divisions delivering hospital-standard treatment, physician reviews, and rehabilitation recovery at home."
            alignment="center"
          />

          <div className="featured-spotlight-grid">
            {featuredServices.map((service, idx) => (
              <div key={service.id} className={`reveal-on-scroll delay-${idx + 1}`}>
                <TiltCard maxRotation={4} scale={1.015} className="spotlight-card card">
                  <div className="spotlight-img-wrap">
                    <img src={service.heroImage} alt={service.title} className="spotlight-img" />
                    <div className="spotlight-category-tag">{service.categoryName}</div>
                    <div className="spotlight-badge-chip">{service.badge}</div>
                  </div>
                  <div className="spotlight-content">
                    <div className="spotlight-header-row">
                      <div className="spotlight-icon-circle">
                        <ServiceIcon name={service.iconName} size={22} />
                      </div>
                      <h3 className="spotlight-title">{service.title}</h3>
                    </div>
                    <p className="spotlight-desc">{service.shortDescription}</p>
                    
                    <div className="spotlight-highlights-list">
                      {service.offerings.slice(0, 2).map((offering, oIdx) => (
                        <div key={oIdx} className="spotlight-highlight-item">
                          <Check size={15} className="highlight-check-icon" />
                          <span>{offering.title}</span>
                        </div>
                      ))}
                    </div>

                    <div className="spotlight-footer">
                      <Link to={`/services/${service.slug}`} className="btn-spotlight-link">
                        <span>Explore Service Details</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Complete Services Catalog with Category Navigation Tabs */}
      <section className="services-catalog-section section-padding bg-light" id="services-catalog">
        <div className="container">
          <SectionHeading
            badge="Comprehensive Care"
            title="Complete Healthcare, Delivered With Care"
            description="Explore our specialized clinical care, bedside nursing, physical therapy, at-home diagnostics, and genuine pharmacy supplies."
            alignment="center"
          />

          {/* Interactive Services Grid */}
          <div className="services-catalog-grid">
            {filteredServices.map((service, idx) => (
              <div key={service.id} className="reveal-on-scroll">
                <TiltCard maxRotation={5} scale={1.02} className="service-catalog-card card">
                  <div className="card-top-bar">
                    <span className="service-cat-pill">{service.categoryName}</span>
                    {service.isFeatured && <span className="featured-mini-chip">Featured</span>}
                  </div>

                  <div className="service-icon-banner">
                    <div className="catalog-icon-box">
                      <ServiceIcon name={service.iconName} size={24} />
                    </div>
                  </div>

                  <h3 className="catalog-service-title">{service.title}</h3>
                  <p className="catalog-service-desc">{service.shortDescription}</p>

                  <div className="catalog-card-footer">
                    <Link to={`/services/${service.slug}`} className="catalog-learn-more">
                      <span>Learn More</span>
                      <ChevronRight size={16} />
                    </Link>
                    <Link to="/book-an-appointment" className="catalog-book-mini">
                      <span>Enquire</span>
                    </Link>
                  </div>
                </TiltCard>
              </div>
            ))}
          </div>

          <div className="services-catalog-cta text-center">
            <MagneticButton maxDistance={4}>
              <Link to="/services" className="btn btn-primary btn-lg">
                <span>View All Services</span>
                <ArrowRight size={18} />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 5. Modern How It Works (4-Step Workflow) */}
      <HowItWorks />

      {/* 6. Why Choose Us / Trust & Safety Pillars */}
      <section className="why-choose-section section-padding">
        <div className="container">
          <div className="why-choose-grid">
            <div className="why-choose-content reveal-on-scroll animate-fade-in-left">
              <span className="section-badge-subtitle">Why Choose Skandan</span>
              <h2 className="section-main-title">
                Setting the Highest Standards in Home Health Care
              </h2>
              <p className="why-choose-lead">
                At Skandan Home Carre Clinic, we combine clinical rigor with genuine compassion. Every nurse, therapist, and physician is held to strict hospital-grade standards.
              </p>

              <div className="why-features-grid">
                <div className="why-item">
                  <div className="why-icon-pill">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h3 className="why-item-title">Certified Clinicians</h3>
                    <p className="why-item-desc">
                      100% verified B.Sc/GNM nurses, licensed physiotherapists, and registered MBBS physicians.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon-pill">
                    <Award size={22} />
                  </div>
                  <div>
                    <h3 className="why-item-title">Hospital Infection Protocols</h3>
                    <p className="why-item-desc">
                      Aseptic techniques, single-use sterile consumables, and strict hand-hygiene guidelines.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon-pill">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 className="why-item-title">24x7 Care Continuity</h3>
                    <p className="why-item-desc">
                      Round-the-clock emergency support, supervisor check-ins, and doctor coordination.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon-pill">
                    <HeartHandshake size={22} />
                  </div>
                  <div>
                    <h3 className="why-item-title">Family-Centered Care</h3>
                    <p className="why-item-desc">
                      Transparent daily nursing charting and empathetic communication for total peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="why-choose-media reveal-on-scroll animate-fade-in-right">
              <div className="why-media-card">
                <img
                  src={whyChooseImg}
                  alt="Skandan Nurse Caring for Patient"
                  className="why-media-img"
                />
                <div className="stats-overlay-grid">
                  <div className="stat-box">
                    <span className="stat-val">
                      <AnimatedCounter value="2021" />
                    </span>
                    <span className="stat-lbl">ESTABLISHED CARE</span>
                  </div>
                  <div className="stat-box">
                    <span className="stat-val">
                      <AnimatedCounter value="24/7" />
                    </span>
                    <span className="stat-lbl">CLINICAL HELPDESK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Who Are We / Leadership & Company Overview Section */}
      <section className="about-home-section section-padding bg-light" id="who-are-we">
        <div className="container">
          <div className="who-are-we-header text-center">
            <span className="section-badge-subtitle">Who Are We</span>
            <h2 className="section-main-title">Compassionate Care Backed by Clinical Leadership</h2>
            <p className="section-main-desc" style={{ margin: '0 auto 45px' }}>
              Skandan Home Carre Clinic is an established healthcare organization founded in 2021, dedicated to delivering trusted hospital-grade clinical care at patient residences across Hyderabad.
            </p>
          </div>

          <div className="who-are-we-leadership-grid">
            {/* Leadership Card 1: K Mahindra */}
            <div className="reveal-on-scroll animate-fade-in-left">
              <TiltCard maxRotation={4} scale={1.015} className="leader-feature-card card">
                <div className="leader-badge-pill">
                  <UserCheck size={16} />
                  <span>Operations Director</span>
                </div>
                <h3 className="leader-name">K Mahindra</h3>
                <p className="leader-role-desc">
                  Leading healthcare operations, emergency dispatch logistics, and clinical quality assurance to ensure every family receives prompt, reliable doorstep medical support.
                </p>
                <Link to="/about-us/k-mahindra" className="leader-profile-link">
                  <span>View Full Profile</span>
                  <ArrowRight size={15} />
                </Link>
              </TiltCard>
            </div>

            {/* Leadership Card 2: K Nakshitthra */}
            <div className="reveal-on-scroll animate-fade-in-right">
              <TiltCard maxRotation={4} scale={1.015} className="leader-feature-card card">
                <div className="leader-badge-pill" style={{ color: 'var(--secondary-color)', backgroundColor: 'var(--secondary-light)' }}>
                  <Heart size={16} />
                  <span>Clinical Director</span>
                </div>
                <h3 className="leader-name">K Nakshitthra</h3>
                <p className="leader-role-desc">
                  Overseeing nursing governance, clinical protocols, patient safety standards, and specialized geriatric care with deep empathy and personalized patient advocacy.
                </p>
                <Link to="/about-us/k-nakshitthra" className="leader-profile-link">
                  <span>View Full Profile</span>
                  <ArrowRight size={15} />
                </Link>
              </TiltCard>
            </div>
          </div>

          <div className="who-are-we-actions text-center" style={{ marginTop: '35px' }}>
            <MagneticButton maxDistance={4}>
              <Link to="/about-us" className="btn btn-primary btn-lg">
                <span>Read Our Full Story</span>
                <ArrowRight size={16} />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 8. Patient Testimonials */}
      <TestimonialCarousel />

      {/* 9. Immediate Medical Assistance CTA Banner */}
      <section className="cta-banner-section bg-primary text-center">
        <div className="container">
          <div className="cta-banner-content reveal-on-scroll animate-fade-in-up">
            <span className="cta-mini-tag">Need Immediate Healthcare Assistance?</span>
            <h2 className="cta-banner-title">
              Book a Certified Nurse, Doctor, or Diagnostic Test Now.
            </h2>
            <p className="cta-banner-desc">
              Our care coordinators are available 24/7 to assess your needs, verify prescriptions, and dispatch healthcare professionals directly to your home.
            </p>
            <div className="cta-banner-buttons">
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
        </div>
      </section>
    </div>
  );
}
