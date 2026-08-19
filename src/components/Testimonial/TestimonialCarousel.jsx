import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';
import img1 from '../../assets/images/skanda-14.jpg';
import img2 from '../../assets/images/skanda-12.jpg';
import './TestimonialCarousel.css';

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const current = testimonialsData[currentIndex];

  return (
    <section className="testimonial-section section-padding">
      <div className="container">
        <div className="testimonial-layout-grid">
          {/* Left: Tilted Decorative Images matching Reference Site */}
          <div className="testimonial-visual-pane">
            <div className="tilted-images-container">
              <div className="tilted-img-card img-card-1">
                <img src={img1} alt="Patient Care Testimonial 1" className="tilted-img" />
              </div>
              <div className="tilted-img-card img-card-2">
                <img src={img2} alt="Patient Care Testimonial 2" className="tilted-img" />
              </div>
            </div>
          </div>

          {/* Right: Testimonial Carousel Content */}
          <div className="testimonial-content-pane">
            <span className="section-badge-subtitle">Testimonial</span>
            <h2 className="section-main-title">What they say about us</h2>

            <div className="quote-mark-wrap">
              <Quote size={44} className="large-quote-mark" />
            </div>

            <div key={currentIndex} className="testimonial-slide-content fade-in-slide">
              <p className="testimonial-quote-text">
                "{current.content}"
              </p>

              <div className="testimonial-author-row">
                <div className="author-name-title">
                  <span className="author-name">{current.name}</span>
                  <span className="author-city">{current.location}</span>
                </div>

                <div className="testimonial-stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="testimonial-pagination-row">
              <div className="pagination-bullets">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`pag-bullet ${idx === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="nav-arrows-group">
                <button
                  type="button"
                  className="nav-arrow-btn"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  className="nav-arrow-btn"
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
