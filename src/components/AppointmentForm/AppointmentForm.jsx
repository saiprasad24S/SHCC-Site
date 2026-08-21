import React, { useState } from 'react';
import { CheckCircle2, Calendar, Clock, User, Phone, Mail, MapPin, AlertCircle } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import './AppointmentForm.css';

export default function AppointmentForm({ defaultService = '', onSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: defaultService || servicesData[0]?.title || 'Nursing Services',
    date: '',
    timeSlot: 'Morning (09:00 AM - 12:00 PM)',
    address: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter patient/contact name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter phone number';
    } else if (!/^[0-9+\-\s]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.date) newErrors.date = 'Please choose a preferred date';
    if (!formData.address.trim()) newErrors.address = 'Please enter home visit address';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate server response
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onSuccess) onSuccess();
    }, 1000);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: servicesData[0]?.title || 'Nursing Services',
      date: '',
      timeSlot: 'Morning (09:00 AM - 12:00 PM)',
      address: '',
      notes: ''
    });
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <div className="appointment-success-box">
        <div className="success-icon-wrap">
          <CheckCircle2 size={54} color="#004E9E" />
        </div>
        <h3>Appointment Request Received!</h3>
        <p>
          Thank you, <strong>{formData.fullName}</strong>. Our clinical coordinator will call you at <strong>{formData.phone}</strong> shortly to confirm your scheduled appointment for <strong>{formData.service}</strong>.
        </p>
        <div className="success-details-summary">
          <div><strong>Preferred Date:</strong> {formData.date} ({formData.timeSlot})</div>
          <div><strong>Location:</strong> {formData.address}</div>
        </div>
        <button type="button" className="btn btn-primary" onClick={resetForm}>
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <form className="appointment-booking-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row-2">
        {/* Full Name */}
        <div className="form-group">
          <label className="form-label" htmlFor="fullName">
            <User size={15} className="label-icon" /> Patient / Contact Name *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter patient or contact name"
            className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
            required
          />
          {errors.fullName && <div className="form-error"><AlertCircle size={12} /> {errors.fullName}</div>}
        </div>

        {/* Phone Number */}
        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            <Phone size={15} className="label-icon" /> Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            required
          />
          {errors.phone && <div className="form-error"><AlertCircle size={12} /> {errors.phone}</div>}
        </div>
      </div>

      <div className="form-row-2">
        {/* Email */}
        <div className="form-group">
          <label className="form-label" htmlFor="email">
            <Mail size={15} className="label-icon" /> Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            required
          />
          {errors.email && <div className="form-error"><AlertCircle size={12} /> {errors.email}</div>}
        </div>

        {/* Required Service */}
        <div className="form-group">
          <label className="form-label" htmlFor="service">
            Select Healthcare Service *
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="form-control"
          >
            {servicesData.map((srv) => (
              <option key={srv.id} value={srv.title}>
                {srv.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-row-2">
        {/* Preferred Date */}
        <div className="form-group">
          <label className="form-label" htmlFor="date">
            <Calendar size={15} className="label-icon" /> Preferred Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className={`form-control ${errors.date ? 'is-invalid' : ''}`}
            min={new Date().toISOString().split('T')[0]}
            required
          />
          {errors.date && <div className="form-error"><AlertCircle size={12} /> {errors.date}</div>}
        </div>

        {/* Preferred Time Slot */}
        <div className="form-group">
          <label className="form-label" htmlFor="timeSlot">
            <Clock size={15} className="label-icon" /> Preferred Time Slot
          </label>
          <select
            id="timeSlot"
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleChange}
            className="form-control"
          >
            <option value="Morning (09:00 AM - 12:00 PM)">Morning (09:00 AM - 12:00 PM)</option>
            <option value="Afternoon (12:00 PM - 04:00 PM)">Afternoon (12:00 PM - 04:00 PM)</option>
            <option value="Evening (04:00 PM - 08:00 PM)">Evening (04:00 PM - 08:00 PM)</option>
            <option value="12-Hour Day Shift">12-Hour Day Shift</option>
            <option value="12-Hour Night Shift">12-Hour Night Shift</option>
            <option value="24-Hour Live-in Care">24-Hour Live-in Care</option>
          </select>
        </div>
      </div>

      {/* Address */}
      <div className="form-group">
        <label className="form-label" htmlFor="address">
          <MapPin size={15} className="label-icon" /> Home Visit Address / City *
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Flat / House No, Street, Locality, City"
          className={`form-control ${errors.address ? 'is-invalid' : ''}`}
          required
        />
        {errors.address && <div className="form-error"><AlertCircle size={12} /> {errors.address}</div>}
      </div>

      {/* Additional Notes */}
      <div className="form-group">
        <label className="form-label" htmlFor="notes">
          Additional Medical Notes / Patient Condition (Optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows="3"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Please describe any specific requirements, current medications, or patient mobility details..."
          className="form-control"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
        {isSubmitting ? (
          <span>Scheduling Appointment...</span>
        ) : (
          <span>Book an Appointment</span>
        )}
      </button>
    </form>
  );
}
