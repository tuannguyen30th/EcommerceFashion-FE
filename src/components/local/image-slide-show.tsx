import React, { useState, useEffect } from 'react';

const images = [
  'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_mlWonrW-LUQ7kNvgEUi0vk&_nc_zt=23&_nc_ht=scontent.fsgn13-2.fna&_nc_gid=A1R9miZSfMuKc-yBwzmoVUo&oh=00_AYBwgUEa0efJzIMsbHVzZufZoAyzEWr6GunOnO889YTm9w&oe=675A0763',
  'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/468854925_1229461964976851_3633015965536218729_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uJSeJh3Yc7gQ7kNvgETEfUT&_nc_zt=23&_nc_ht=scontent.fsgn13-2.fna&_nc_gid=AN0PHjRm34PhyuWI5el1rdx&oh=00_AYA_7KONach5n2Nij6hepSraOlUeQ2mF50Rxt_PHv4f1aQ&oe=675A0206',
  'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/468931911_1229461948310186_5461644632677068263_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_mlWonrW-LUQ7kNvgEUi0vk&_nc_zt=23&_nc_ht=scontent.fsgn13-2.fna&_nc_gid=A1R9miZSfMuKc-yBwzmoVUo&oh=00_AYBwgUEa0efJzIMsbHVzZufZoAyzEWr6GunOnO889YTm9w&oe=675A0763',
  'https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/468854925_1229461964976851_3633015965536218729_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=uJSeJh3Yc7gQ7kNvgETEfUT&_nc_zt=23&_nc_ht=scontent.fsgn13-2.fna&_nc_gid=AN0PHjRm34PhyuWI5el1rdx&oh=00_AYA_7KONach5n2Nij6hepSraOlUeQ2mF50Rxt_PHv4f1aQ&oe=675A0206',
];

const ImageSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={src}
            alt={`Slideshow image ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlideshow;

