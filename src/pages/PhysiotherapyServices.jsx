import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from '../data/servicesData';

export default function PhysiotherapyServices() {
  const service = servicesData.find((s) => s.slug === 'physiotherapy-services');
  return <ServicePageTemplate service={service} />;
}
