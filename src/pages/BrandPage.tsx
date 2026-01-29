import BentoGallery from '../components/BentoGallery';
import { useContent } from '../hooks/useContent';

export default function BrandPage() {
  const { content, loading } = useContent();

  if (loading || !content) {
    return <div style={{ padding: 'var(--space-4xl)', textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <section className="section">
      <div className="container container-lg">
        <div style={{ marginBottom: 'var(--space-3xl)' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 6vw, 3rem)',
            fontWeight: 600,
            marginBottom: 'var(--space-md)',
            color: 'var(--color-text)'
          }}>
            Gallery
          </h1>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-text-secondary)',
            maxWidth: '700px',
            lineHeight: 'var(--line-height-relaxed)',
            marginBottom: 'var(--space-xl)'
          }}>
            Visual documentation of design process, workshops, and collaboration moments.
          </p>
        </div>

        <BentoGallery images={content.gallery} />
      </div>
    </section>
  );
}
