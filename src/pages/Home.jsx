import React, { useEffect } from 'react';
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
  HeartPulse
} from 'lucide-react';
import Hero from '../components/Hero/Hero';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import TestimonialCarousel from '../components/Testimonial/TestimonialCarousel';
import { servicesData } from '../data/servicesData';
import { siteData } from '../data/siteData';
import { statisticsData } from '../data/testimonialsData';

// Image imports
import aboutImg1 from '../assets/images/skanda-4.jpg';
import aboutImg2 from '../assets/images/skanda-5.jpg';
import nursingImg from '../assets/images/nursing-8.jpg';
import caregiverImg from '../assets/images/skanda-6.jpg';
import diagnosticImg from '../assets/images/diagnostic-service-1.jpg';
import physioImg from '../assets/images/2-1.jpg';
import featuredCard1 from '../assets/images/health-visitor-and-senior-man-during-home-visit-.jpg';
import featuredCard2 from '../assets/images/couple-of-two-old-and-mature-people-at-home-using-phone-together-in-sofa-senior-use-smartphone.jpg';
import featuredCard3 from '../assets/images/skanda-8.jpg';
import whyChooseImg from '../assets/images/senior-woman-talking-to-caring-nurse-at-waiting-room.jpg';

// Icons
import vitalSignsIcon from '../assets/images/vital-signs.png';
import doctorConsultIcon from '../assets/images/doctor-consultation.png';
import elderlyIcon from '../assets/images/elderly-1.png';

import './Home.css';

