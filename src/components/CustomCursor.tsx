
import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    
    const handleMouseEnterLink = () => setLinkHovered(true);
    const handleMouseLeaveLink = () => setLinkHovered(false);
    
    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    
    // Add mouse move listener
    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseenter', handleMouseEnter);
    
    // Add event listeners to all links and buttons
    const links = document.querySelectorAll('a, button, .hover-effect');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleMouseEnterLink);
      link.addEventListener('mouseleave', handleMouseLeaveLink);
    });
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseenter', handleMouseEnter);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', handleMouseEnterLink);
        link.removeEventListener('mouseleave', handleMouseLeaveLink);
      });
    };
  }, []);
  
  useEffect(() => {
    // When component mounts, make cursors visible with a delay
    const timer = setTimeout(() => {
      const dot = document.querySelector('.cursor-dot');
      const outline = document.querySelector('.cursor-outline');
      
      if (dot && outline) {
        (dot as HTMLElement).style.opacity = '1';
        (outline as HTMLElement).style.opacity = '1';
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const dotStyles = {
    transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%))`,
    opacity: hidden ? 0 : 1,
    width: clicked ? '6px' : linkHovered ? '8px' : '6px',
    height: clicked ? '6px' : linkHovered ? '8px' : '6px',
  };
  
  const outlineStyles = {
    transform: `translate(calc(${position.x}px - 50%), calc(${position.y}px - 50%)) scale(${clicked ? 0.8 : linkHovered ? 1.5 : 1})`,
    opacity: hidden ? 0 : 1,
    backgroundColor: linkHovered ? 'rgba(155, 135, 245, 0.1)' : 'transparent',
    mixBlendMode: 'normal',
  };

  return (
    <>
      <div className="cursor-dot" style={dotStyles}></div>
      <div className="cursor-outline" style={outlineStyles}></div>
    </>
  );
};

export default CustomCursor;
