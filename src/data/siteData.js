export const siteData = {
  name: "Skandan Home Carre Clinic",
  legalName: "Skandan Home Carre Cclinic LLP",
  tagline: "Compassionate Home Health Care at Your Doorstep",
  establishedYear: 2021,
  
  contact: {
    phone: "+91 96609 66369",
    phoneHref: "tel:+919660966369",
    email: "info@skandanhomecarre.com",
    emailHref: "mailto:info@skandanhomecarre.com",
    careersEmail: "admin@skandanhomecarre.com",
    address: "RR Plaza, Vijetha Supermarket, Durgam Cheruvu Rd, behind Pardha's Picasa, opposite to Central GYM, D Block, Kavuri Hills, Madhapur, Hyderabad, Telangana 500081",
    workingHours: "24/7 Clinical Helpdesk (09:00 AM to 09:00 PM Office)",
    whatsappNumber: "919660966369",
    whatsappHref: "https://wa.me/919660966369?text=Hello%20Skandan%20Home%20Carre,%20I%20would%20like%20to%20inquire%20about%20your%20services."
  },

  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com"
  },

  navLinks: [
    { label: "Home", path: "/" },
    {
      label: "Services",
      path: "/services",
      dropdown: [
        { label: "ICU Critical Care & Post-Surgery Nursing", path: "/services/critical-nursing-care" },
        { label: "Home Nursing Procedures", path: "/services/medication-administration" },
        { label: "Newborn Baby Care & Mother Support", path: "/services/baby-care" },
        { label: "Caregivers & Patient Attendants", path: "/services/gda-care-taker" },
        { label: "Doctor Visits at Home", path: "/services/doctor-consultation" },
        { label: "School Infirmary & Campus Health", path: "/services/school-nurse" },
        { label: "Corporate & Workplace Nursing (OHC)", path: "/services/ohc-nurses" },
        { label: "Physiotherapy & Rehabilitation", path: "/services/physiotherapy" },
        { label: "Vaccination & Immunization at Home", path: "/services/vaccination" },
        { label: "Diagnostic Lab Tests (Blood & Urine)", path: "/services/sample-collection" },
        { label: "In-Home Sleep Study (Sleep Apnea)", path: "/services/sleep-study" },
        { label: "ECG & Digital X-Ray at Home", path: "/services/ecg-xray" },
        { label: "Pharmacy & Medical Supplies Delivery", path: "/services/pharmacy-delivery" }
      ]
    },
    { label: "Events", path: "/events" },
    { label: "Careers", path: "/careers" },
    { label: "Contact us", path: "/contact-us" },
    { label: "Who Are We?", path: "/about-us" }
  ],

  serviceCategoriesList: [
    {
      category: "Home Nursing & Care",
      services: [
        { label: "Critical Nursing Care / Post-Surgery Care", path: "/services/critical-nursing-care" },
        { label: "Medication & Nursing Procedures", path: "/services/medication-administration" },
        { label: "Baby Care / Sitter", path: "/services/baby-care" },
        { label: "GDA / Care Taker", path: "/services/gda-care-taker" }
      ]
    },
    {
      category: "Medical Services",
      services: [
        { label: "Doctor Consultation", path: "/services/doctor-consultation" },
        { label: "School Nurse / Sick Room", path: "/services/school-nurse" },
        { label: "OHC Nurses", path: "/services/ohc-nurses" }
      ]
    },
    {
      category: "Rehabilitation",
      services: [
        { label: "Physiotherapy at Home", path: "/services/physiotherapy" }
      ]
    },
    {
      category: "Preventive & Diagnostics",
      services: [
        { label: "Vaccination Services", path: "/services/vaccination" },
        { label: "Sample Collection / Diagnostics", path: "/services/sample-collection" },
        { label: "Sleep Study", path: "/services/sleep-study" },
        { label: "ECG & X-Ray at Home", path: "/services/ecg-xray" }
      ]
    },
    {
      category: "Pharmacy",
      services: [
        { label: "Pharmacy Delivery", path: "/services/pharmacy-delivery" }
      ]
    }
  ],

  quickLinks: [
    { label: "Who Are We?", path: "/about-us" },
    { label: "Our Mission & Values", path: "/about-us/mission-and-values" },
    { label: "Capabilities", path: "/about-us/capabilities" },
    { label: "Events", path: "/events" },
    { label: "Careers", path: "/careers" },
    { label: "Contact us", path: "/contact-us" },
    { label: "Book an Appointment", path: "/book-an-appointment" }
  ],

  footer: {
    description: "Skandan Home Carre Clinic is a premier healthcare organization, established in 2021, delivering ICU step-down nursing, on-call doctors, physical rehabilitation, home diagnostics, and pharmacy supplies directly to your doorstep with clinical precision and heartfelt compassion.",
    copyright: "Copyright © 2025 Skandan Home Carre Clinic, All rights reserved."
  }
};
