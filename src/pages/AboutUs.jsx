import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Award,
  Users,
  Clock,
  Heart,
  Eye,
  Target,
  CheckCircle2,
  Calendar,
  PhoneCall,
  UserCheck,
  Compass,
  History as HistoryIcon,
  Activity,
  FileText,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import { siteData } from '../data/siteData';
import { aboutData } from '../data/aboutData';
import { statisticsData } from '../data/testimonialsData';

import aboutImg1 from '../assets/images/skandan-aboutus-2.jpg';
import aboutImg2 from '../assets/images/skanda-4.jpg';
import whyChooseImg from '../assets/images/senior-woman-talking-to-caring-nurse-at-waiting-room.jpg';

import './AboutUs.css';

export default function AboutUs() {
  const who = aboutData.whoAreWe;

  const organizationPillars = [
    {
      title: "Our Mission and Values",
      subtitle: "Vision & Principles",
      desc: "Upholding clinical excellence, integrity, 24/7 reliability, and patient dignity in every home visit.",
      path: "/about-us/mission-and-values",
      icon: Compass
    },
    {
      title: "Our History",
      subtitle: "The Healthcare Journey",
      desc: "Founded in 2021 in Hyderabad, expanding to comprehensive doorstep clinical services across Telangana.",
      path: "/about-us/history",
      icon: HistoryIcon
    },
    {
      title: "Clinical Capabilities",
      subtitle: "Medical Infrastructure",
      desc: "ICU bedside nursing, physiotherapy, doorstep lab collections, pharmacy delivery, and doctor on call.",
      path: "/about-us/capabilities",
      icon: Activity
    },
    {
      title: "Reports & Governance",
      subtitle: "Quality & Compliance",
      desc: "Infection control protocols, sterile SOPs, patient privacy, and caregiver credential verifications.",
      path: "/about-us/reports-and-policies",
      icon: FileText
    }
  ];

  return (
    <div className="about-page">
      <PageBanner
        title="Who Are We?"
        subtitle="About Skandan Home Carre Clinic — Dedicated to Clinical Excellence & Compassionate Home Care"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About us", path: "/about-us" },
          { label: "Who Are We?", path: "/about-us" }
        ]}
      />

      {/* 1. Main Story / Who Are We */}
      <section id="who-are-we" className="about-main-section section-padding">
        <div className="container">
          <div className="about-main-grid">
            <div className="about-main-content">
              <span className="section-badge-subtitle">Who Are We</span>
              <h2 className="section-main-title">{who.title}</h2>
              <p className="about-lead-p">{who.lead}</p>
              
              {who.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <div className="about-features-list">
                {who.highlights.map((hl, i) => (
                  <div key={i} className="about-feature-item">
                    <CheckCircle2 size={18} className="feat-check-icon" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              {/* Vision & Mission Cards */}
              <div className="vision-mission-cards">
                <div className="vm-card card">
                  <div className="vm-icon-box vision-box">
                    <Eye size={24} />
                  </div>
                  <div>
                    <h4 className="vm-title">Our Vision</h4>
                    <p className="vm-text">
                      To provide high-quality, affordable home healthcare services with compassion and professionalism across India.
                    </p>
                  </div>
                </div>

                <div className="vm-card card">
                  <div className="vm-icon-box mission-box">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="vm-title">Our Mission</h4>
                    <p className="vm-text">
                      To be India’s most trusted home healthcare provider, recognized for excellence in clinical care, integrity in service, and patient dignity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images Collage */}
            <div className="about-main-visuals">
              <div className="about-visuals-stack">
                <img src={aboutImg1} alt="Skandan Caregiver with Patient" className="visual-img-1" />
                <img src={aboutImg2} alt="Doctor Consult at Home" className="visual-img-2" />
                <div className="experience-tag-floating">
                  <span className="exp-yr">Est. 2021</span>
                  <span className="exp-lbl">PAN-India Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Executive Leadership Profiles */}
      <section className="about-leadership-section section-padding bg-light">
        <div className="container">
          <SectionHeading
            badge="Executive Leadership"
            title="Guided by Healthcare Visionaries"
            description="Meet the dedicated leaders behind Skandan Home Carre Clinic ensuring clinical rigor, operations excellence, and patient advocacy."
            alignment="center"
          />

          <div className="about-founders-grid">
            {/* Founder 1: K Mahindra */}
            <div className="founder-card card">
              <div className="founder-header">
                <div className="founder-avatar-icon">
                  <UserCheck size={28} />
                </div>
                <div>
                  <span className="founder-role-badge">Co-Founder & Operations Director</span>
                  <h3 className="founder-name">K Mahindra</h3>
                </div>
              </div>
              <p className="founder-bio">
                Leading healthcare operations, emergency dispatch logistics, and clinical quality assurance to ensure every patient receives prompt, dependable home medical support.
              </p>
              <div className="founder-footer">
                <Link to="/about-us/k-mahindra" className="founder-link">
                  <span>View Leadership Profile</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* Founder 2: K Nakshitthra */}
            <div className="founder-card card">
              <div className="founder-header">
                <div className="founder-avatar-icon" style={{ backgroundColor: 'var(--secondary-light)', color: 'var(--secondary-color)' }}>
                  <Heart size={28} />
                </div>
                <div>
                  <span className="founder-role-badge" style={{ color: 'var(--secondary-color)', backgroundColor: 'var(--secondary-light)' }}>
                    Co-Founder & Clinical Director
                  </span>
                  <h3 className="founder-name">K Nakshitthra</h3>
                </div>
              </div>
              <p className="founder-bio">
                Overseeing nursing governance, clinical protocols, patient safety standards, and specialized geriatric care with deep empathy and personalized patient advocacy.
              </p>
              <div className="founder-footer">
                <Link to="/about-us/k-nakshitthra" className="founder-link">
                  <span>View Leadership Profile</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Organization Structure & Governance Pillars */}
      <section className="about-pillars-section section-padding">
        <div className="container">
          <SectionHeading
            badge="Organizational Pillars"
            title="Explore Our Core Foundation"
            description="Learn more about our clinical standards, history, specialized capabilities, and healthcare governance policies."
            alignment="center"
          />

          <div className="about-pillars-grid">
            {organizationPillars.map((sec, idx) => {
              const IconComponent = sec.icon;
              return (
                <Link key={idx} to={sec.path} className="pillar-card card">
                  <div className="pillar-icon-box">
                    <IconComponent size={24} />
                  </div>

                  <h3 className="pillar-card-title">{sec.title}</h3>
                  <span className="pillar-card-subtitle">{sec.subtitle}</span>
                  <p className="pillar-card-desc">{sec.desc}</p>
                  
                  <div className="pillar-card-action">
                    <span>Learn More</span>
                    <ChevronRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Why Families Choose Us Section */}
      <section className="about-why-section section-padding bg-light">
        <div className="container">
          <div className="about-why-grid">
            <div className="about-why-content">
              <span className="section-badge-subtitle">Why Families Trust Us</span>
              <h2 className="section-main-title">We spread care to provide quality life.</h2>
              <p className="about-why-lead">
                At <strong>{siteData.name}</strong>, we deliver compassionate, clinical, and hospital-standard care right to your doorstep. Our dedicated team and patient-first approach make us the trusted choice for thousands of families.
              </p>

              <div className="why-features-grid">
                <div className="why-item">
                  <div className="why-icon-pill">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h4 className="why-item-title">Trusted by Thousands</h4>
                    <p className="why-item-desc">
                      Families across India trust us for consistent, expert home healthcare that truly makes a difference.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon-pill">
                    <Award size={22} />
                  </div>
                  <div>
                    <h4 className="why-item-title">Professional Clinicians</h4>
                    <p className="why-item-desc">
                      Our team includes licensed nurses, physiotherapists, and health aides selected for clinical expertise and empathy.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon-pill">
                    <Users size={22} />
                  </div>
                  <div>
                    <h4 className="why-item-title">2500+ Seniors Supported</h4>
                    <p className="why-item-desc">
                      We’ve proudly supported thousands of seniors with comfort, dignity, and independence at home.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon-pill">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="why-item-title">24x7 Clinical Support</h4>
                    <p className="why-item-desc">
                      Reach us via phone, WhatsApp, or our portal—our team is always accessible when you need it.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-why-media">
              <div className="why-media-card card">
                <img src={whyChooseImg} alt="Patient with home nurse" className="why-media-img" />
                <div className="stats-overlay-grid">
                  {statisticsData.map((st, i) => (
                    <div key={i} className="stat-box">
                      <div className="stat-val">{st.value}</div>
                      <div className="stat-lbl">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom CTA Banner */}
      <section className="about-cta-section text-center">
        <div className="container">
          <div className="about-cta-box">
            <span className="cta-mini-tag">Your Health, Our Priority</span>
            <h2 className="text-white cta-title-lg">
              At Skandan Home Carre Clinic, true healing begins at home with comfort, trust, and continuous clinical oversight.
            </h2>
            <div className="about-cta-actions">
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
        </div>
      </section>
    </div>
  );
}
