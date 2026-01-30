import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useContent } from '../hooks/useContent';
import Tag from '../components/Tag';
import BentoGallery from '../components/BentoGallery';

export default function CaseDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { content, loading } = useContent();

  if (loading || !content) {
    return <div style={{ padding: 'var(--space-4xl)', textAlign: 'center' }}>Loading...</div>;
  }

  const allCases = [
    ...content.latest_works,
    ...content.ia_experiments,
    ...content.product_process,
    ...content.product_management,
    ...content.ux_research
  ];

  const caseStudy = allCases.find((c) => c.slug === slug);

  if (!caseStudy) {
    return (
      <div className="section">
        <div className="container container-md" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'var(--font-size-3xl)', marginBottom: 'var(--space-md)' }}>
            Case study not found
          </h1>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="section">
      <div className="container container-md">
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-xs)',
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-secondary)',
            textDecoration: 'none',
            marginBottom: 'var(--space-xl)',
            transition: 'color var(--transition-fast)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-text)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--color-text-secondary)'}
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <h1 style={{
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            fontWeight: 600,
            lineHeight: 1.1,
            marginBottom: 'var(--space-md)',
            color: 'var(--color-text)'
          }}>
            {caseStudy.title}
          </h1>

          <div style={{
            display: 'flex',
            gap: 'var(--space-md)',
            marginBottom: 'var(--space-md)',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-text-secondary)'
            }}>
              {caseStudy.year}
            </span>
            <span style={{ color: 'var(--color-border)' }}>•</span>
            <span style={{
              fontSize: 'var(--font-size-sm)',
              color: 'var(--color-text-secondary)'
            }}>
              {caseStudy.role}
            </span>
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
            {caseStudy.tools.map((tool, idx) => (
              <Tag key={idx}>{tool}</Tag>
            ))}
          </div>
        </div>

        <img
          src={caseStudy.hero}
          alt={caseStudy.title}
          style={{
            width: '100%',
            borderRadius: 'var(--radius)',
            marginBottom: 'var(--space-3xl)'
          }}
        />

        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 600,
            marginBottom: 'var(--space-md)',
            color: 'var(--color-text)'
          }}>
            The Problem
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-text-secondary)',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            {caseStudy.problem}
          </p>
        </div>

        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 600,
            marginBottom: 'var(--space-md)',
            color: 'var(--color-text)'
          }}>
            Approach
          </h2>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-sm)'
          }}>
            {caseStudy.approach.map((item, idx) => (
              <li
                key={idx}
                style={{
                  fontSize: 'var(--font-size-base)',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 'var(--line-height-normal)',
                  paddingLeft: 'var(--space-lg)',
                  position: 'relative'
                }}
              >
                <span style={{
                  position: 'absolute',
                  left: 0,
                  color: 'var(--color-accent)',
                  fontWeight: 600
                }}>
                  →
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <h2 style={{
            fontSize: 'var(--font-size-2xl)',
            fontWeight: 600,
            marginBottom: 'var(--space-md)',
            color: 'var(--color-text)'
          }}>
            Outcome
          </h2>
          <p style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-text-secondary)',
            lineHeight: 'var(--line-height-relaxed)'
          }}>
            {caseStudy.outcome}
          </p>
        </div>

        {caseStudy.gallery && caseStudy.gallery.length > 0 && (
          <div style={{ marginTop: 'var(--space-3xl)' }}>
            <h2 style={{
              fontSize: 'var(--font-size-2xl)',
              fontWeight: 600,
              marginBottom: 'var(--space-lg)',
              color: 'var(--color-text)'
            }}>
              Gallery
            </h2>
            <BentoGallery
              images={caseStudy.gallery.map((img) => ({
                src: img,
                alt: `${caseStudy.title} gallery image`
              }))}
            />
          </div>
        )}
      </div>
    </article>
  );
}
