import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from '../data/servicesData';

export default function NursingServices() {
  const service = servicesData.find((s) => s.slug === 'nursing-services');
  return <ServicePageTemplate service={service} />;
}
