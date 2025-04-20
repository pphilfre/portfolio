import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseLeave = () => {
      setHidden(true);
    };

    const onMouseEnter = () => {
      setHidden(false);
    };

    const onMouseDown = () => {
      setClicked(true);
    };

    const onMouseUp = () => {
      setClicked(false);
    };

    // Check for link hover
    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select, details, [tabindex]:not([tabindex="-1"])').forEach(el => {
        el.addEventListener('mouseenter', () => setLinkHovered(true));
        el.addEventListener('mouseleave', () => setLinkHovered(false));
      });
    };

    // Initial setup
    addEventListeners();
    handleLinkHoverEvents();

    // Re-apply link hover detection when DOM changes
    const observer = new MutationObserver(handleLinkHoverEvents);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => {
      // Clean up
      document.body.style.cursor = 'auto';
      removeEventListeners();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`custom-cursor ${clicked ? 'scale-75' : ''} ${linkHovered ? 'scale-150' : ''} ${hidden ? 'opacity-0' : 'opacity-100'}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.75 : linkHovered ? 1.5 : 1})`,
          transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
        }}
      />
    </>
  );
};

export default CustomCursor;
