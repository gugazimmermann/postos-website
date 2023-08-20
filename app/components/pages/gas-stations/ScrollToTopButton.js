'use client';
import React, { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-5 right-5 p-3 bg-amber-500 text-white rounded-full cursor-pointer z-50'
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
