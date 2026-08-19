import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from '../data/servicesData';

export default function DoctorOnCall() {
  const service = servicesData.find((s) => s.slug === 'doctor-on-call');
  return <ServicePageTemplate service={service} />;
}
