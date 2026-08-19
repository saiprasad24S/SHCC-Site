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
  PhoneCall
} from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import { siteData } from '../data/siteData';
import { statisticsData } from '../data/testimonialsData';

import aboutImg1 from '../assets/images/skandan-aboutus-2.jpg';
import aboutImg2 from '../assets/images/skanda-4.jpg';
import whyChooseImg from '../assets/images/senior-woman-talking-to-caring-nurse-at-waiting-room.jpg';

import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="about-page">
      <PageBanner
        title="About us"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About us", path: "/about-us" }
        ]}
      />

      {/* Main Story */}
      <section className="about-main-section section-padding">
        <div className="container">
          <div className="about-main-grid">
            <div className="about-main-content">
              <span className="section-badge-subtitle">Our Background</span>
              <h2 className="section-main-title">About Skandan Home Carre Cclinic</h2>
              <p className="about-lead-p">
                At <strong>{siteData.name}</strong>, established in <strong>{siteData.establishedYear}</strong>, we are committed to delivering professional, compassionate, and personalized healthcare right to your doorstep—anywhere in India.
              </p>
              <p>
                Our goal is to bridge the gap between hospital care and home comfort, making healthcare more accessible, reliable, and human. Whether you need skilled nursing care, diagnostic testing, pharmacy support, or immunization services, our trained medical team brings hospital-quality care directly to you—where you feel safest and most at ease.
              </p>

              {/* Vision & Mission Cards */}
              <div className="vision-mission-cards">
                <div className="vm-card">
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

                <div className="vm-card">
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

      {/* Why They Choose Us Section */}
      <section className="about-why-section section-padding bg-light">
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
      <section className="about-cta-section section-padding-sm bg-primary text-center">
        <div className="container">
          <div className="about-cta-box">
            <span className="cta-mini-tag text-white">Your Health, Our Priority</span>
            <h2 className="text-white cta-title-lg">
              At Skandan Home Carre Cclinic, we understand that true healing begins at home. That’s why we focus not just on treatment, but on comfort, trust, and continuity of care— anywhere in India .
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
