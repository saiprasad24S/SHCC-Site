import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, HeartCrack } from 'lucide-react';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found-page section-padding-lg text-center">
      <div className="container">
        <div className="not-found-card card">
          <div className="not-found-icon">
            <HeartCrack size={72} color="#DE347F" />
          </div>
          <h1 className="not-found-code">404</h1>
          <h2 className="not-found-title">Page Not Found</h2>
          <p className="not-found-desc">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary btn-lg">
              <Home size={18} />
              Return Home
            </Link>
            <Link to="/services" className="btn btn-outline btn-lg">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
