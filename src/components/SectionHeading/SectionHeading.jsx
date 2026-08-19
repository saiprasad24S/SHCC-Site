import React from 'react';
import './SectionHeading.css';

export default function SectionHeading({
  subtitle,
  title,
  description,
  alignment = 'center',
  light = false
}) {
  return (
    <div className={`section-heading-wrap align-${alignment} ${light ? 'light-mode' : ''}`}>
      {subtitle && <span className="section-badge-subtitle">{subtitle}</span>}
      {title && <h2 className="section-main-title">{title}</h2>}
      {description && <p className="section-main-desc">{description}</p>}
    </div>
  );
}
