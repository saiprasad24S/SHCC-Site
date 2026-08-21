import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getServiceBySlug } from '../data/servicesData';
import ServicePageTemplate from './ServicePageTemplate';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return <ServicePageTemplate service={service} />;
}
