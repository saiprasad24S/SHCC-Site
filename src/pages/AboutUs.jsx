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
  ArrowRight
} from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import { siteData } from '../data/siteData';
import { aboutData } from '../data/aboutData';
import { statisticsData } from '../data/testimonialsData';

import aboutImg1 from '../assets/images/skandan-aboutus-2.jpg';
import aboutImg2 from '../assets/images/skanda-4.jpg';
import whyChooseImg from '../assets/images/senior-woman-talking-to-caring-nurse-at-waiting-room.jpg';

import './AboutUs.css';

export default function AboutUs() {
  const who = aboutData.whoAreWe;

  const aboutSections = [
    {
      title: "K Mahindra",
      subtitle: "Co-Founder & Director of Operations",
      desc: "Healthcare operations and strategic delivery leadership driving patient-first home medical networks.",
      path: "/about-us/k-mahindra",
      icon: UserCheck
    },
    {
      title: "K Nakshitthra",
      subtitle: "Co-Founder & Clinical Director",
      desc: "Clinical nursing governance and empathetic patient advocacy ensuring high-touch compassionate care.",
      path: "/about-us/k-nakshitthra",
      icon: Heart
    },
    {
      title: "Our Mission and Values",
      subtitle: "Vision, Mission & Principles",
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
      title: "Capabilities",
      subtitle: "Clinical Infrastructure",
      desc: "ICU bedside nursing, physiotherapy, doorstep lab collections, pharmacy delivery, and doctor on call.",
      path: "/about-us/capabilities",
      icon: Activity
    },
    {
      title: "Reports and Policies",
      subtitle: "Governance & Transparency",
      desc: "Infection control, sterile SOPs, patient privacy compliance, and caregiver credential verifications.",
      path: "/about-us/reports-and-policies",
      icon: FileText
    }
  ];

  return (
    <div className="about-page">
      <PageBanner
        title="Who Are We?"
        subtitle="About Skandan Home Carre Cclinic"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About us", path: "/about-us" },
          { label: "Who Are We?", path: "/about-us" }
        ]}
      />

      {/* Main Story / Who Are We */}
      <section id="who-are-we" className="about-main-section section-padding">
        <div className="container">
          <div className="about-main-grid">
            <div className="about-main-content">
              <span className="section-badge-subtitle">Who Are We?</span>
              <h2 className="section-main-title">{who.title}</h2>
              <p className="about-lead-p">{who.lead}</p>
              
              {who.description.map((p, i) => (
                <p key={i}>{p}</p>
              ))}

              <div className="about-features-list" style={{ margin: '26px 0 32px' }}>
                {who.highlights.map((hl, i) => (
                  <div key={i} className="about-feature-item">
                    <CheckCircle2 size={20} className="feat-check-icon" />
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
                      To provide high-quality, affordable home healthcare services with compassion and professionalism—across India.
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
                      To become India’s most trusted home healthcare provider, recognized for excellence in care, integrity in service, and dedication to patient well-being.
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

      {/* Explore About Us Sub-Sections Grid */}
      <section className="section-padding bg-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span className="section-badge-subtitle">Organization Structure</span>
            <h2 className="section-main-title">Explore Skandan Home Carre</h2>
            <p className="about-lead-p" style={{ maxWidth: '750px', margin: '0 auto' }}>
              Learn more about our leadership, history, capabilities, and clinical governance standards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '26px' }}>
            {aboutSections.map((sec, idx) => {
              const IconComponent = sec.icon;
              return (
                <Link key={idx} to={sec.path} className="card" style={{ padding: '34px 28px', display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: 'var(--border-radius-sm)',
                    backgroundColor: idx % 2 === 0 ? 'var(--primary-light)' : 'var(--secondary-light)',
                    color: idx % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '18px'
                  }}>
                    <IconComponent size={26} />
                  </div>

                  <h3 style={{ fontSize: '22px', color: 'var(--heading-color)', marginBottom: '4px', lineHeight: '1.3' }}>
                    {sec.title}
                  </h3>
                  <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--secondary-color)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '12px' }}>
                    {sec.subtitle}
                  </span>
                  <p style={{ fontSize: '15.5px', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '20px', flexGrow: 1 }}>
                    {sec.desc}
                  </p>
                  
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.8px', color: 'var(--primary-color)', marginTop: 'auto' }}>
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why They Choose Us Section */}
      <section className="about-why-section section-padding">
        <div className="container">
          <div className="about-why-grid">
            <div className="about-why-content">
              <span className="section-badge-subtitle">Why They Choose Us</span>
              <h2 className="section-main-title">We spread care to provide quality life.</h2>
              <p className="about-why-lead">
                At <strong>{siteData.name}</strong>, we go beyond basic support—we deliver compassionate, clinical, and professional care right to your doorstep. Our dedicated team and patient-first approach make us the trusted choice for thousands of families.
              </p>

              <div className="why-features-grid">
                <div className="why-item">
                  <div className="why-icon-pill">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <h4 className="why-item-title">Trusted by Thousands</h4>
                    <p className="why-item-desc">
                      Families across all over India trust us for consistent, expert home care that truly makes a difference.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon-pill">
                    <Award size={22} />
                  </div>
                  <div>
                    <h4 className="why-item-title">Professional Caregivers</h4>
                    <p className="why-item-desc">
                      Our team includes trained nurses, physiotherapists, and health aides who are selected for their compassion and medical expertise.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon-pill">
                    <Users size={22} />
                  </div>
                  <div>
                    <h4 className="why-item-title">2500+ Happy Seniors</h4>
                    <p className="why-item-desc">
                      We’ve proudly supported thousands of seniors with comfort, dignity, and a sense of independence in their own homes.
                    </p>
                  </div>
                </div>

                <div className="why-item">
                  <div className="why-icon-pill">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="why-item-title">Easy and Safe Connectivity</h4>
                    <p className="why-item-desc">
                      Reach us via phone, WhatsApp, or our website—our support is seamless, secure, and always accessible when you need it.
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

      {/* Bottom CTA Banner */}
      <section className="about-cta-section text-center">
        <div className="container">
          <div className="about-cta-box">
            <span className="cta-mini-tag text-white">Your Health, Our Priority</span>
            <h2 className="text-white cta-title-lg">
              At Skandan Home Carre Clinic, we understand that true healing begins at home. That’s why we focus not just on treatment, but on comfort, trust, and continuity of care— anywhere in India.
            </h2>
            <div className="about-cta-actions">
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
        </div>
      </section>
    </div>
  );
}
