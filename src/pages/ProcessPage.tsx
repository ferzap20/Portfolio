import CaseList from '../components/CaseList';
import { useContent } from '../hooks/useContent';

export default function ProcessPage() {
  const { content, loading } = useContent();

  if (loading || !content) {
    return <div style={{ padding: 'var(--space-4xl)', textAlign: 'center', color: 'var(--color-text-secondary)' }}>Loading...</div>;
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
            Product Process
          </h1>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-text-secondary)',
            maxWidth: '700px',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            Design systems, workflows, and frameworks that enable teams to ship better products faster.
          </p>
        </div>

        <CaseList cases={content.product_process} />
      </div>
    </section>
  );
}
