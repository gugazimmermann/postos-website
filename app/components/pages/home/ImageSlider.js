'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const ImageSlider = ({ imageUrls, alt }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (imageUrls.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, 10000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [imageUrls.length]);

  if (imageUrls.length === 0) {
    return null;
  }

  return (
    <div>
      <Image
        priority
        src={imageUrls[currentImageIndex]}
        width={0}
        height={0}
        className='w-full float-right mr-4 rounded-3xl shadow-lg'
        alt={alt}
      />
    </div>
  );
};

export default ImageSlider;
