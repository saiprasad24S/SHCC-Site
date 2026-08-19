import React from 'react';
import ServicePageTemplate from './ServicePageTemplate';
import { servicesData } from '../data/servicesData';

export default function Vaccination() {
  const service = servicesData.find((s) => s.slug === 'immunization-vaccination');
  return <ServicePageTemplate service={service} />;
}
