import React from 'react';
import { PhoneCall, UserCheck, ShieldCheck, HeartHandshake } from 'lucide-react';
import SectionHeading from '../SectionHeading/SectionHeading';
import TiltCard from '../InteractiveCard/TiltCard';
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: PhoneCall,
      title: "Tell Us What You Need",
      desc: "Reach out via our 24/7 helpline or online booking. Share the patient's condition, medical history, and required care timeline."
    },
    {
      number: "02",
      icon: HeartHandshake,
      title: "Connect With Our Team",
      desc: "Our senior clinical coordinators assess the medical needs, review doctor recommendations, and suggest the ideal care regimen."
    },
    {
      number: "03",
      icon: UserCheck,
      title: "Get Matched With Care",
      desc: "We deploy qualified, background-verified ICU nurses, physiotherapists, phlebotomists, or caregivers best matched to your requirements."
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "Receive Professional Care",
      desc: "Experience compassionate, hospital-standard healthcare in the comfort of your home with ongoing clinical supervisor tracking."
    }
  ];

  return (
    <section className="how-it-works-section section-padding bg-light">
      <div className="container">
        <SectionHeading
          badge="Seamless Process"
          title="How It Works"
          description="Getting trusted hospital-grade healthcare delivered to your doorstep is simple, transparent, and prompt."
          alignment="center"
        />

        <div className="how-it-works-flow">
          <div className="how-steps-grid">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div key={idx} className={`how-step-item reveal-on-scroll delay-${idx + 1}`}>
                  <TiltCard maxRotation={4} scale={1.02} className="how-step-card card">
                    <div className="how-step-header">
                      <span className="step-count-badge">{step.number}</span>
                      <div className="step-icon-wrapper">
                        <IconComponent size={24} className="step-icon-svg" />
                      </div>
                    </div>
                    <h3 className="how-step-heading">{step.title}</h3>
                    <p className="how-step-text">{step.desc}</p>
                  </TiltCard>
                  {idx < steps.length - 1 && (
                    <div className="step-connector-arrow" aria-hidden="true">
                      <div className="connector-pulse-dot"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
