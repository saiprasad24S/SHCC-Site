import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

export default function PageBanner({ title, subtitle, breadcrumbs = [] }) {
  // Convert breadcrumbs format to items
  const items = breadcrumbs.length > 0
    ? breadcrumbs.filter(b => b.label !== 'Home')
    : [{ label: title }];
    
  return <Breadcrumb title={title} subtitle={subtitle} items={items} />;
}
