import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ReactLenis, useLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

import { ThemeProvider } from './context/ThemeContext';

// Layout Components
import TopBar from './components/TopBar/TopBar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingActions from './components/FloatingActions/FloatingActions';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import KMahindra from './pages/KMahindra';
import KNakshitthra from './pages/KNakshitthra';
import MissionValues from './pages/MissionValues';
import History from './pages/History';
import Capabilities from './pages/Capabilities';
import ReportsPolicies from './pages/ReportsPolicies';
import ServicesList from './pages/ServicesList';
import ServiceDetail from './pages/ServiceDetail';
import Events from './pages/Events';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import BookAppointment from './pages/BookAppointment';
import NotFound from './pages/NotFound';

// Styles
import './styles/global.css';
import './styles/responsive.css';

// Scroll to top helper on route navigation with Lenis synchronization
function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
    }
  }, [pathname, lenis]);

  return null;
}

export default function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
        infinite: false
      }}
    >
      <ThemeProvider>
        <div className="app-layout">
          <ScrollToTop />
        
          {/* Top Contact Bar */}
          <TopBar />

          {/* Main Header / Navigation */}
          <Navbar />

          {/* Page Routing */}
          <main id="main-content" className="site-main-content">
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />
              
              {/* About Us & Who Are We */}
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/who-are-we" element={<AboutUs />} />
              <Route path="/about-us/who-are-we" element={<AboutUs />} />
              <Route path="/about-us/k-mahindra" element={<KMahindra />} />
              <Route path="/about-us/k-nakshitthra" element={<KNakshitthra />} />
              <Route path="/about-us/mission-and-values" element={<MissionValues />} />
              <Route path="/about-us/our-mission-and-values" element={<MissionValues />} />
              <Route path="/about-us/history" element={<History />} />
              <Route path="/about-us/our-history" element={<History />} />
              <Route path="/about-us/capabilities" element={<Capabilities />} />
              <Route path="/about-us/reports-and-policies" element={<ReportsPolicies />} />
              
              {/* Services Overview */}
              <Route path="/services" element={<ServicesList />} />
              
              {/* Dynamic Service Detail Route (Matches all 13 services) */}
              <Route path="/services/:slug" element={<ServiceDetail />} />

              {/* Legacy Root Paths Aliased to ServiceDetail */}
              <Route path="/nursing-services" element={<ServiceDetail />} />
              <Route path="/care-givers" element={<ServiceDetail />} />
              <Route path="/physiotherapy-services" element={<ServiceDetail />} />
              <Route path="/diagnostic-services" element={<ServiceDetail />} />
              <Route path="/pharmacy-services" element={<ServiceDetail />} />
              <Route path="/pharmacy-services-medical-surgical" element={<ServiceDetail />} />
              <Route path="/immunization-vaccination-services" element={<ServiceDetail />} />
              <Route path="/doctor-on-call-services" element={<ServiceDetail />} />
              <Route path="/medical-camp-services" element={<ServiceDetail />} />
              <Route path="/critical-nursing-care" element={<ServiceDetail />} />
              <Route path="/doctor-consultation" element={<ServiceDetail />} />
              <Route path="/physiotherapy" element={<ServiceDetail />} />
              <Route path="/vaccination" element={<ServiceDetail />} />

              {/* Events */}
              <Route path="/events" element={<Events />} />

              {/* Careers */}
              <Route path="/careers" element={<Careers />} />

              {/* Contact Us */}
              <Route path="/contact-us" element={<ContactUs />} />

              {/* Book Appointment */}
              <Route path="/book-an-appointment" element={<BookAppointment />} />
              <Route path="/book-appointment" element={<BookAppointment />} />

              {/* 404 Catch-All */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Floating WhatsApp Button Only */}
          <FloatingActions />

          {/* Footer */}
          <Footer />
        </div>
      </ThemeProvider>
    </ReactLenis>
  );
}
