import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from '../data/servicesData';

export default function DiagnosticServices() {
  const service = servicesData.find((s) => s.slug === 'diagnostic-services');
  return <ServicePageTemplate service={service} />;
}
