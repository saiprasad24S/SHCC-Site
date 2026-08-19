import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from '../data/servicesData';

export default function CareGivers() {
  const service = servicesData.find((s) => s.slug === 'care-givers');
  return <ServicePageTemplate service={service} />;
}
