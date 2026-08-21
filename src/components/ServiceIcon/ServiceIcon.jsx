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
  return <IconComponent size={size} className={className} />;
}
