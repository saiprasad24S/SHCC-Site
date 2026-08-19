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
    workingHours: "09:00 AM to 09:00 PM",
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
        { label: "Nursing Services", path: "/services/nursing-services" },
        { label: "Care Givers", path: "/services/care-givers" },
        { label: "Physiotherapy Services", path: "/services/physiotherapy-services" },
        { label: "Diagnostic Services", path: "/services/diagnostic-services" },
        { label: "Pharmacy Services", path: "/services/pharmacy-services" },
        { label: "Immunization & Vaccination", path: "/services/immunization-vaccination" },
        { label: "Doctor On Call Services", path: "/services/doctor-on-call" },
        { label: "Medical Camp Services", path: "/services/medical-camp-services" }
      ]
    },
    { label: "Events", path: "/events" },
    { label: "Careers", path: "/careers" },
    { label: "Contact us", path: "/contact-us" },
    { label: "Who Are We?", path: "/about-us" }
  ],

  quickLinks: [
    { label: "Who Are We?", path: "/about-us" },
    { label: "Our Mission & Values", path: "/about-us/mission-and-values" },
    { label: "Capabilities", path: "/about-us/capabilities" },
    { label: "Events", path: "/events" },
    { label: "Careers", path: "/careers" },
    { label: "Contact us", path: "/contact-us" }
  ],

  footer: {
    description: "Skandan Home Carre Clinic is a specialized home health care centre, established in 2021 , offering reliable, professional, and compassionate care directly at your doorstep.",
    copyright: "Copyright © 2025 Skandan Home Carre Clinic, All rights reserved."
  }
};
