import { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  image: {
    src: string;
    alt: string;
  };
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({ image, onClose, onNext, onPrev }: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="lightbox" onClick={onClose}>
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>

      <button
        style={{
          position: 'absolute',
          left: 'var(--space-lg)',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          padding: 'var(--space-md)',
          fontSize: 'var(--font-size-3xl)'
        }}
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
      >
        <ChevronLeft size={40} />
      </button>

      <img
        src={image.src}
        alt={image.alt}
        className="lightbox-image"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        style={{
          position: 'absolute',
          right: 'var(--space-lg)',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: '#fff',
          cursor: 'pointer',
          padding: 'var(--space-md)',
          fontSize: 'var(--font-size-3xl)'
        }}
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
}
