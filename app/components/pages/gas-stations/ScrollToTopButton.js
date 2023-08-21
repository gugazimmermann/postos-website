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
          className='fixed bottom-5 right-5 px-6 py-3 bg-amber-500 text-white text-3xl font-extrabold rounded-3xl cursor-pointer z-50 shadow-xl'
        >
          ↑
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
