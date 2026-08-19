import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Compass, Heart, Shield, Award, Clock, CheckCircle2 } from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import { aboutData } from '../data/aboutData';
import { siteData } from '../data/siteData';
import './AboutUs.css';

export default function MissionValues() {
  const data = aboutData.missionValues;

  return (
    <div className="about-subpage mission-values-page">
      <PageBanner
        title="Our Mission & Values"
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About us", path: "/about-us" },
          { label: "Our Mission and Values", path: "/about-us/mission-and-values" }
        ]}
      />

      {/* Vision & Mission Cards */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
            <span className="section-badge-subtitle">Purpose & Direction</span>
            <h2 className="section-main-title">{data.title}</h2>
            <p className="about-lead-p">
              Guiding every home visit, every clinical procedure, and every interaction with empathy, medical rigor, and integrity.
            </p>
          </div>

          <div className="vision-mission-cards" style={{ gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div className="vm-card card" style={{ padding: '38px 32px' }}>
              <div className="vm-icon-box vision-box" style={{ width: '60px', height: '60px' }}>
                <Target size={30} />
              </div>
              <div>
                <h3 className="vm-title" style={{ fontSize: '24px', marginBottom: '12px' }}>Our Vision</h3>
                <p className="vm-text" style={{ fontSize: '17px', lineHeight: '1.7' }}>{data.vision}</p>
              </div>
            </div>

            <div className="vm-card card" style={{ padding: '38px 32px' }}>
              <div className="vm-icon-box mission-box" style={{ width: '60px', height: '60px' }}>
                <Compass size={30} />
              </div>
              <div>
                <h3 className="vm-title" style={{ fontSize: '24px', marginBottom: '12px' }}>Our Mission</h3>
                <p className="vm-text" style={{ fontSize: '17px', lineHeight: '1.7' }}>{data.mission}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="section-padding bg-light">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span className="section-badge-subtitle">Guiding Principles</span>
            <h2 className="section-main-title">Our Core Healthcare Values</h2>
          </div>

          <div className="vision-mission-cards" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {data.values.map((val, idx) => (
              <div key={idx} className="vm-card card" style={{ flexDirection: 'column', padding: '34px 28px' }}>
                <div className="vm-icon-box" style={{ backgroundColor: idx % 2 === 0 ? 'var(--primary-light)' : 'var(--secondary-light)', color: idx % 2 === 0 ? 'var(--primary-color)' : 'var(--secondary-color)', marginBottom: '16px' }}>
                  <CheckCircle2 size={26} />
                </div>
                <h3 className="vm-title" style={{ fontSize: '21px', marginBottom: '10px' }}>{val.title}</h3>
                <p className="vm-text" style={{ fontSize: '15.5px', lineHeight: '1.65' }}>{val.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/book-an-appointment" className="btn btn-primary btn-lg">
              Experience Compassionate Care
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
