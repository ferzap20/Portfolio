import CaseList from '../components/CaseList';
import { useContent } from '../hooks/useContent';

export default function ManagementPage() {
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
            Product Management
          </h1>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-text-secondary)',
            maxWidth: '700px',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            Strategic planning, roadmap prioritization, and cross-functional collaboration.
          </p>
        </div>

        <CaseList cases={content.product_management} />
      </div>
    </section>
  );
}
