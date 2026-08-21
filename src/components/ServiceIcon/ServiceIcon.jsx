import React from 'react';
import {
  HeartPulse,
  Pill,
  Baby,
  Users,
  Stethoscope,
  GraduationCap,
  Building2,
  Activity,
  Syringe,
  Microscope,
  Moon,
  Scan,
  Package,
  LayoutGrid,
  ShieldCheck
} from 'lucide-react';
import './ServiceIcon.css';

const iconMap = {
  HeartPulse,
  Pill,
  Baby,
  Users,
  Stethoscope,
  GraduationCap,
  Building2,
  Activity,
  Syringe,
  Microscope,
  Moon,
  Scan,
  Package,
  LayoutGrid,
  ShieldCheck
};

export default function ServiceIcon({ name, size = 24, className = "" }) {
  const IconComponent = iconMap[name] || ShieldCheck;
  
  let animClass = '';
  if (name === 'HeartPulse') animClass = 'service-icon-heartpulse';
  else if (name === 'Activity') animClass = 'service-icon-activity';
  else if (name === 'Stethoscope') animClass = 'service-icon-stethoscope';

  return <IconComponent size={size} className={`service-icon-svg ${animClass} ${className}`} />;
}
