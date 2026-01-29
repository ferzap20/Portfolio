import Hero from '../components/Hero';
import CaseList from '../components/CaseList';
import { useContent } from '../hooks/useContent';

export default function HomePage() {
  const { content, loading } = useContent();

  if (loading || !content) {
    return <div style={{ padding: 'var(--space-4xl)', textAlign: 'center', color: 'var(--color-text-secondary)' }}>Loading...</div>;
  }

  return (
    <>
      <Hero
        name_header={content.site.name_header}
        name={content.site.name}
        title={content.site.title}
        tagline={content.site.tagline}
        headshot={content.site.headshot}
        cv={content.site.cv}
      />

      <section className="section" id="work">
        <div className="container container-lg">
          <h2 style={{
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 600,
            marginBottom: 'var(--space-xl)',
            color: 'var(--color-text)'
          }}>
            Latest Work
          </h2>
          <CaseList cases={content.latest_works} />
        </div>
      </section>
    </>
  );
}
