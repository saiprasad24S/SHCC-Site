import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import './Breadcrumb.css';

export default function Breadcrumb({ title, subtitle, items = [] }) {
  return (
    <div className="breadcrumb-banner">
      <div className="container">
        <h1 className="breadcrumb-page-title">{title}</h1>
        {subtitle && <p className="breadcrumb-page-subtitle">{subtitle}</p>}
        <nav className="breadcrumb-nav-wrap" aria-label="Breadcrumb">
          <ol className="breadcrumb-list">
            <li className="breadcrumb-list-item">
              <Link to="/">Home</Link>
            </li>
            {items.map((item, idx) => (
              <React.Fragment key={idx}>
                <li className="breadcrumb-separator-item">
                  <ChevronRight size={13} />
                </li>
                <li className={`breadcrumb-list-item ${idx === items.length - 1 ? 'active' : ''}`}>
                  {item.path && idx !== items.length - 1 ? (
                    <Link to={item.path}>{item.label}</Link>
                  ) : (
                    <span>{item.label}</span>
                  )}
                </li>
              </React.Fragment>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
