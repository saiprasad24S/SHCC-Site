import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from '../data/servicesData';

export default function MedicalCampServices() {
  const service = servicesData.find((s) => s.slug === 'medical-camp-services');
  return <ServicePageTemplate service={service} />;
}
