import React, { useState } from 'react';
import './LinkWithHoverEffect.css'; // Import your CSS file

const LinkWithHoverEffect = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <a
      href="#"
      className={`link-with-hover-effect ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      Your Link Text
    </a>
  );
};

export default LinkWithHoverEffect;