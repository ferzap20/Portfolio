import { Link } from 'react-router-dom';
import Tag from './Tag';

interface CaseCardProps {
  slug: string;
  title: string;
  year: string;
  role: string;
  blurb: string;
  tools: string[];
  hero: string;
}

export default function CaseCard({ slug, title, year, role, blurb, tools, hero }: CaseCardProps) {
  return (
    <Link to={`/case/${slug}`} className="card">
      <img
        src={hero}
        alt={title}
        className="card-image"
        loading="lazy"
      />
      <div className="card-content">
        <div style={{ marginBottom: 'var(--space-sm)' }}>
          <h3 style={{
            fontSize: 'var(--font-size-xl)',
            fontWeight: 600,
            marginBottom: 'var(--space-xs)',
            color: 'var(--color-text)'
          }}>
            {title}
          </h3>
          <p style={{
            fontSize: 'var(--font-size-sm)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-xs)'
          }}>
            {year} · {role}
          </p>
        </div>
        <p style={{
          fontSize: 'var(--font-size-base)',
          color: 'var(--color-text-secondary)',
          lineHeight: 'var(--line-height-normal)',
          marginBottom: 'var(--space-md)'
        }}>
          {blurb}
        </p>
  <div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 'var(--space-xs)'
  }}
>
  {tools.slice(0, 3).map((tool, idx) => (
    <span
      key={idx}
      style={{
        backgroundColor: 'var(--color-accent)',
        color: '#fff',
        padding: '6px 14px',
        borderRadius: '9999px',
        fontSize: 'var(--font-size-sm)',
        fontWeight: 500,
        display: 'inline-block',
        lineHeight: 1,
        letterSpacing: '0.2px'
      }}
    >
      {tool}
    </span>
  ))}
</div>

      </div>
    </Link>
  );
}
