import BentoCard from './BentoCard';
import {
  Network,
  Workflow,
  Zap,
  Lightbulb,
  Palette
} from 'lucide-react';

interface BentoItem {
  id: string;
  title: string;
  subtitle: string;
  href: string;
  icon: React.ComponentType<any>;
  color: string;
  span?: string;
}

// Define bento menu items with navigation paths
const bentoItems: BentoItem[] = [
  {
    id: 'ia-projects',
    title: 'IA Projects',
    subtitle: 'Information Architecture experiments',
    href: '/ia-tests',
    icon: Network,
    color: '#B8D4E8'
  },
  {
    id: 'design-process',
    title: 'Design Process',
    subtitle: 'Design Systems & Operations',
    href: '/process',
    icon: Workflow,
    color: '#C4E8D4'
  },
  {
    id: 'product-management',
    title: 'Product Management',
    subtitle: 'Strategic thinking & planning',
    href: '/management',
    icon: Zap,
    color: '#F9D5B7'
  },
  {
    id: 'ux-research',
    title: 'UX Research',
    subtitle: 'User insights & discoveries',
    href: '/research',
    icon: Lightbulb,
    color: '#D8C4E8'
  },
  {
    id: 'design-showcase',
    title: 'Design Showcase',
    subtitle: 'Visual identity & branding',
    href: '/brand',
    icon: Palette,
    color: '#F9C4C4'
  }
];

export default function BentoMenu() {
  return (
    <section style={{
      padding: 'var(--space-3xl) 0'
    }}>
      <div className="container container-lg">
        {/* Section title */}
        <h2
          style={{
            fontSize: 'var(--font-size-3xl)',
            fontWeight: 600,
            marginBottom: 'var(--space-xl)',
            color: 'var(--color-text)'
          }}
        >
          Explore My Work
        </h2>

        {/* Asymmetric bento grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--space-lg)',
            gridAutoRows: 'auto'
          }}
          className="bento-menu"
        >
          <style>{`
            /* Mobile: single column */
            @media (max-width: 767px) {
              .bento-menu {
                grid-template-columns: 1fr !important;
              }
              .bento-card {
                min-height: 160px !important;
              }
            }

            /* Tablet: 2 columns */
            @media (min-width: 768px) and (max-width: 1023px) {
              .bento-menu {
                grid-template-columns: repeat(2, 1fr) !important;
              }
            }

            /* Desktop: asymmetric 3-column layout */
            @media (min-width: 1024px) {
              .bento-menu {
                grid-template-columns: repeat(3, 1fr) !important;
                grid-template-rows: repeat(2, minmax(240px, auto)) !important;
              }

              /* First two cards span larger areas */
              .bento-menu > :nth-child(1) {
                grid-column: 1 / 2;
                grid-row: 1 / 3;
              }

              .bento-menu > :nth-child(2) {
                grid-column: 2 / 3;
                grid-row: 1 / 3;
              }

              /* Last three cards arrange below */
              .bento-menu > :nth-child(3) {
                grid-column: 3 / 4;
                grid-row: 1 / 2;
              }

              .bento-menu > :nth-child(4) {
                grid-column: 3 / 4;
                grid-row: 2 / 3;
              }

              .bento-menu > :nth-child(5) {
                grid-column: 1 / 4;
                grid-row: 3 / 4;
              }
            }
          `}</style>

          {/* Render all bento cards */}
          {bentoItems.map((item) => (
            <BentoCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              href={item.href}
              icon={item.icon}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