export default function Home() {
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
  }, []);

  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Top Highlights 3-Column Boxes */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlights-grid">
            {/* Box 1 */}
            <div className="highlight-box-card card reveal-on-scroll animate-fade-in-up">
              <div className="highlight-box-header">
                <div className="highlight-icon-box">
                  <img src={vitalSignsIcon} alt="Our Services" className="hl-icon-img" />
                </div>
                <span className="highlight-box-badge">Our Services</span>
              </div>
              <h3 className="highlight-box-title">Skilled Care, Right at Your Home</h3>
              <p className="highlight-box-desc">
                From wound care to elderly support, our certified nurses deliver expert medical attention with compassion and precision—where you're most comfortable.
              </p>
              <Link to="/services/nursing-services" className="highlight-box-link">
                <span>Explore Nursing Services</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Box 2 */}
            <div className="highlight-box-card card reveal-on-scroll animate-fade-in-up delay-1">
              <div className="highlight-box-header">
                <div className="highlight-icon-box">
                  <img src={doctorConsultIcon} alt="Clinical Advice" className="hl-icon-img" />
                </div>
                <span className="highlight-box-badge">Clinical Advice</span>
              </div>
              <h3 className="highlight-box-title">Reliable Guidance from Medical Experts</h3>
              <p className="highlight-box-desc">
                Get trusted clinical recommendations and care plans tailored to your condition. We ensure accuracy, clarity, and peace of mind in every step of your healing.
              </p>
              <Link to="/services/doctor-on-call" className="highlight-box-link">
                <span>Consult Our Doctors</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Box 3 */}
            <div className="highlight-box-card card reveal-on-scroll animate-fade-in-up delay-2">
              <div className="highlight-box-header">
                <div className="highlight-icon-box">
                  <img src={elderlyIcon} alt="Our Expertise" className="hl-icon-img" />
                </div>
                <span className="highlight-box-badge">Our Expertise</span>
              </div>
              <h3 className="highlight-box-title">Leaders in Senior & Home Health Care</h3>
              <p className="highlight-box-desc">
                We specialize in senior care services that promote dignity, independence, and a higher quality of life—all from the comfort of home.
              </p>
              <Link to="/services/care-givers" className="highlight-box-link">
                <span>View Senior Care</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Section: "Expert Home Health Care, Centered Around You" */}
      <section className="about-home-section section-padding">
        <div className="container">
          <div className="about-home-grid">
            {/* Left Image Collage */}
            <div className="about-home-images reveal-on-scroll animate-fade-in-left">
              <div className="image-stack-wrap">
                <img src={aboutImg1} alt="Skandan Doctor with Senior Patient" className="about-img-main" />
                <img src={aboutImg2} alt="Home Nurse Caring" className="about-img-secondary" />
                <div className="experience-badge">
                  <span className="exp-number">2021</span>
                  <span className="exp-text">Established Care</span>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="about-home-content reveal-on-scroll animate-fade-in-right">
              <span className="section-badge-subtitle">About Skandan</span>
              <h2 className="section-main-title">
                Expert Home Health Care, Centered Around You
              </h2>
              <p className="about-home-text">
                <strong>{siteData.name}</strong> is a specialized home health care offering reliable, professional, and compassionate care directly at your doorstep. Established in 2021, we provide skilled nursing and diagnostic services to pharmacy support and immunizations, offering comprehensive medical assistance designed for comfort, convenience, and complete peace of mind.
              </p>
              <p className="about-home-text">
                We proudly serve families across all over India, focusing on both short-term recovery and long-term senior care needs with certified clinicians.
              </p>

              <div className="about-features-list">
                <div className="about-feature-item">
                  <CheckCircle size={18} className="feat-check-icon" />
                  <span>Hospital-grade medical protocols in the comfort of home</span>
                </div>
                <div className="about-feature-item">
                  <CheckCircle size={18} className="feat-check-icon" />
                  <span>Personalized physician-supervised recovery plans</span>
                </div>
                <div className="about-feature-item">
                  <CheckCircle size={18} className="feat-check-icon" />
                  <span>Transparent communication and regular health updates</span>
                </div>
              </div>

              <div className="about-cta-wrap">
                <Link to="/about-us" className="btn btn-primary btn-lg">
                  Know More
                </Link>
                <Link to="/contact-us" className="btn btn-outline btn-lg">
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Immediate Medical Assistance CTA Banner */}
      <section className="cta-banner-section bg-primary text-center">
        <div className="container">
          <div className="cta-banner-content reveal-on-scroll animate-fade-in-up">
            <span className="cta-mini-tag">Need Immediate Medical Assistance at Home?</span>
            <h2 className="cta-banner-title">
              Book a skilled nurse or medical service now with just a call.
            </h2>
            <p className="cta-banner-desc">
              Our 24/7 care coordinators are ready to match your patient with certified nurses, physiotherapists, and medical equipment.
            </p>
            <div className="cta-banner-buttons">
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

      {/* 5. Home Health Services: 4 Card Grid */}
      <section className="home-services-section section-padding">
        <div className="container">
          <SectionHeading
            subtitle="Home Health Services"
            title="Home Health Services That Care Like Family"
            description="At Skandan Home Carre Cclinic LLP, we bring hospital-quality care to the comfort of your home. Our team of trained professionals offers a wide range of services—from nursing care and diagnostic testing to pharmacy support and vaccinations—ensuring complete health and wellness for your loved ones."
          />

          <div className="services-card-grid">
            {/* Card 1: Nursing */}
            <div className="service-feature-card card reveal-on-scroll animate-fade-in-up">
              <div className="service-card-img-wrap">
                <img src={nursingImg} alt="Nursing Services" className="service-card-img" />
                <span className="service-card-tag">Nursing</span>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">Nursing Services</h3>
                <p className="service-card-text">
                  Trained and certified nursing professionals to manage wound care, IV administration, injections, catheterization, elderly care, and more—right in your home.
                </p>
                <Link to="/services/nursing-services" className="service-card-action">
                  <span>Discover more</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 2: Caregivers */}
            <div className="service-feature-card card reveal-on-scroll animate-fade-in-up delay-1">
              <div className="service-card-img-wrap">
                <img src={caregiverImg} alt="Care Givers" className="service-card-img" />
                <span className="service-card-tag">Caregivers</span>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">Care Givers</h3>
                <p className="service-card-text">
                  Compassionate caregivers providing round-the-clock support for newborns, elderly individuals, post-surgery patients, and palliative care needs.
                </p>
                <Link to="/services/care-givers" className="service-card-action">
                  <span>Discover more</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 3: Physiotherapy */}
            <div className="service-feature-card card reveal-on-scroll animate-fade-in-up delay-2">
              <div className="service-card-img-wrap">
                <img src={physioImg} alt="Physiotherapy Services" className="service-card-img" />
                <span className="service-card-tag">Rehabilitation</span>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">Physiotherapy Services</h3>
                <p className="service-card-text">
                  Certified physiotherapists delivering personalized rehabilitation, pain management, and mobility restoration sessions right at your doorstep.
                </p>
                <Link to="/services/physiotherapy-services" className="service-card-action">
                  <span>Discover more</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 4: Diagnostics */}
            <div className="service-feature-card card reveal-on-scroll animate-fade-in-up delay-3">
              <div className="service-card-img-wrap">
                <img src={diagnosticImg} alt="Diagnostic Services" className="service-card-img" />
                <span className="service-card-tag">Diagnostics</span>
              </div>
              <div className="service-card-body">
                <h3 className="service-card-title">Diagnostic Services</h3>
                <p className="service-card-text">
                  From blood tests to health screenings, our diagnostic experts ensure accurate and timely results without the need to step out.
                </p>
                <Link to="/services/diagnostic-services" className="service-card-action">
                  <span>Discover more</span>
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Services Bento / Cover Cards with Zoom Hover */}
      <section className="featured-services-section section-padding-sm bg-light">
        <div className="container">
          <SectionHeading
            subtitle="Specialized Solutions"
            title="Explore Our Featured Services"
            description="Dedicated healthcare and personal assistance programs customized for each family's unique recovery requirements."
          />

          <div className="featured-bento-grid">
            {/* Bento Card 1 */}
            <div className="bento-cover-card reveal-on-scroll animate-fade-in-up" style={{ backgroundImage: `url(${featuredCard1})` }}>
              <div className="bento-card-overlay"></div>
              <div className="bento-card-content">
                <span className="bento-badge">Assistance</span>
                <h3 className="bento-title">Home Care Assistance</h3>
                <p className="bento-desc">
                  Comprehensive daily living assistance, vital sign charting, mobility management, and nutrition support.
                </p>
                <Link to="/services/care-givers" className="bento-link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="bento-cover-card reveal-on-scroll animate-fade-in-up delay-1" style={{ backgroundImage: `url(${featuredCard2})` }}>
              <div className="bento-card-overlay"></div>
              <div className="bento-card-content">
                <span className="bento-badge">Companion</span>
                <h3 className="bento-title">Companion Care</h3>
                <p className="bento-desc">
                  Preventing loneliness among seniors through meaningful interactions, recreational support, and daily walks.
                </p>
                <Link to="/services/care-givers" className="bento-link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="bento-cover-card reveal-on-scroll animate-fade-in-up delay-2" style={{ backgroundImage: `url(${featuredCard3})` }}>
              <div className="bento-card-overlay"></div>
              <div className="bento-card-content">
                <span className="bento-badge">Relief</span>
                <h3 className="bento-title">Respite Care</h3>
                <p className="bento-desc">
                  Temporary relief for primary family caregivers ensuring seamless, professional continuation of patient care.
                </p>
                <Link to="/services/nursing-services" className="bento-link">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Immediate Care Notice Banner */}
      <section className="notice-banner-section section-padding-sm">
        <div className="container">
          <div className="notice-banner-card card reveal-on-scroll animate-fade-in-up">
            <div className="notice-banner-content">
              <span className="section-badge-subtitle">Always Accessible</span>
              <h2 className="notice-banner-title">Need Care at Home? We’re Just a Call Away.</h2>
              <p className="notice-banner-text">
                Whether it’s post-hospital recovery, elderly care, or regular health checkups—Skandan’s compassionate medical team is ready to help. Get professional healthcare without stepping outside your home.
              </p>
            </div>
            <div className="notice-banner-action">
              <Link to="/contact-us" className="btn btn-secondary btn-lg">
                <PhoneCall size={16} />
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Why They Choose Us & Statistics */}
      <section className="why-choose-section section-padding bg-light">
        <div className="container">
          <div className="why-choose-grid">
            {/* Left Content */}
            <div className="why-choose-content reveal-on-scroll animate-fade-in-left">
              <span className="section-badge-subtitle">Why They Choose Us</span>
              <h2 className="section-main-title">We spread care to provide quality life.</h2>
              <p className="why-choose-lead">
                At <strong>Skandan Home Carre Cclinic</strong>, we go beyond basic support—we deliver compassionate, clinical, and professional care right to your doorstep. Our dedicated team and patient-first approach make us the trusted choice for thousands of families.
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

            {/* Right Image with Stats Grid */}
            <div className="why-choose-media reveal-on-scroll animate-fade-in-right">
              <div className="why-media-card card">
                <img src={whyChooseImg} alt="Caring nurse with senior patient" className="why-media-img" />
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

      {/* 9. Testimonials Carousel */}
      <TestimonialCarousel />

      {/* 10. Need More Help? Assistance Cards */}
      <section className="assistance-section section-padding bg-light">
        <div className="container">
          <SectionHeading
            subtitle="Immediate Assistance"
            title="Need More Help?"
            description="Whether it’s medical assistance, service queries, or general help — we’re just a click away. Explore the options below to get the care and answers you need."
          />

          <div className="assistance-grid">
            {/* Card 1 */}
            <div className="assistance-card card reveal-on-scroll animate-fade-in-up">
              <div className="assistance-icon-wrap">
                <Activity size={28} />
              </div>
              <h3 className="assistance-title">Request Assistance</h3>
              <p className="assistance-desc">
                Need help with scheduling, service issues, or ongoing care support? Submit a request and we’ll get back to you quickly.
              </p>
              <Link to="/book-an-appointment" className="btn btn-outline btn-sm">
                Book an Appointment
              </Link>
            </div>

            {/* Card 2 */}
            <div className="assistance-card card highlighted reveal-on-scroll animate-fade-in-up delay-1">
              <div className="assistance-icon-wrap">
                <PhoneCall size={28} />
              </div>
              <h3 className="assistance-title">Talk to a Care Advisor</h3>
              <p className="assistance-desc">
                Have questions about our home health services or elderly care plans? Our care team is ready to guide you.
              </p>
              <Link to="/contact-us" className="btn btn-secondary btn-sm">
                Contact us
              </Link>
            </div>

            {/* Card 3 */}
            <div className="assistance-card card reveal-on-scroll animate-fade-in-up delay-2">
              <div className="assistance-icon-wrap">
                <Calendar size={28} />
              </div>
              <h3 className="assistance-title">Book a Home Visit</h3>
              <p className="assistance-desc">
                Need a nurse, physiotherapist, or medical assistance at home? Schedule a professional visit at your convenience.
              </p>
              <Link to="/book-an-appointment" className="btn btn-primary btn-sm">
                Book An appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
