import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[0-9+\-\s]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';

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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  if (isSuccess) {
    return (
      <div className="contact-success-msg">
        <CheckCircle2 size={48} color="#004E9E" />
        <h3>Message Sent Successfully!</h3>
        <p>
          Thank you for reaching out, <strong>{formData.name}</strong>. Our support team will get back to you within 24 hours.
        </p>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => {
            setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
            setIsSuccess(false);
          }}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="contact-name">Your Full Name *</label>
          <input
            type="text"
            id="contact-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            required
          />
          {errors.name && <div className="form-error"><AlertCircle size={12} /> {errors.name}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-phone">Phone Number *</label>
          <input
            type="tel"
            id="contact-phone"
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
        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">Email Address *</label>
          <input
            type="email"
            id="contact-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            required
          />
          {errors.email && <div className="form-error"><AlertCircle size={12} /> {errors.email}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-subject">Subject (Optional)</label>
          <input
            type="text"
            id="contact-subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject of inquiry"
            className="form-control"
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="contact-message">How can we help you? *</label>
        <textarea
          id="contact-message"
          name="message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please write your questions or home care service requirements..."
          className={`form-control ${errors.message ? 'is-invalid' : ''}`}
          required
        ></textarea>
        {errors.message && <div className="form-error"><AlertCircle size={12} /> {errors.message}</div>}
      </div>

      <button type="submit" className="btn btn-primary btn-submit-contact" disabled={isSubmitting}>
        <Send size={16} />
        <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
      </button>
    </form>
  );
}
