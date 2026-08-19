import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users, ArrowRight, Sparkles } from 'lucide-react';
import PageBanner from '../components/PageBanner/PageBanner';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import { eventsData } from '../data/eventsData';
import { siteData } from '../data/siteData';
import './Events.css';

export default function Events() {
  return (
    <div className="events-page">
      <PageBanner
        title="Events"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Events", path: "/events" }
        ]}
      />

      {/* Events Showcase Section */}
      <section className="events-showcase-section section-padding">
        <div className="container">
          <SectionHeading
            subtitle="Community Outreach"
            title={eventsData.title}
            description={eventsData.subtitle}
          />

          {/* Events Grid */}
          <div className="events-grid">
            {eventsData.items.map((event) => (
              <div key={event.id} className="event-card card">
                <div className="event-media-wrap">
                  <img src={event.image} alt={event.title} className="event-img" />
                  <span className="event-category-badge">{event.category}</span>
                </div>

                <div className="event-body">
                  <h3 className="event-card-title">{event.title}</h3>
                  
                  <div className="event-meta-bar">
                    <div className="event-meta-item">
                      <Users size={15} className="meta-icon" />
                      <span><strong>Participants :</strong> {event.participants}</span>
                    </div>
                    <div className="event-meta-item">
                      <Calendar size={15} className="meta-icon" />
                      <span><strong>Camp Date's :</strong> {event.campDates}</span>
                    </div>
                  </div>

                  <p className="event-card-desc">{event.description}</p>

                  <div className="event-action-wrap">
                    <Link to="/contact-us" className="btn btn-outline btn-sm">
                      View Gallery <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner or Request an Event CTA */}
      <section className="partner-event-section bg-light section-padding-sm">
        <div className="container">
          <div className="partner-card card">
            <div className="partner-content">
              <span className="section-badge-subtitle">Collaboration</span>
              <h2 className="partner-title">{eventsData.partnerSection.title}</h2>
              <p className="partner-desc">
                {eventsData.partnerSection.description}
              </p>
            </div>
            <div className="partner-action">
              <Link to={eventsData.partnerSection.buttonHref} className="btn btn-primary btn-lg">
                <Sparkles size={16} />
                {eventsData.partnerSection.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
