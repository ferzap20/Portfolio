/**
 * GALLERY PAGE
 *
 * Displays portfolio gallery with bento-style grid and lightbox
 * Full-screen image viewer with navigation
 *
 * EDITING GUIDE - ADDING GALLERY IMAGES:
 *  1. Go to Supabase dashboard > gallery_items table
 *  2. Click "Insert Row"
 *  3. Fill fields:
 *     - image_url: URL to image file (e.g., "/assets/gallery-1.jpg" or full URL)
 *     - caption: Short image description (shown on hover)
 *     - alt_text: Detailed alt text for accessibility
 *     - section: Category (default "Brand/Web", can use other sections)
 *     - order_index: Number for sorting (1, 2, 3, etc.)
 *     - is_active: true (to show the image)
 *  4. Save and refresh page
 *
 * IMAGE REQUIREMENTS:
 *  - Format: JPEG (compression: 60-70% quality), or WebP for better compression
 *  - Size: Optimize for web (typically 600-1200px width)
 *  - Storage: Use /public folder or external CDN
 *  - Alt text: Descriptive for accessibility (e.g., "User research synthesis board")
 *
 * TO MODIFY GRID LAYOUT:
 *  - Edit src/styles/components.css under "IMAGE GALLERY COMPONENT"
 *  - Change grid-template-columns for different column counts
 *  - Adjust gap between images
 *  - Modify aspect-ratio for image proportions
 */

import { useGallery } from '../hooks/useFetchData';
import { Gallery } from '../components/Gallery';

export function GalleryPage() {
  const { data: galleryItems, loading, error } = useGallery('Brand/Web');

  return (
    <div className="container mx-auto">
      <section className="section--header">
        <h1 className="text-h1" style={{ marginBottom: 'var(--space-2)' }}>
          Portfolio Gallery
        </h1>
        <p className="text-body" style={{
          color: 'var(--color-text-secondary)',
          marginBottom: 'var(--space-6)',
        }}>
          A selection of design work, prototypes, and creative explorations from recent projects.
          Click any image to view in full screen.
        </p>

        {error && (
          <div style={{
            padding: 'var(--space-4)',
            backgroundColor: 'var(--color-error)',
            color: 'white',
            borderRadius: 'var(--radius-md)',
            marginBottom: 'var(--space-4)',
          }}>
            Error loading gallery. Please try again later.
          </div>
        )}

        {loading ? (
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-6)',
            color: 'var(--color-text-secondary)',
          }}>
            Loading gallery...
          </div>
        ) : galleryItems.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: 'var(--space-6)',
            color: 'var(--color-text-secondary)',
          }}>
            No gallery items yet
          </div>
        ) : (
          <Gallery items={galleryItems} />
        )}
      </section>
    </div>
  );
}
