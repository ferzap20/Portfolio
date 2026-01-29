/**
 * GALLERY COMPONENT
 *
 * Bento-style image gallery with lightbox modal
 * Click images to open full-size viewer with navigation
 *
 * FEATURES:
 *  - Responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop)
 *  - Lazy loading images
 *  - Lightbox modal on click
 *  - Left/right navigation arrows
 *  - Close button (ESC key or X button)
 *  - Smooth fade-in animation
 *  - Image captions
 *
 * EDITING GUIDE:
 *  - Change grid columns: edit src/styles/components.css under "IMAGE GALLERY COMPONENT"
 *  - Modify lightbox styling: edit src/styles/components.css under "LIGHTBOX MODAL COMPONENT"
 *  - Add image sections: pass different section prop to useGallery()
 *  - Adjust image aspect ratio: modify aspect-ratio CSS variable
 *
 * USAGE:
 *  const { data: galleryItems } = useGallery('Brand/Web');
 *  <Gallery items={galleryItems} />
 */

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { GalleryItem } from '../hooks/useFetchData';

interface GalleryProps {
  items: GalleryItem[];
}

export function Gallery({ items }: GalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImage = items[currentImageIndex];

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen]);

  return (
    <>
      <div className="gallery">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="gallery__item"
            onClick={() => {
              setCurrentImageIndex(index);
              setLightboxOpen(true);
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setCurrentImageIndex(index);
                setLightboxOpen(true);
              }
            }}
          >
            <img
              src={item.image_url}
              alt={item.alt_text}
              loading="lazy"
            />
            <div className="gallery__caption">{item.caption}</div>
          </div>
        ))}
      </div>

      {lightboxOpen && currentImage && (
        <div className="lightbox lightbox--open">
          <button
            className="lightbox__close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          <img
            src={currentImage.image_url}
            alt={currentImage.alt_text}
            className="lightbox__image"
          />

          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={handlePrevImage}
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={handleNextImage}
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </>
  );
}
