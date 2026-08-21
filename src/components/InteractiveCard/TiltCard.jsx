import React, { useRef, useState, useCallback } from 'react';
import './TiltCard.css';

export default function TiltCard({
  children,
  className = '',
  maxRotation = 6,
  scale = 1.02,
  perspective = 1000,
  ...rest
}) {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) * 100;
    const yPct = (mouseY / height) * 100;

    // Calculate rotation (-maxRotation to +maxRotation)
    const rotateY = ((mouseX / width) - 0.5) * (maxRotation * 2);
    const rotateX = -((mouseY / height) - 0.5) * (maxRotation * 2);

    cardRef.current.style.setProperty('--sheen-x', `${xPct}%`);
    cardRef.current.style.setProperty('--sheen-y', `${yPct}%`);

    setTransformStyle(
      `perspective(${perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale}) translateZ(6px)`
    );
  }, [maxRotation, scale, perspective]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTransformStyle(`perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1) translateZ(0px)`);
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card-container ${isHovered ? 'is-tilting' : ''} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
      {...rest}
    >
      <div className="tilt-card-sheen" aria-hidden="true"></div>
      <div className="tilt-card-content">
        {children}
      </div>
    </div>
  );
}
