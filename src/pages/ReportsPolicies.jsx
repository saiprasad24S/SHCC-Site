import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ShieldCheck, Download, ExternalLink, Lock, CheckCircle2 } from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import { aboutData } from '../data/aboutData';
import { siteData } from '../data/siteData';
import './AboutUs.css';

export default function ReportsPolicies() {
  const data = aboutData.reportsPolicies;

  return (
    <div className="about-subpage reports-policies-page">
      <PageBanner
        title="Reports and Policies"
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About us", path: "/about-us" },
          { label: "Reports and Policies", path: "/about-us/reports-and-policies" }
        ]}
      />

      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto 50px' }}>
            <span className="section-badge-subtitle">Governance & Standards</span>
            <h2 className="section-main-title">{data.title}</h2>
            <p className="about-lead-p">{data.lead}</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' }}>
            {data.policies.map((pol, idx) => (
              <div key={idx} className="card" style={{ padding: '36px 32px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                  <span style={{
                    fontSize: '12.5px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: 'var(--secondary-color)',
                    backgroundColor: 'var(--secondary-light)',
                    padding: '4px 12px',
                    borderRadius: 'var(--border-radius-pill)'
                  }}>
                    {pol.category}
                  </span>
                  <FileText size={22} color="var(--primary-color)" />
                </div>

                <h3 style={{ fontSize: '22px', color: 'var(--heading-color)', marginBottom: '12px', lineHeight: '1.3' }}>
                  {pol.title}
                </h3>
                <p style={{ fontSize: '15.5px', color: 'var(--text-secondary)', lineHeight: '1.68', marginBottom: '24px', flexGrow: 1 }}>
                  {pol.desc}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                  <Link to="/contact-us" className="btn btn-outline btn-sm">
                    <ExternalLink size={14} />
                    <span>Inquire Details</span>
                  </Link>
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
                    Standard Compliance & Protocol
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Compliance Banner */}
          <div style={{ marginTop: '55px', padding: '35px 30px', backgroundColor: 'var(--bg-secondary)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '22px' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'var(--primary-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={28} />
            </div>
            <div>
              <h4 style={{ fontSize: '20px', color: 'var(--heading-color)', marginBottom: '6px' }}>
                {siteData.legalName} Regulatory Governance
              </h4>
              <p style={{ fontSize: '15.5px', color: 'var(--text-secondary)', margin: 0, lineHeight: '1.6' }}>
                Skandan Home Carre operates in full compliance with healthcare regulations, clinical waste disposal norms, nurse licensing frameworks, and patient privacy standards across Telangana and India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
