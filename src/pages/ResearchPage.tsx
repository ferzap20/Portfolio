import CaseList from '../components/CaseList';
import { useContent } from '../hooks/useContent';

export default function ResearchPage() {
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
            UX Research
          </h1>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-text-secondary)',
            maxWidth: '700px',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            User interviews, usability testing, and quantitative research driving product decisions.
          </p>
        </div>

        <CaseList cases={content.ux_research} />
      </div>
    </section>
  );
}
