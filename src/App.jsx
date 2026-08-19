import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import { ThemeProvider } from './context/ThemeContext';

// Layout Components
import TopBar from './components/TopBar/TopBar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import FloatingActions from './components/FloatingActions/FloatingActions';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ServicesList from './pages/ServicesList';
import NursingServices from './pages/NursingServices';
import CareGivers from './pages/CareGivers';
import PhysiotherapyServices from './pages/PhysiotherapyServices';
import DiagnosticServices from './pages/DiagnosticServices';
import PharmacyServices from './pages/PharmacyServices';
import Vaccination from './pages/Vaccination';
import DoctorOnCall from './pages/DoctorOnCall';
import MedicalCampServices from './pages/MedicalCampServices';
import Events from './pages/Events';
import Careers from './pages/Careers';
import ContactUs from './pages/ContactUs';
import BookAppointment from './pages/BookAppointment';
import NotFound from './pages/NotFound';

// Styles
import './styles/global.css';
import './styles/responsive.css';

// Scroll to top helper on route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
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
            
            {/* About Us */}
            <Route path="/about-us" element={<AboutUs />} />
            
            {/* Services Overview */}
            <Route path="/services" element={<ServicesList />} />
            
            {/* 8 Individual Services with Canonical & Aliased Paths */}
            <Route path="/services/nursing-services" element={<NursingServices />} />
            <Route path="/nursing-services" element={<NursingServices />} />
            <Route path="/nursing-services/" element={<NursingServices />} />

            <Route path="/services/care-givers" element={<CareGivers />} />
            <Route path="/care-givers" element={<CareGivers />} />
            <Route path="/care-givers/" element={<CareGivers />} />

            <Route path="/services/physiotherapy-services" element={<PhysiotherapyServices />} />
            <Route path="/physiotherapy-services" element={<PhysiotherapyServices />} />
            <Route path="/physiotherapy-services/" element={<PhysiotherapyServices />} />

            <Route path="/services/diagnostic-services" element={<DiagnosticServices />} />
            <Route path="/diagnostic-services" element={<DiagnosticServices />} />
            <Route path="/diagnostic-services/" element={<DiagnosticServices />} />

            <Route path="/services/pharmacy-services" element={<PharmacyServices />} />
            <Route path="/pharmacy-services-medical-surgical" element={<PharmacyServices />} />
            <Route path="/pharmacy-services-medical-surgical/" element={<PharmacyServices />} />

            <Route path="/services/immunization-vaccination" element={<Vaccination />} />
            <Route path="/immunization-vaccination-services" element={<Vaccination />} />
            <Route path="/immunization-vaccination-services/" element={<Vaccination />} />

            <Route path="/services/doctor-on-call" element={<DoctorOnCall />} />
            <Route path="/doctor-on-call-services" element={<DoctorOnCall />} />
            <Route path="/doctor-on-call-services/" element={<DoctorOnCall />} />

            <Route path="/services/medical-camp-services" element={<MedicalCampServices />} />
            <Route path="/medical-camp-services" element={<MedicalCampServices />} />
            <Route path="/medical-camp-services/" element={<MedicalCampServices />} />

            {/* Events */}
            <Route path="/events" element={<Events />} />
            <Route path="/events/" element={<Events />} />

            {/* Careers */}
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/" element={<Careers />} />

            {/* Contact Us */}
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/contact-us/" element={<ContactUs />} />

            {/* Book Appointment */}
            <Route path="/book-an-appointment" element={<BookAppointment />} />
            <Route path="/book-an-appointment/" element={<BookAppointment />} />
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
  );
}
