import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from '../data/servicesData';

export default function PharmacyServices() {
  const service = servicesData.find((s) => s.slug === 'pharmacy-services');
  return <ServicePageTemplate service={service} />;
}
