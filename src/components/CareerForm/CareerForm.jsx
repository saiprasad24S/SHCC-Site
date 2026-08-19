import React, { useState } from 'react';
import { Upload, CheckCircle2, AlertCircle, Briefcase } from 'lucide-react';
import { careersData } from '../../data/eventsData';
import './CareerForm.css';

export default function CareerForm({ defaultRole = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    position: defaultRole || careersData.positions[0]?.title || 'Registered Staff Nurse',
    resume: null,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your full name';
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
    if (!formData.location.trim()) newErrors.location = 'Please enter your current city / location';
    if (!formData.resume) newErrors.resume = 'Please upload your resume (PDF, DOC, or DOCX)';

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

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const validExtensions = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const ext = file.name.split('.').pop().toLowerCase();
    
    if (validExtensions.includes(file.type) || ['pdf', 'doc', 'docx'].includes(ext)) {
      setFormData((prev) => ({ ...prev, resume: file }));
      setFileName(file.name);
      setErrors((prev) => ({ ...prev, resume: '' }));
    } else {
      setErrors((prev) => ({ ...prev, resume: 'Invalid file format. Please upload a PDF, DOC, or DOCX document.' }));
      setFormData((prev) => ({ ...prev, resume: null }));
      setFileName('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  if (isSuccess) {
    return (
      <div className="career-success-msg">
        <CheckCircle2 size={52} color="#004E9E" />
        <h3>Application Submitted Successfully!</h3>
        <p>
          Thank you for applying, <strong>{formData.name}</strong>. Our human resources and clinical hiring committee will review your application for the <strong>{formData.position}</strong> position and contact you shortly.
        </p>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => {
            setFormData({
              name: '',
              phone: '',
              email: '',
              location: '',
              position: careersData.positions[0]?.title || 'Registered Staff Nurse',
              resume: null,
              message: ''
            });
            setFileName('');
            setIsSuccess(false);
          }}
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form className="career-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="career-name">Full Name *</label>
          <input
            type="text"
            id="career-name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Swathi Reddy"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            required
          />
          {errors.name && <div className="form-error"><AlertCircle size={12} /> {errors.name}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="career-phone">Contact Phone *</label>
          <input
            type="tel"
            id="career-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +91 98765 43210"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            required
          />
          {errors.phone && <div className="form-error"><AlertCircle size={12} /> {errors.phone}</div>}
        </div>
      </div>

      <div className="form-row-2">
        <div className="form-group">
          <label className="form-label" htmlFor="career-email">Email Address *</label>
          <input
            type="email"
            id="career-email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. swathi@example.com"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            required
          />
          {errors.email && <div className="form-error"><AlertCircle size={12} /> {errors.email}</div>}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="career-location">Current City / Location *</label>
          <input
            type="text"
            id="career-location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. Hyderabad, Telangana"
            className={`form-control ${errors.location ? 'is-invalid' : ''}`}
            required
          />
          {errors.location && <div className="form-error"><AlertCircle size={12} /> {errors.location}</div>}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="career-position">Applying For Position *</label>
        <select
          id="career-position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="form-control"
        >
          {careersData.positions.map((pos) => (
            <option key={pos.id} value={pos.title}>
              {pos.title} ({pos.type})
            </option>
          ))}
          <option value="Other Healthcare Role">Other Healthcare Role</option>
        </select>
      </div>

      {/* Resume File Upload */}
      <div className="form-group">
        <label className="form-label">Upload Resume (PDF, DOC, DOCX) *</label>
        <div className={`file-upload-box ${errors.resume ? 'has-error' : ''}`}>
          <input
            type="file"
            id="resume-file"
            name="resume"
            accept=".pdf,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
            onChange={handleFileChange}
            className="file-input-hidden"
          />
          <label htmlFor="resume-file" className="file-upload-label">
            <Upload size={24} className="upload-icon" />
            <span className="upload-text">
              {fileName ? <strong>Selected: {fileName}</strong> : 'Click to select and upload resume'}
            </span>
            <span className="upload-hint">Supported formats: PDF, DOC, DOCX (Max 5MB)</span>
          </label>
        </div>
        {errors.resume && <div className="form-error"><AlertCircle size={12} /> {errors.resume}</div>}
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="career-message">Cover Note / Experience Summary</label>
        <textarea
          id="career-message"
          name="message"
          rows="3"
          value={formData.message}
          onChange={handleChange}
          placeholder="Briefly describe your healthcare qualifications, registrations (e.g. Nursing Council/BPT), and years of clinical experience..."
          className="form-control"
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary btn-submit" disabled={isSubmitting}>
        <Briefcase size={16} />
        {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
      </button>
    </form>
  );
}
