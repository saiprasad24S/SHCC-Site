import React from 'react';
import { siteData } from '../../data/siteData';
import './FloatingActions.css';

export default function FloatingActions() {
  return (
    <div className="floating-actions-container">
      {/* WhatsApp Floating Button Only */}
      <a
        href={siteData.contact.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-whatsapp"
        aria-label="Chat on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          width="30"
          height="30"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.19.53-1.11 1.01-1.53 1.08-.41.06-.91.08-2.78-.69-2.4-1-3.93-3.42-4.05-3.58-.12-.16-.97-1.29-.97-2.45 0-1.17.61-1.74.83-1.98.22-.24.48-.3.64-.3.16 0 .32 0 .46.01.15.01.35-.06.54.41.2.49.7 1.7.76 1.82.06.12.1.26.02.43-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.25.25-.11.49.14.24.62 1.03 1.34 1.66.92.82 1.7 1.07 1.94 1.19.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.53-.12.21.08 1.35.64 1.58.75.23.12.38.18.44.28.06.1.06.58-.13 1.11z" />
        </svg>
        <span className="floating-tooltip">WhatsApp Us</span>
      </a>
    </div>
  );
}
