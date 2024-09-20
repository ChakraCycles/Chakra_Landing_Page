// SectionComponent.jsx
import React from 'react';

const SectionComponent = ({ imageSrc, title, text }) => {
  return (
    <div className="section-component">
      <div className="image-container">
        <img src={imageSrc} alt={title} className="section-image" />
      </div>
      <div className="text-container">
        <h2>{title}</h2>
        <p dangerouslySetInnerHTML={{ __html: text }}></p>
      </div>
    </div>
  );
};

export default SectionComponent;
