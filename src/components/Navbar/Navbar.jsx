import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Calendar, Phone } from 'lucide-react';
import { siteData } from '../../data/siteData';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import logoImg from '../../assets/images/Skanda-Horizontal-LOGO2.png';
import './Navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  return (
    <header className={`site-header ${isScrolled ? 'is-sticky' : ''}`}>
      <div className="header-container">
        {/* Brand Logo */}
        <div className="header-logo-column">
          <Link to="/" className="site-logo" aria-label="Skandan Home Carre Home">
            <img
              src={logoImg}
              alt="Skandan Home Carre Cclinic"
              className="logo-image"
            />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="desktop-navigation" aria-label="Main Navigation">
          <ul className="nav-menu-list">
            {siteData.navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <li
                    key={link.label}
                    className="nav-menu-item dropdown-parent"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `nav-menu-link ${location.pathname.startsWith('/services') ? 'active' : ''}`
                      }
                    >
                      <span>{link.label}</span>
                      <ChevronDown size={13} className={`dropdown-chevron ${isServicesDropdownOpen ? 'open' : ''}`} />
                    </NavLink>

                    {/* Dropdown Menu */}
                    <ul className={`nav-dropdown-menu ${isServicesDropdownOpen ? 'visible' : ''}`}>
                      {link.dropdown.map((subItem) => (
                        <li key={subItem.path} className="dropdown-menu-item">
                          <NavLink to={subItem.path} className="dropdown-menu-link">
                            {subItem.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }

              return (
                <li key={link.path} className="nav-menu-item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `nav-menu-link ${isActive ? 'active' : ''}`}
                    end={link.path === '/'}
                  >
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* CTA Button, Theme Toggle & Mobile Toggle */}
        <div className="header-right-action">
          <ThemeToggle />

          <Link to="/book-an-appointment" className="btn btn-primary btn-header-cta">
            <Calendar size={15} />
            <span>Book an Appointment</span>
          </Link>

          <button
            type="button"
            className="mobile-hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? 'drawer-open' : ''}`}>
        <div className="mobile-drawer-content">
          <ul className="mobile-menu-list">
            {siteData.navLinks.map((link) => {
              if (link.dropdown) {
                return (
                  <li key={link.label} className="mobile-menu-item">
                    <div
                      className="mobile-dropdown-header"
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    >
                      <span className="mobile-link-text">{link.label}</span>
                      <ChevronDown
                        size={18}
                        className={`mobile-chevron-icon ${isMobileServicesOpen ? 'rotated' : ''}`}
                      />
                    </div>
                    {isMobileServicesOpen && (
                      <ul className="mobile-sub-list">
                        {link.dropdown.map((subItem) => (
                          <li key={subItem.path} className="mobile-sub-item">
                            <NavLink to={subItem.path} className="mobile-sub-link">
                              {subItem.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
              return (
                <li key={link.path} className="mobile-menu-item">
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                    end={link.path === '/'}
                  >
                    <span className="mobile-link-text">{link.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-buttons">
            <ThemeToggle className="theme-toggle-drawer" />
            <Link to="/book-an-appointment" className="btn btn-primary btn-drawer-block">
              <Calendar size={16} />
              Book an Appointment
            </Link>
            <a href={siteData.contact.phoneHref} className="btn btn-secondary btn-drawer-block">
              <Phone size={16} />
              Call {siteData.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
