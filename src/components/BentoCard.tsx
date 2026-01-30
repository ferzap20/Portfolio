import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface BentoCardProps {
  title: string;
  subtitle: string;
  href: string;
  icon: LucideIcon;
  color: string;
  className?: string;
}

export default function BentoCard({
  title,
  subtitle,
  href,
  icon: Icon,
  color,
  className = ''
}: BentoCardProps) {
  return (
    <Link
      to={href}
      className={`bento-card ${className}`}
      style={{
        backgroundColor: color,
        padding: 'var(--space-xl)',
        borderRadius: 'var(--radius)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '200px',
        textDecoration: 'none',
        transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        const element = e.currentTarget as HTMLElement;
        element.style.transform = 'scale(1.02)';
        element.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
      }}
      onMouseLeave={(e) => {
        const element = e.currentTarget as HTMLElement;
        element.style.transform = 'scale(1)';
        element.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
      }}
    >
      {/* Icon section */}
      <div style={{ marginBottom: 'var(--space-lg)' }}>
        <Icon
          size={32}
          strokeWidth={1.5}
          style={{
            color: 'rgba(0, 0, 0, 0.5)',
            opacity: 0.6
          }}
        />
      </div>

      {/* Text content */}
      <div>
        <h3
          style={{
            fontSize: 'var(--font-size-lg)',
            fontWeight: 600,
            color: 'rgba(0, 0, 0, 0.8)',
            marginBottom: 'var(--space-xs)',
            lineHeight: 'var(--line-height-tight)'
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontSize: 'var(--font-size-sm)',
            color: 'rgba(0, 0, 0, 0.6)',
            lineHeight: 'var(--line-height-normal)'
          }}
        >
          {subtitle}
        </p>
      </div>
    </Link>
  );
}
