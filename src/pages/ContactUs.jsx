import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import ContactForm from '../components/ContactForm/ContactForm';
import { siteData } from '../data/siteData';
import './ContactUs.css';

export default function ContactUs() {
  return (
    <div className="contact-page">
      <PageBanner
        title="Contact us"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Contact us", path: "/contact-us" }
        ]}
      />

      {/* Main Contact Section */}
      <section className="contact-main-section section-padding">
        <div className="container">
          <div className="contact-split-layout">
            {/* Left: Contact Info Cards */}
            <div className="contact-info-column">
              <span className="section-badge-subtitle">Contact Information</span>
              <h2 className="section-main-title">Get in touch</h2>
              <p className="contact-lead-text">
                We’re here to support your healthcare needs—right at your doorstep, anywhere in India. Whether you need assistance with home nursing, diagnostic services, pharmacy deliveries, or vaccinations, our team is just a call or message away.
              </p>

              <div className="contact-cards-stack">
                {/* Location Card */}
                <div className="contact-detail-card card">
                  <div className="contact-card-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-card-text">
                    <h4>Location</h4>
                    <p>{siteData.contact.address}</p>
                  </div>
                </div>

                {/* Email Card */}
                <div className="contact-detail-card card">
                  <div className="contact-card-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-card-text">
                    <h4>Email us</h4>
                    <p>
                      <a href={siteData.contact.emailHref} className="contact-link-highlight">
                        {siteData.contact.email}
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="contact-detail-card card">
                  <div className="contact-card-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-card-text">
                    <h4>Call us</h4>
                    <p>
                      <a href={siteData.contact.phoneHref} className="contact-link-highlight">
                        {siteData.contact.phone}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="contact-form-column">
              <div className="contact-form-card card">
                <h3 className="form-box-title">Need Help Right Now?</h3>
                <p className="form-box-subtitle">
                  Use the chat box below to connect with our support team in real-time, or leave us a message—we’ll respond promptly.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Location Section */}
      <section className="contact-map-section">
        <div className="map-container-frame">
          <iframe
            title="Skandan Home Carre Location Map"
            src="https://maps.google.com/maps?q=RR%20Plaza,%20Vijetha%20Supermarket,%20Kavuri%20Hills,%20Madhapur,%20Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
