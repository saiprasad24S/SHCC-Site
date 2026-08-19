import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldCheck, CheckCircle2, Phone, Calendar } from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import { aboutData } from '../data/aboutData';
import { siteData } from '../data/siteData';
import './AboutUs.css';

export default function Capabilities() {
  const data = aboutData.capabilities;

  return (
    <div className="about-subpage capabilities-page">
      <PageBanner
        title="Capabilities"
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About us", path: "/about-us" },
          { label: "Capabilities", path: "/about-us/capabilities" }
        ]}
      />

      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 50px' }}>
            <span className="section-badge-subtitle">Clinical Infrastructure</span>
            <h2 className="section-main-title">{data.title}</h2>
            <p className="about-lead-p">{data.lead}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
            {data.capabilityList.map((cap, idx) => (
              <div key={idx} className="card" style={{ padding: '36px 32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid var(--border-color)' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--border-radius-sm)',
                    backgroundColor: 'var(--primary-light)',
                    color: 'var(--primary-color)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Activity size={24} />
                  </div>
                  <h3 style={{ fontSize: '23px', color: 'var(--heading-color)', margin: 0 }}>{cap.category}</h3>
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {cap.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                      <CheckCircle2 size={18} color="var(--primary-color)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div style={{ textAlign: 'center', marginTop: '60px', padding: '45px 35px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ fontSize: '28px', color: 'var(--heading-color)', marginBottom: '12px' }}>
              Need Specialized Home Healthcare Assistance?
            </h3>
            <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '680px', margin: '0 auto 28px', lineHeight: '1.68' }}>
              Our clinical coordinator is available 24/7 to customize a care plan suited to your family's medical requirements.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '18px', flexWrap: 'wrap' }}>
              <Link to="/book-an-appointment" className="btn btn-primary">
                <Calendar size={16} />
                Book an Appointment
              </Link>
              <a href={siteData.contact.phoneHref} className="btn btn-secondary">
                <Phone size={16} />
                Call 24/7 Helpline
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
