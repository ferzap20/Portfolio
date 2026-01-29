import { useState } from 'react';
import Lightbox from './Lightbox';

interface GalleryImage {
  src: string;
  alt: string;
  ratio: string;
}

interface BentoGalleryProps {
  images: GalleryImage[];
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
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 'var(--space-md)',
        marginBottom: 'var(--space-xl)'
      }}>
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => openLightbox(index)}
            style={{
              borderRadius: 'var(--radius)',
              overflow: 'hidden',
              cursor: 'pointer',
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              transition: 'all var(--transition-base)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--color-text-secondary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--color-border)';
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              style={{
                width: '100%',
                aspectRatio: image.ratio.replace(':', '/'),
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </div>
        ))}
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
