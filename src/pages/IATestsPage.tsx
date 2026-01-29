import CaseList from '../components/CaseList';
import { useContent } from '../hooks/useContent';

export default function IATestsPage() {
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
            IA Experiments
          </h1>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-text-secondary)',
            maxWidth: '700px',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            Exploring information architecture through card sorting, tree testing, and taxonomy design.
          </p>
        </div>

        <CaseList cases={content.ia_experiments} />
      </div>
    </section>
  );
}
