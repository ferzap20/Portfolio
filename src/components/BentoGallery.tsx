import { useState } from 'react';
import Lightbox from './Lightbox';

interface GalleryImage {
  src: string;
  alt: string;
  ratio?: string;
}

interface BentoGalleryProps {
  images: GalleryImage[];
}

function getGridSpan(index: number, total: number): { col: number; row: number } {
  const patterns = [
    { col: 2, row: 2 },
    { col: 1, row: 1 },
    { col: 1, row: 1 },
    { col: 1, row: 2 },
    { col: 2, row: 1 },
    { col: 1, row: 1 },
    { col: 1, row: 1 },
    { col: 1, row: 2 },
    { col: 2, row: 2 },
  ];

  return patterns[index % patterns.length];
}

export default function BentoGallery({ images }: BentoGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="bento-gallery">
        {images.map((image, index) => {
          const span = getGridSpan(index, images.length);
          return (
            <div
              key={index}
              className="bento-gallery__item"
              style={{
                gridColumn: `span ${span.col}`,
                gridRow: `span ${span.row}`
              }}
              onClick={() => openLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  openLightbox(index);
                }
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="bento-gallery__image"
              />
              <div className="bento-gallery__overlay" />
            </div>
          );
        })}
      </div>

      {lightboxOpen && (
        <Lightbox
          image={images[currentIndex]}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  );
}
