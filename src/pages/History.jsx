import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Award, CheckCircle, Flag, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import { aboutData } from '../data/aboutData';
import historyImg from '../assets/images/skanda-4.jpg';
import './AboutUs.css';

export default function History() {
  const data = aboutData.history;

  return (
    <div className="about-subpage history-page">
      <PageBanner
        title="Our History"
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About us", path: "/about-us" },
          { label: "Our History", path: "/about-us/history" }
        ]}
      />

      <section className="section-padding">
        <div className="container">
          <div className="about-main-grid" style={{ marginBottom: '60px' }}>
            <div className="about-main-content">
              <span className="section-badge-subtitle">Foundation & Growth</span>
              <h2 className="section-main-title">{data.title}</h2>
              <p className="about-lead-p">{data.lead}</p>
              <p>
                From humble beginnings in Madhapur, Hyderabad, Skandan Home Carre was established with a singular vision: to make hospital-standard medical recovery accessible, reliable, and comfortable within the sanctuary of home.
              </p>
              <p>
                Over the years, our dedicated teams of ICU nurses, physiotherapists, phlebotomists, and on-call physicians have tended to thousands of patients across Telangana, fostering healing, safety, and heartfelt peace of mind.
              </p>
            </div>

            <div className="about-visuals-stack">
              <img
                src={historyImg}
                alt="Skandan Healthcare Journey"
                className="visual-img-1"
                style={{ height: '380px', objectFit: 'cover' }}
              />
              <div className="experience-tag-floating">
                <span className="exp-yr">2021</span>
                <span className="exp-lbl">FOUNDED IN HYDERABAD</span>
              </div>
            </div>
          </div>

          {/* Timeline Milestones */}
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <span className="section-badge-subtitle">Milestones</span>
            <h2 className="section-main-title">Key Milestones of Our Journey</h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '880px', margin: '0 auto' }}>
            {data.milestones.map((m, idx) => (
              <div key={idx} className="card" style={{ padding: '30px 32px', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{
                  padding: '12px 18px',
                  backgroundColor: 'var(--primary-color)',
                  color: '#FFFFFF',
                  borderRadius: 'var(--border-radius-sm)',
                  fontWeight: '700',
                  fontSize: '20px',
                  fontFamily: 'var(--font-heading)',
                  flexShrink: 0,
                  textAlign: 'center',
                  minWidth: '85px'
                }}>
                  {m.year}
                </div>
                <div>
                  <h3 style={{ fontSize: '22px', color: 'var(--heading-color)', marginBottom: '8px' }}>{m.title}</h3>
                  <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.68', marginBottom: 0 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link to="/services" className="btn btn-primary btn-lg">
              Explore Our Healthcare Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
